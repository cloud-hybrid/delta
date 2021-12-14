import * as cdktf from 'cdktf';
import { Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch, Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference, Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatement, Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatement, Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatement, Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement, Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementLabelMatchStatement } from './structs1200';
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatement): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatement[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatement[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatement): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatement[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatementStatement[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatement {
    /**
    * and_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#and_statement Wafv2WebAcl#and_statement}
    */
    readonly andStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatement;
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementLabelMatchStatement;
    /**
    * not_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#not_statement Wafv2WebAcl#not_statement}
    */
    readonly notStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatement;
    /**
    * or_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#or_statement Wafv2WebAcl#or_statement}
    */
    readonly orStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementOrStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatement): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatement[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatement[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatement): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatement[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatementStatement[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatement): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatement[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatementStatement[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatement): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatement[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatementStatement[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatement {
    /**
    * and_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#and_statement Wafv2WebAcl#and_statement}
    */
    readonly andStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementAndStatement;
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementLabelMatchStatement;
    /**
    * not_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#not_statement Wafv2WebAcl#not_statement}
    */
    readonly notStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementNotStatement;
    /**
    * or_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#or_statement Wafv2WebAcl#or_statement}
    */
    readonly orStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementOrStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatement): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementNotStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatement[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementNotStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementNotStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementNotStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementNotStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementNotStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementNotStatementStatementNotStatementStatement[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation): any;
//# sourceMappingURL=structs1600.d.ts.map