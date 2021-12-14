import * as cdktf from 'cdktf';
import { Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement, Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatement, Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatement, Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatement, Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement, Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementLabelMatchStatement, Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatement } from './structs2000';
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatement): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatement[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatement[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatement {
    /**
    * and_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#and_statement Wafv2WebAcl#and_statement}
    */
    readonly andStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatement;
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementLabelMatchStatement;
    /**
    * not_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#not_statement Wafv2WebAcl#not_statement}
    */
    readonly notStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatement;
    /**
    * or_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#or_statement Wafv2WebAcl#or_statement}
    */
    readonly orStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatement): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatement[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatement[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatement): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatement[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatementStatement[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatement): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatement[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatementStatement[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatement): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatement[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatementStatement[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatement {
    /**
    * and_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#and_statement Wafv2WebAcl#and_statement}
    */
    readonly andStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementAndStatement;
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementLabelMatchStatement;
    /**
    * not_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#not_statement Wafv2WebAcl#not_statement}
    */
    readonly notStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementNotStatement;
    /**
    * or_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#or_statement Wafv2WebAcl#or_statement}
    */
    readonly orStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementOrStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatement): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementNotStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatement[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementNotStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementNotStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementNotStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementNotStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementNotStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementOrStatementStatementNotStatementStatement[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatement): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatement[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementAndStatementStatement[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
//# sourceMappingURL=structs2400.d.ts.map