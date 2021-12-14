import * as cdktf from 'cdktf';
import { Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch, Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference, Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation, Wafv2WebAclRuleStatementNotStatementStatementAndStatement, Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatement, Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatement, Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatement, Wafv2WebAclRuleStatementNotStatementStatementLabelMatchStatement, Wafv2WebAclRuleStatementNotStatementStatementNotStatement } from './structs1600';
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatement): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatement[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatement[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatement): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatement[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatementStatement[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatement): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatement[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatementStatement[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatement {
    /**
    * and_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#and_statement Wafv2WebAcl#and_statement}
    */
    readonly andStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatement;
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementLabelMatchStatement;
    /**
    * not_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#not_statement Wafv2WebAcl#not_statement}
    */
    readonly notStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementNotStatement;
    /**
    * or_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#or_statement Wafv2WebAcl#or_statement}
    */
    readonly orStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementOrStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatement): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatement[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatement[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatement {
    /**
    * and_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#and_statement Wafv2WebAcl#and_statement}
    */
    readonly andStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatement;
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementLabelMatchStatement;
    /**
    * not_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#not_statement Wafv2WebAcl#not_statement}
    */
    readonly notStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatement;
    /**
    * or_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#or_statement Wafv2WebAcl#or_statement}
    */
    readonly orStatement?: Wafv2WebAclRuleStatementNotStatementStatementOrStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementNotStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatement): any;
export interface Wafv2WebAclRuleStatementNotStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementNotStatementStatement[];
}
export declare function wafv2WebAclRuleStatementNotStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementOutputReference | Wafv2WebAclRuleStatementNotStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementNotStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementNotStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementNotStatementStatement[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatement): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatement[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementAndStatementStatement[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatement): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatement[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementNotStatementStatement[];
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementOrStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
//# sourceMappingURL=structs2000.d.ts.map