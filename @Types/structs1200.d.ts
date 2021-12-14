import * as cdktf from 'cdktf';
import { Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementByteMatchStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementGeoMatchStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementLabelMatchStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementSizeConstraintStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementSqliMatchStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementAndStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementByteMatchStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementGeoMatchStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementIpSetReferenceStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementLabelMatchStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementNotStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAndStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAndStatementOutputReference, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementOutputReference, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatementOutputReference, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatementOutputReference, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementLabelMatchStatement, Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementLabelMatchStatementOutputReference } from './structs800';
import { Wafv2WebAclRuleStatementManagedRuleGroupStatementExcludedRule } from './structs400';
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatement): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatement[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatementStatement[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatement {
    /**
    * and_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#and_statement Wafv2WebAcl#and_statement}
    */
    readonly andStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementAndStatement;
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementLabelMatchStatement;
    /**
    * not_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#not_statement Wafv2WebAcl#not_statement}
    */
    readonly notStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementNotStatement;
    /**
    * or_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#or_statement Wafv2WebAcl#or_statement}
    */
    readonly orStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementOrStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatement): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatement[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementStatement[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatement): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatement[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatementStatement[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatement): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatement[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatementStatement[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatement): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatement[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatementStatement[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatement {
    /**
    * and_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#and_statement Wafv2WebAcl#and_statement}
    */
    readonly andStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementAndStatement;
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementLabelMatchStatement;
    /**
    * not_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#not_statement Wafv2WebAcl#not_statement}
    */
    readonly notStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementNotStatement;
    /**
    * or_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#or_statement Wafv2WebAcl#or_statement}
    */
    readonly orStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementOrStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatement): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatement[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementStatement[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement {
    /**
    * and_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#and_statement Wafv2WebAcl#and_statement}
    */
    readonly andStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAndStatement;
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementLabelMatchStatement;
    /**
    * not_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#not_statement Wafv2WebAcl#not_statement}
    */
    readonly notStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement;
    /**
    * or_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#or_statement Wafv2WebAcl#or_statement}
    */
    readonly orStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement | undefined);
    private _andStatement;
    get andStatement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAndStatementOutputReference;
    putAndStatement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAndStatement): void;
    resetAndStatement(): void;
    get andStatementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementAndStatement;
    private _byteMatchStatement;
    get byteMatchStatement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatementOutputReference;
    putByteMatchStatement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatement): void;
    resetByteMatchStatement(): void;
    get byteMatchStatementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementByteMatchStatement;
    private _geoMatchStatement;
    get geoMatchStatement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatementOutputReference;
    putGeoMatchStatement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatement): void;
    resetGeoMatchStatement(): void;
    get geoMatchStatementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementGeoMatchStatement;
    private _ipSetReferenceStatement;
    get ipSetReferenceStatement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatementOutputReference;
    putIpSetReferenceStatement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatement): void;
    resetIpSetReferenceStatement(): void;
    get ipSetReferenceStatementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementIpSetReferenceStatement;
    private _labelMatchStatement;
    get labelMatchStatement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementLabelMatchStatementOutputReference;
    putLabelMatchStatement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementLabelMatchStatement): void;
    resetLabelMatchStatement(): void;
    get labelMatchStatementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementLabelMatchStatement;
    private _notStatement;
    get notStatement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatementOutputReference;
    putNotStatement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement): void;
    resetNotStatement(): void;
    get notStatementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementNotStatement;
    private _orStatement;
    get orStatement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatementOutputReference;
    putOrStatement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement): void;
    resetOrStatement(): void;
    get orStatementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOrStatement;
    private _regexPatternSetReferenceStatement;
    get regexPatternSetReferenceStatement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatementOutputReference;
    putRegexPatternSetReferenceStatement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement): void;
    resetRegexPatternSetReferenceStatement(): void;
    get regexPatternSetReferenceStatementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementRegexPatternSetReferenceStatement;
    private _sizeConstraintStatement;
    get sizeConstraintStatement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatementOutputReference;
    putSizeConstraintStatement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement): void;
    resetSizeConstraintStatement(): void;
    get sizeConstraintStatementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSizeConstraintStatement;
    private _sqliMatchStatement;
    get sqliMatchStatement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatementOutputReference;
    putSqliMatchStatement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement): void;
    resetSqliMatchStatement(): void;
    get sqliMatchStatementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementSqliMatchStatement;
    private _xssMatchStatement;
    get xssMatchStatement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatementOutputReference;
    putXssMatchStatement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement): void;
    resetXssMatchStatement(): void;
    get xssMatchStatementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementXssMatchStatement;
}
export interface Wafv2WebAclRuleStatementManagedRuleGroupStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#vendor_name Wafv2WebAcl#vendor_name}
    */
    readonly vendorName: string;
    /**
    * excluded_rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#excluded_rule Wafv2WebAcl#excluded_rule}
    */
    readonly excludedRule?: Wafv2WebAclRuleStatementManagedRuleGroupStatementExcludedRule[];
    /**
    * scope_down_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope_down_statement Wafv2WebAcl#scope_down_statement}
    */
    readonly scopeDownStatement?: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement;
}
export declare function wafv2WebAclRuleStatementManagedRuleGroupStatementToTerraform(struct?: Wafv2WebAclRuleStatementManagedRuleGroupStatementOutputReference | Wafv2WebAclRuleStatementManagedRuleGroupStatement): any;
export declare class Wafv2WebAclRuleStatementManagedRuleGroupStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementManagedRuleGroupStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementManagedRuleGroupStatement | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _vendorName?;
    get vendorName(): string;
    set vendorName(value: string);
    get vendorNameInput(): string;
    private _excludedRule?;
    get excludedRule(): Wafv2WebAclRuleStatementManagedRuleGroupStatementExcludedRule[];
    set excludedRule(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementExcludedRule[]);
    resetExcludedRule(): void;
    get excludedRuleInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementExcludedRule[];
    private _scopeDownStatement;
    get scopeDownStatement(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatementOutputReference;
    putScopeDownStatement(value: Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement): void;
    resetScopeDownStatement(): void;
    get scopeDownStatementInput(): Wafv2WebAclRuleStatementManagedRuleGroupStatementScopeDownStatement;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatement | undefined);
    private _comparisonOperator?;
    get comparisonOperator(): string;
    set comparisonOperator(value: string);
    get comparisonOperatorInput(): string;
    private _size?;
    get size(): number;
    set size(value: number);
    get sizeInput(): number;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatement {
    /**
    * field_to_match block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#field_to_match Wafv2WebAcl#field_to_match}
    */
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatement | undefined);
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatement {
    /**
    * byte_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#byte_match_statement Wafv2WebAcl#byte_match_statement}
    */
    readonly byteMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementByteMatchStatement;
    /**
    * geo_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#geo_match_statement Wafv2WebAcl#geo_match_statement}
    */
    readonly geoMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementGeoMatchStatement;
    /**
    * ip_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_reference_statement Wafv2WebAcl#ip_set_reference_statement}
    */
    readonly ipSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementIpSetReferenceStatement;
    /**
    * label_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#label_match_statement Wafv2WebAcl#label_match_statement}
    */
    readonly labelMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementLabelMatchStatement;
    /**
    * regex_pattern_set_reference_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#regex_pattern_set_reference_statement Wafv2WebAcl#regex_pattern_set_reference_statement}
    */
    readonly regexPatternSetReferenceStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementRegexPatternSetReferenceStatement;
    /**
    * size_constraint_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#size_constraint_statement Wafv2WebAcl#size_constraint_statement}
    */
    readonly sizeConstraintStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSizeConstraintStatement;
    /**
    * sqli_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#sqli_match_statement Wafv2WebAcl#sqli_match_statement}
    */
    readonly sqliMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementSqliMatchStatement;
    /**
    * xss_match_statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#xss_match_statement Wafv2WebAcl#xss_match_statement}
    */
    readonly xssMatchStatement?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementXssMatchStatement;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatement): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatement {
    /**
    * statement block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#statement Wafv2WebAcl#statement}
    */
    readonly statement: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatement[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatement | undefined);
    private _statement?;
    get statement(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatement[];
    set statement(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatement[]);
    get statementInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementAndStatementStatement[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#priority Wafv2WebAcl#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#type Wafv2WebAcl#type}
    */
    readonly type: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation): any;
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatement {
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
    readonly fieldToMatch?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    /**
    * text_transformation block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#text_transformation Wafv2WebAcl#text_transformation}
    */
    readonly textTransformation: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatement | undefined);
    private _positionalConstraint?;
    get positionalConstraint(): string;
    set positionalConstraint(value: string);
    get positionalConstraintInput(): string;
    private _searchString?;
    get searchString(): string;
    set searchString(value: string);
    get searchStringInput(): string;
    private _fieldToMatch;
    get fieldToMatch(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference;
    putFieldToMatch(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch): void;
    resetFieldToMatch(): void;
    get fieldToMatchInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementFieldToMatch;
    private _textTransformation?;
    get textTransformation(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
    set textTransformation(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation[]);
    get textTransformationInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementByteMatchStatementTextTransformation[];
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#fallback_behavior Wafv2WebAcl#fallback_behavior}
    */
    readonly fallbackBehavior: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#header_name Wafv2WebAcl#header_name}
    */
    readonly headerName: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig | undefined);
    private _fallbackBehavior?;
    get fallbackBehavior(): string;
    set fallbackBehavior(value: string);
    get fallbackBehaviorInput(): string;
    private _headerName?;
    get headerName(): string;
    set headerName(value: string);
    get headerNameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#country_codes Wafv2WebAcl#country_codes}
    */
    readonly countryCodes: string[];
    /**
    * forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#forwarded_ip_config Wafv2WebAcl#forwarded_ip_config}
    */
    readonly forwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatement | undefined);
    private _countryCodes?;
    get countryCodes(): string[];
    set countryCodes(value: string[]);
    get countryCodesInput(): string[];
    private _forwardedIpConfig;
    get forwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference;
    putForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig): void;
    resetForwardedIpConfig(): void;
    get forwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig {
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
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig | undefined);
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
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#arn Wafv2WebAcl#arn}
    */
    readonly arn: string;
    /**
    * ip_set_forwarded_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#ip_set_forwarded_ip_config Wafv2WebAcl#ip_set_forwarded_ip_config}
    */
    readonly ipSetForwardedIpConfig?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatement | undefined);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    private _ipSetForwardedIpConfig;
    get ipSetForwardedIpConfig(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference;
    putIpSetForwardedIpConfig(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig): void;
    resetIpSetForwardedIpConfig(): void;
    get ipSetForwardedIpConfigInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfig;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementLabelMatchStatement {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#key Wafv2WebAcl#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#scope Wafv2WebAcl#scope}
    */
    readonly scope: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementLabelMatchStatementOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementLabelMatchStatement): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementLabelMatchStatement | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementLabelMatchStatement | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _scope?;
    get scope(): string;
    set scope(value: string);
    get scopeInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#name Wafv2WebAcl#name}
    */
    readonly name: string;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument | undefined);
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath {
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath | undefined);
}
export interface Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch {
    /**
    * all_query_arguments block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#all_query_arguments Wafv2WebAcl#all_query_arguments}
    */
    readonly allQueryArguments?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    /**
    * body block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#body Wafv2WebAcl#body}
    */
    readonly body?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    /**
    * method block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#method Wafv2WebAcl#method}
    */
    readonly method?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    /**
    * query_string block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#query_string Wafv2WebAcl#query_string}
    */
    readonly queryString?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    /**
    * single_header block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_header Wafv2WebAcl#single_header}
    */
    readonly singleHeader?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    /**
    * single_query_argument block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#single_query_argument Wafv2WebAcl#single_query_argument}
    */
    readonly singleQueryArgument?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    /**
    * uri_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/wafv2_web_acl.html#uri_path Wafv2WebAcl#uri_path}
    */
    readonly uriPath?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
export declare function wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct?: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference | Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch): any;
export declare class Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined;
    set internalValue(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatch | undefined);
    private _allQueryArguments;
    get allQueryArguments(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference;
    putAllQueryArguments(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments): void;
    resetAllQueryArguments(): void;
    get allQueryArgumentsInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArguments;
    private _body;
    get body(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference;
    putBody(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody): void;
    resetBody(): void;
    get bodyInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBody;
    private _method;
    get method(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference;
    putMethod(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod): void;
    resetMethod(): void;
    get methodInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethod;
    private _queryString;
    get queryString(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference;
    putQueryString(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString): void;
    resetQueryString(): void;
    get queryStringInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryString;
    private _singleHeader;
    get singleHeader(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference;
    putSingleHeader(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader): void;
    resetSingleHeader(): void;
    get singleHeaderInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeader;
    private _singleQueryArgument;
    get singleQueryArgument(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference;
    putSingleQueryArgument(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument): void;
    resetSingleQueryArgument(): void;
    get singleQueryArgumentInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgument;
    private _uriPath;
    get uriPath(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference;
    putUriPath(value: Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath): void;
    resetUriPath(): void;
    get uriPathInput(): Wafv2WebAclRuleStatementNotStatementStatementAndStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPath;
}
//# sourceMappingURL=structs1200.d.ts.map