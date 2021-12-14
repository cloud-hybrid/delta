import * as cdktf from 'cdktf';
import { wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform, Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference, wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementToTerraform, wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementToTerraform, wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform, wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementLabelMatchStatementToTerraform, wafv2RuleGroupRuleStatementNotStatementStatementAndStatementToTerraform, wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementToTerraform, wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementToTerraform, wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementToTerraform, wafv2RuleGroupRuleStatementNotStatementStatementLabelMatchStatementToTerraform, wafv2RuleGroupRuleStatementNotStatementStatementNotStatementToTerraform, wafv2RuleGroupRuleStatementAndStatementToTerraform, Wafv2RuleGroupRuleStatementAndStatementOutputReference, wafv2RuleGroupRuleStatementByteMatchStatementToTerraform, Wafv2RuleGroupRuleStatementByteMatchStatementOutputReference, wafv2RuleGroupRuleStatementGeoMatchStatementToTerraform, Wafv2RuleGroupRuleStatementGeoMatchStatementOutputReference, wafv2RuleGroupRuleStatementIpSetReferenceStatementToTerraform, Wafv2RuleGroupRuleStatementIpSetReferenceStatementOutputReference, wafv2RuleGroupRuleStatementLabelMatchStatementToTerraform, Wafv2RuleGroupRuleStatementLabelMatchStatementOutputReference, wafv2RuleGroupRuleActionToTerraform, wafv2RuleGroupRuleRuleLabelToTerraform } from './structs0';
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._comparisonOperator) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._size) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparisonOperator = undefined;
            this._size = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparisonOperator = value.comparisonOperator;
            this._size = value.size;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // comparison_operator - computed: false, optional: false, required: true
    _comparisonOperator;
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    set comparisonOperator(value) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    get comparisonOperatorInput() {
        return this._comparisonOperator;
    }
    // size - computed: false, optional: false, required: true
    _size;
    get size() {
        return this.getNumberAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        byte_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct.byteMatchStatement),
        geo_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct.geoMatchStatement),
        ip_set_reference_statement: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct.ipSetReferenceStatement),
        label_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct.labelMatchStatement),
        regex_pattern_set_reference_statement: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct.sizeConstraintStatement),
        sqli_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct.sqliMatchStatement),
        xss_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct.xssMatchStatement),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementOrStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementOrStatementStatementToTerraform)(struct.statement),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._statement) {
            hasAnyValues = true;
            internalValueResult.statement = this._statement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statement = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statement = value.statement;
        }
    }
    // statement - computed: false, optional: false, required: true
    _statement;
    get statement() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('statement');
    }
    set statement(value) {
        this._statement = value;
    }
    // Temporarily expose input value. Use with caution.
    get statementInput() {
        return this._statement;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._comparisonOperator) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._size) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparisonOperator = undefined;
            this._size = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparisonOperator = value.comparisonOperator;
            this._size = value.size;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // comparison_operator - computed: false, optional: false, required: true
    _comparisonOperator;
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    set comparisonOperator(value) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    get comparisonOperatorInput() {
        return this._comparisonOperator;
    }
    // size - computed: false, optional: false, required: true
    _size;
    get size() {
        return this.getNumberAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementNotStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        and_statement: wafv2RuleGroupRuleStatementNotStatementStatementAndStatementToTerraform(struct.andStatement),
        byte_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementByteMatchStatementToTerraform(struct.byteMatchStatement),
        geo_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementGeoMatchStatementToTerraform(struct.geoMatchStatement),
        ip_set_reference_statement: wafv2RuleGroupRuleStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct.ipSetReferenceStatement),
        label_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementLabelMatchStatementToTerraform(struct.labelMatchStatement),
        not_statement: wafv2RuleGroupRuleStatementNotStatementStatementNotStatementToTerraform(struct.notStatement),
        or_statement: wafv2RuleGroupRuleStatementNotStatementStatementOrStatementToTerraform(struct.orStatement),
        regex_pattern_set_reference_statement: wafv2RuleGroupRuleStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: wafv2RuleGroupRuleStatementNotStatementStatementSizeConstraintStatementToTerraform(struct.sizeConstraintStatement),
        sqli_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementSqliMatchStatementToTerraform(struct.sqliMatchStatement),
        xss_match_statement: wafv2RuleGroupRuleStatementNotStatementStatementXssMatchStatementToTerraform(struct.xssMatchStatement),
    };
}
export function wafv2RuleGroupRuleStatementNotStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementNotStatementStatementToTerraform)(struct.statement),
    };
}
export class Wafv2RuleGroupRuleStatementNotStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._statement) {
            hasAnyValues = true;
            internalValueResult.statement = this._statement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statement = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statement = value.statement;
        }
    }
    // statement - computed: false, optional: false, required: true
    _statement;
    get statement() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('statement');
    }
    set statement(value) {
        this._statement = value;
    }
    // Temporarily expose input value. Use with caution.
    get statementInput() {
        return this._statement;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._positionalConstraint) {
            hasAnyValues = true;
            internalValueResult.positionalConstraint = this._positionalConstraint;
        }
        if (this._searchString) {
            hasAnyValues = true;
            internalValueResult.searchString = this._searchString;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._positionalConstraint = undefined;
            this._searchString = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._positionalConstraint = value.positionalConstraint;
            this._searchString = value.searchString;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // positional_constraint - computed: false, optional: false, required: true
    _positionalConstraint;
    get positionalConstraint() {
        return this.getStringAttribute('positional_constraint');
    }
    set positionalConstraint(value) {
        this._positionalConstraint = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionalConstraintInput() {
        return this._positionalConstraint;
    }
    // search_string - computed: false, optional: false, required: true
    _searchString;
    get searchString() {
        return this.getStringAttribute('search_string');
    }
    set searchString(value) {
        this._searchString = value;
    }
    // Temporarily expose input value. Use with caution.
    get searchStringInput() {
        return this._searchString;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct.forwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._countryCodes) {
            hasAnyValues = true;
            internalValueResult.countryCodes = this._countryCodes;
        }
        if (this._forwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._countryCodes = undefined;
            this._forwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._countryCodes = value.countryCodes;
            this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
        }
    }
    // country_codes - computed: false, optional: false, required: true
    _countryCodes;
    get countryCodes() {
        return this.getListAttribute('country_codes');
    }
    set countryCodes(value) {
        this._countryCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodesInput() {
        return this._countryCodes;
    }
    // forwarded_ip_config - computed: false, optional: true, required: false
    _forwardedIpConfig = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config", true);
    get forwardedIpConfig() {
        return this._forwardedIpConfig;
    }
    putForwardedIpConfig(value) {
        this._forwardedIpConfig.internalValue = value;
    }
    resetForwardedIpConfig() {
        this._forwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardedIpConfigInput() {
        return this._forwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        if (this._position) {
            hasAnyValues = true;
            internalValueResult.position = this._position;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
            this._position = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
            this._position = value.position;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
    // position - computed: false, optional: false, required: true
    _position;
    get position() {
        return this.getStringAttribute('position');
    }
    set position(value) {
        this._position = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionInput() {
        return this._position;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct.ipSetForwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._ipSetForwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._ipSetForwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
    _ipSetForwardedIpConfig = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this, "ip_set_forwarded_ip_config", true);
    get ipSetForwardedIpConfig() {
        return this._ipSetForwardedIpConfig;
    }
    putIpSetForwardedIpConfig(value) {
        this._ipSetForwardedIpConfig.internalValue = value;
    }
    resetIpSetForwardedIpConfig() {
        this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetForwardedIpConfigInput() {
        return this._ipSetForwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._key = undefined;
            this._scope = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._scope = value.scope;
        }
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // scope - computed: false, optional: false, required: true
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._comparisonOperator) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._size) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparisonOperator = undefined;
            this._size = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparisonOperator = value.comparisonOperator;
            this._size = value.size;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // comparison_operator - computed: false, optional: false, required: true
    _comparisonOperator;
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    set comparisonOperator(value) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    get comparisonOperatorInput() {
        return this._comparisonOperator;
    }
    // size - computed: false, optional: false, required: true
    _size;
    get size() {
        return this.getNumberAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        byte_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementByteMatchStatementToTerraform(struct.byteMatchStatement),
        geo_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementGeoMatchStatementToTerraform(struct.geoMatchStatement),
        ip_set_reference_statement: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementIpSetReferenceStatementToTerraform(struct.ipSetReferenceStatement),
        label_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementLabelMatchStatementToTerraform(struct.labelMatchStatement),
        regex_pattern_set_reference_statement: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementRegexPatternSetReferenceStatementToTerraform(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSizeConstraintStatementToTerraform(struct.sizeConstraintStatement),
        sqli_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementSqliMatchStatementToTerraform(struct.sqliMatchStatement),
        xss_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementXssMatchStatementToTerraform(struct.xssMatchStatement),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementAndStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementAndStatementStatementToTerraform)(struct.statement),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementAndStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._statement) {
            hasAnyValues = true;
            internalValueResult.statement = this._statement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statement = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statement = value.statement;
        }
    }
    // statement - computed: false, optional: false, required: true
    _statement;
    get statement() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('statement');
    }
    set statement(value) {
        this._statement = value;
    }
    // Temporarily expose input value. Use with caution.
    get statementInput() {
        return this._statement;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._positionalConstraint) {
            hasAnyValues = true;
            internalValueResult.positionalConstraint = this._positionalConstraint;
        }
        if (this._searchString) {
            hasAnyValues = true;
            internalValueResult.searchString = this._searchString;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._positionalConstraint = undefined;
            this._searchString = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._positionalConstraint = value.positionalConstraint;
            this._searchString = value.searchString;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // positional_constraint - computed: false, optional: false, required: true
    _positionalConstraint;
    get positionalConstraint() {
        return this.getStringAttribute('positional_constraint');
    }
    set positionalConstraint(value) {
        this._positionalConstraint = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionalConstraintInput() {
        return this._positionalConstraint;
    }
    // search_string - computed: false, optional: false, required: true
    _searchString;
    get searchString() {
        return this.getStringAttribute('search_string');
    }
    set searchString(value) {
        this._searchString = value;
    }
    // Temporarily expose input value. Use with caution.
    get searchStringInput() {
        return this._searchString;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct.forwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._countryCodes) {
            hasAnyValues = true;
            internalValueResult.countryCodes = this._countryCodes;
        }
        if (this._forwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._countryCodes = undefined;
            this._forwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._countryCodes = value.countryCodes;
            this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
        }
    }
    // country_codes - computed: false, optional: false, required: true
    _countryCodes;
    get countryCodes() {
        return this.getListAttribute('country_codes');
    }
    set countryCodes(value) {
        this._countryCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodesInput() {
        return this._countryCodes;
    }
    // forwarded_ip_config - computed: false, optional: true, required: false
    _forwardedIpConfig = new Wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config", true);
    get forwardedIpConfig() {
        return this._forwardedIpConfig;
    }
    putForwardedIpConfig(value) {
        this._forwardedIpConfig.internalValue = value;
    }
    resetForwardedIpConfig() {
        this._forwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardedIpConfigInput() {
        return this._forwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        if (this._position) {
            hasAnyValues = true;
            internalValueResult.position = this._position;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
            this._position = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
            this._position = value.position;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
    // position - computed: false, optional: false, required: true
    _position;
    get position() {
        return this.getStringAttribute('position');
    }
    set position(value) {
        this._position = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionInput() {
        return this._position;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct.ipSetForwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._ipSetForwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._ipSetForwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
    _ipSetForwardedIpConfig = new Wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this, "ip_set_forwarded_ip_config", true);
    get ipSetForwardedIpConfig() {
        return this._ipSetForwardedIpConfig;
    }
    putIpSetForwardedIpConfig(value) {
        this._ipSetForwardedIpConfig.internalValue = value;
    }
    resetIpSetForwardedIpConfig() {
        this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetForwardedIpConfigInput() {
        return this._ipSetForwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementLabelMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._key = undefined;
            this._scope = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._scope = value.scope;
        }
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // scope - computed: false, optional: false, required: true
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._positionalConstraint) {
            hasAnyValues = true;
            internalValueResult.positionalConstraint = this._positionalConstraint;
        }
        if (this._searchString) {
            hasAnyValues = true;
            internalValueResult.searchString = this._searchString;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._positionalConstraint = undefined;
            this._searchString = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._positionalConstraint = value.positionalConstraint;
            this._searchString = value.searchString;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // positional_constraint - computed: false, optional: false, required: true
    _positionalConstraint;
    get positionalConstraint() {
        return this.getStringAttribute('positional_constraint');
    }
    set positionalConstraint(value) {
        this._positionalConstraint = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionalConstraintInput() {
        return this._positionalConstraint;
    }
    // search_string - computed: false, optional: false, required: true
    _searchString;
    get searchString() {
        return this.getStringAttribute('search_string');
    }
    set searchString(value) {
        this._searchString = value;
    }
    // Temporarily expose input value. Use with caution.
    get searchStringInput() {
        return this._searchString;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct.forwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._countryCodes) {
            hasAnyValues = true;
            internalValueResult.countryCodes = this._countryCodes;
        }
        if (this._forwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._countryCodes = undefined;
            this._forwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._countryCodes = value.countryCodes;
            this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
        }
    }
    // country_codes - computed: false, optional: false, required: true
    _countryCodes;
    get countryCodes() {
        return this.getListAttribute('country_codes');
    }
    set countryCodes(value) {
        this._countryCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodesInput() {
        return this._countryCodes;
    }
    // forwarded_ip_config - computed: false, optional: true, required: false
    _forwardedIpConfig = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config", true);
    get forwardedIpConfig() {
        return this._forwardedIpConfig;
    }
    putForwardedIpConfig(value) {
        this._forwardedIpConfig.internalValue = value;
    }
    resetForwardedIpConfig() {
        this._forwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardedIpConfigInput() {
        return this._forwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        if (this._position) {
            hasAnyValues = true;
            internalValueResult.position = this._position;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
            this._position = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
            this._position = value.position;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
    // position - computed: false, optional: false, required: true
    _position;
    get position() {
        return this.getStringAttribute('position');
    }
    set position(value) {
        this._position = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionInput() {
        return this._position;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct.ipSetForwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._ipSetForwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._ipSetForwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
    _ipSetForwardedIpConfig = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this, "ip_set_forwarded_ip_config", true);
    get ipSetForwardedIpConfig() {
        return this._ipSetForwardedIpConfig;
    }
    putIpSetForwardedIpConfig(value) {
        this._ipSetForwardedIpConfig.internalValue = value;
    }
    resetIpSetForwardedIpConfig() {
        this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetForwardedIpConfigInput() {
        return this._ipSetForwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._key = undefined;
            this._scope = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._scope = value.scope;
        }
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // scope - computed: false, optional: false, required: true
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._comparisonOperator) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._size) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparisonOperator = undefined;
            this._size = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparisonOperator = value.comparisonOperator;
            this._size = value.size;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // comparison_operator - computed: false, optional: false, required: true
    _comparisonOperator;
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    set comparisonOperator(value) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    get comparisonOperatorInput() {
        return this._comparisonOperator;
    }
    // size - computed: false, optional: false, required: true
    _size;
    get size() {
        return this.getNumberAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        byte_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementByteMatchStatementToTerraform(struct.byteMatchStatement),
        geo_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementGeoMatchStatementToTerraform(struct.geoMatchStatement),
        ip_set_reference_statement: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementIpSetReferenceStatementToTerraform(struct.ipSetReferenceStatement),
        label_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementLabelMatchStatementToTerraform(struct.labelMatchStatement),
        regex_pattern_set_reference_statement: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementRegexPatternSetReferenceStatementToTerraform(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSizeConstraintStatementToTerraform(struct.sizeConstraintStatement),
        sqli_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementSqliMatchStatementToTerraform(struct.sqliMatchStatement),
        xss_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementXssMatchStatementToTerraform(struct.xssMatchStatement),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementNotStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementNotStatementStatementToTerraform)(struct.statement),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementNotStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._statement) {
            hasAnyValues = true;
            internalValueResult.statement = this._statement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statement = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statement = value.statement;
        }
    }
    // statement - computed: false, optional: false, required: true
    _statement;
    get statement() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('statement');
    }
    set statement(value) {
        this._statement = value;
    }
    // Temporarily expose input value. Use with caution.
    get statementInput() {
        return this._statement;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        positional_constraint: cdktf.stringToTerraform(struct.positionalConstraint),
        search_string: cdktf.stringToTerraform(struct.searchString),
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._positionalConstraint) {
            hasAnyValues = true;
            internalValueResult.positionalConstraint = this._positionalConstraint;
        }
        if (this._searchString) {
            hasAnyValues = true;
            internalValueResult.searchString = this._searchString;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._positionalConstraint = undefined;
            this._searchString = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._positionalConstraint = value.positionalConstraint;
            this._searchString = value.searchString;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // positional_constraint - computed: false, optional: false, required: true
    _positionalConstraint;
    get positionalConstraint() {
        return this.getStringAttribute('positional_constraint');
    }
    set positionalConstraint(value) {
        this._positionalConstraint = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionalConstraintInput() {
        return this._positionalConstraint;
    }
    // search_string - computed: false, optional: false, required: true
    _searchString;
    get searchString() {
        return this.getStringAttribute('search_string');
    }
    set searchString(value) {
        this._searchString = value;
    }
    // Temporarily expose input value. Use with caution.
    get searchStringInput() {
        return this._searchString;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        country_codes: cdktf.listMapper(cdktf.stringToTerraform)(struct.countryCodes),
        forwarded_ip_config: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigToTerraform(struct.forwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._countryCodes) {
            hasAnyValues = true;
            internalValueResult.countryCodes = this._countryCodes;
        }
        if (this._forwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.forwardedIpConfig = this._forwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._countryCodes = undefined;
            this._forwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._countryCodes = value.countryCodes;
            this._forwardedIpConfig.internalValue = value.forwardedIpConfig;
        }
    }
    // country_codes - computed: false, optional: false, required: true
    _countryCodes;
    get countryCodes() {
        return this.getListAttribute('country_codes');
    }
    set countryCodes(value) {
        this._countryCodes = value;
    }
    // Temporarily expose input value. Use with caution.
    get countryCodesInput() {
        return this._countryCodes;
    }
    // forwarded_ip_config - computed: false, optional: true, required: false
    _forwardedIpConfig = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementForwardedIpConfigOutputReference(this, "forwarded_ip_config", true);
    get forwardedIpConfig() {
        return this._forwardedIpConfig;
    }
    putForwardedIpConfig(value) {
        this._forwardedIpConfig.internalValue = value;
    }
    resetForwardedIpConfig() {
        this._forwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get forwardedIpConfigInput() {
        return this._forwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        fallback_behavior: cdktf.stringToTerraform(struct.fallbackBehavior),
        header_name: cdktf.stringToTerraform(struct.headerName),
        position: cdktf.stringToTerraform(struct.position),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._fallbackBehavior) {
            hasAnyValues = true;
            internalValueResult.fallbackBehavior = this._fallbackBehavior;
        }
        if (this._headerName) {
            hasAnyValues = true;
            internalValueResult.headerName = this._headerName;
        }
        if (this._position) {
            hasAnyValues = true;
            internalValueResult.position = this._position;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fallbackBehavior = undefined;
            this._headerName = undefined;
            this._position = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fallbackBehavior = value.fallbackBehavior;
            this._headerName = value.headerName;
            this._position = value.position;
        }
    }
    // fallback_behavior - computed: false, optional: false, required: true
    _fallbackBehavior;
    get fallbackBehavior() {
        return this.getStringAttribute('fallback_behavior');
    }
    set fallbackBehavior(value) {
        this._fallbackBehavior = value;
    }
    // Temporarily expose input value. Use with caution.
    get fallbackBehaviorInput() {
        return this._fallbackBehavior;
    }
    // header_name - computed: false, optional: false, required: true
    _headerName;
    get headerName() {
        return this.getStringAttribute('header_name');
    }
    set headerName(value) {
        this._headerName = value;
    }
    // Temporarily expose input value. Use with caution.
    get headerNameInput() {
        return this._headerName;
    }
    // position - computed: false, optional: false, required: true
    _position;
    get position() {
        return this.getStringAttribute('position');
    }
    set position(value) {
        this._position = value;
    }
    // Temporarily expose input value. Use with caution.
    get positionInput() {
        return this._position;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        ip_set_forwarded_ip_config: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigToTerraform(struct.ipSetForwardedIpConfig),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._ipSetForwardedIpConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.ipSetForwardedIpConfig = this._ipSetForwardedIpConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._ipSetForwardedIpConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._ipSetForwardedIpConfig.internalValue = value.ipSetForwardedIpConfig;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // ip_set_forwarded_ip_config - computed: false, optional: true, required: false
    _ipSetForwardedIpConfig = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementIpSetForwardedIpConfigOutputReference(this, "ip_set_forwarded_ip_config", true);
    get ipSetForwardedIpConfig() {
        return this._ipSetForwardedIpConfig;
    }
    putIpSetForwardedIpConfig(value) {
        this._ipSetForwardedIpConfig.internalValue = value;
    }
    resetIpSetForwardedIpConfig() {
        this._ipSetForwardedIpConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetForwardedIpConfigInput() {
        return this._ipSetForwardedIpConfig.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        scope: cdktf.stringToTerraform(struct.scope),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementLabelMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._key) {
            hasAnyValues = true;
            internalValueResult.key = this._key;
        }
        if (this._scope) {
            hasAnyValues = true;
            internalValueResult.scope = this._scope;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._key = undefined;
            this._scope = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._key = value.key;
            this._scope = value.scope;
        }
    }
    // key - computed: false, optional: false, required: true
    _key;
    get key() {
        return this.getStringAttribute('key');
    }
    set key(value) {
        this._key = value;
    }
    // Temporarily expose input value. Use with caution.
    get keyInput() {
        return this._key;
    }
    // scope - computed: false, optional: false, required: true
    _scope;
    get scope() {
        return this.getStringAttribute('scope');
    }
    set scope(value) {
        this._scope = value;
    }
    // Temporarily expose input value. Use with caution.
    get scopeInput() {
        return this._scope;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._comparisonOperator) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._size) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparisonOperator = undefined;
            this._size = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparisonOperator = value.comparisonOperator;
            this._size = value.size;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // comparison_operator - computed: false, optional: false, required: true
    _comparisonOperator;
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    set comparisonOperator(value) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    get comparisonOperatorInput() {
        return this._comparisonOperator;
    }
    // size - computed: false, optional: false, required: true
    _size;
    get size() {
        return this.getNumberAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        byte_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementByteMatchStatementToTerraform(struct.byteMatchStatement),
        geo_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementGeoMatchStatementToTerraform(struct.geoMatchStatement),
        ip_set_reference_statement: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct.ipSetReferenceStatement),
        label_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementLabelMatchStatementToTerraform(struct.labelMatchStatement),
        regex_pattern_set_reference_statement: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSizeConstraintStatementToTerraform(struct.sizeConstraintStatement),
        sqli_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementSqliMatchStatementToTerraform(struct.sqliMatchStatement),
        xss_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementXssMatchStatementToTerraform(struct.xssMatchStatement),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementOrStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementOrStatementStatementToTerraform)(struct.statement),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementOrStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._statement) {
            hasAnyValues = true;
            internalValueResult.statement = this._statement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statement = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statement = value.statement;
        }
    }
    // statement - computed: false, optional: false, required: true
    _statement;
    get statement() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('statement');
    }
    set statement(value) {
        this._statement = value;
    }
    // Temporarily expose input value. Use with caution.
    get statementInput() {
        return this._statement;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._comparisonOperator) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._size) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparisonOperator = undefined;
            this._size = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparisonOperator = value.comparisonOperator;
            this._size = value.size;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // comparison_operator - computed: false, optional: false, required: true
    _comparisonOperator;
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    set comparisonOperator(value) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    get comparisonOperatorInput() {
        return this._comparisonOperator;
    }
    // size - computed: false, optional: false, required: true
    _size;
    get size() {
        return this.getNumberAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementOrStatementStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        and_statement: wafv2RuleGroupRuleStatementOrStatementStatementAndStatementToTerraform(struct.andStatement),
        byte_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementByteMatchStatementToTerraform(struct.byteMatchStatement),
        geo_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementGeoMatchStatementToTerraform(struct.geoMatchStatement),
        ip_set_reference_statement: wafv2RuleGroupRuleStatementOrStatementStatementIpSetReferenceStatementToTerraform(struct.ipSetReferenceStatement),
        label_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementLabelMatchStatementToTerraform(struct.labelMatchStatement),
        not_statement: wafv2RuleGroupRuleStatementOrStatementStatementNotStatementToTerraform(struct.notStatement),
        or_statement: wafv2RuleGroupRuleStatementOrStatementStatementOrStatementToTerraform(struct.orStatement),
        regex_pattern_set_reference_statement: wafv2RuleGroupRuleStatementOrStatementStatementRegexPatternSetReferenceStatementToTerraform(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: wafv2RuleGroupRuleStatementOrStatementStatementSizeConstraintStatementToTerraform(struct.sizeConstraintStatement),
        sqli_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementSqliMatchStatementToTerraform(struct.sqliMatchStatement),
        xss_match_statement: wafv2RuleGroupRuleStatementOrStatementStatementXssMatchStatementToTerraform(struct.xssMatchStatement),
    };
}
export function wafv2RuleGroupRuleStatementOrStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        statement: cdktf.listMapper(wafv2RuleGroupRuleStatementOrStatementStatementToTerraform)(struct.statement),
    };
}
export class Wafv2RuleGroupRuleStatementOrStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._statement) {
            hasAnyValues = true;
            internalValueResult.statement = this._statement;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._statement = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._statement = value.statement;
        }
    }
    // statement - computed: false, optional: false, required: true
    _statement;
    get statement() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('statement');
    }
    set statement(value) {
        this._statement = value;
    }
    // Temporarily expose input value. Use with caution.
    get statementInput() {
        return this._statement;
    }
}
export function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        arn: cdktf.stringToTerraform(struct.arn),
        field_to_match: wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._arn) {
            hasAnyValues = true;
            internalValueResult.arn = this._arn;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._arn = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._arn = value.arn;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // arn - computed: false, optional: false, required: true
    _arn;
    get arn() {
        return this.getStringAttribute('arn');
    }
    set arn(value) {
        this._arn = value;
    }
    // Temporarily expose input value. Use with caution.
    get arnInput() {
        return this._arn;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementSizeConstraintStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison_operator: cdktf.stringToTerraform(struct.comparisonOperator),
        size: cdktf.numberToTerraform(struct.size),
        field_to_match: wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementSizeConstraintStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementSizeConstraintStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._comparisonOperator) {
            hasAnyValues = true;
            internalValueResult.comparisonOperator = this._comparisonOperator;
        }
        if (this._size) {
            hasAnyValues = true;
            internalValueResult.size = this._size;
        }
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._comparisonOperator = undefined;
            this._size = undefined;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._comparisonOperator = value.comparisonOperator;
            this._size = value.size;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // comparison_operator - computed: false, optional: false, required: true
    _comparisonOperator;
    get comparisonOperator() {
        return this.getStringAttribute('comparison_operator');
    }
    set comparisonOperator(value) {
        this._comparisonOperator = value;
    }
    // Temporarily expose input value. Use with caution.
    get comparisonOperatorInput() {
        return this._comparisonOperator;
    }
    // size - computed: false, optional: false, required: true
    _size;
    get size() {
        return this.getNumberAttribute('size');
    }
    set size(value) {
        this._size = value;
    }
    // Temporarily expose input value. Use with caution.
    get sizeInput() {
        return this._size;
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementSizeConstraintStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementSqliMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementSqliMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementSqliMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementSqliMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBodyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBodyOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethodToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethodOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
    };
}
export class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference extends cdktf.ComplexObject {
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
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._name = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._name = value.name;
        }
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
}
export function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {};
}
export class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
        }
    }
}
export function wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        all_query_arguments: wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsToTerraform(struct.allQueryArguments),
        body: wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBodyToTerraform(struct.body),
        method: wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethodToTerraform(struct.method),
        query_string: wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryStringToTerraform(struct.queryString),
        single_header: wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeaderToTerraform(struct.singleHeader),
        single_query_argument: wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentToTerraform(struct.singleQueryArgument),
        uri_path: wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPathToTerraform(struct.uriPath),
    };
}
export class Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchOutputReference extends cdktf.ComplexObject {
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
        if (this._allQueryArguments?.internalValue) {
            hasAnyValues = true;
            internalValueResult.allQueryArguments = this._allQueryArguments?.internalValue;
        }
        if (this._body?.internalValue) {
            hasAnyValues = true;
            internalValueResult.body = this._body?.internalValue;
        }
        if (this._method?.internalValue) {
            hasAnyValues = true;
            internalValueResult.method = this._method?.internalValue;
        }
        if (this._queryString?.internalValue) {
            hasAnyValues = true;
            internalValueResult.queryString = this._queryString?.internalValue;
        }
        if (this._singleHeader?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleHeader = this._singleHeader?.internalValue;
        }
        if (this._singleQueryArgument?.internalValue) {
            hasAnyValues = true;
            internalValueResult.singleQueryArgument = this._singleQueryArgument?.internalValue;
        }
        if (this._uriPath?.internalValue) {
            hasAnyValues = true;
            internalValueResult.uriPath = this._uriPath?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._allQueryArguments.internalValue = undefined;
            this._body.internalValue = undefined;
            this._method.internalValue = undefined;
            this._queryString.internalValue = undefined;
            this._singleHeader.internalValue = undefined;
            this._singleQueryArgument.internalValue = undefined;
            this._uriPath.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._allQueryArguments.internalValue = value.allQueryArguments;
            this._body.internalValue = value.body;
            this._method.internalValue = value.method;
            this._queryString.internalValue = value.queryString;
            this._singleHeader.internalValue = value.singleHeader;
            this._singleQueryArgument.internalValue = value.singleQueryArgument;
            this._uriPath.internalValue = value.uriPath;
        }
    }
    // all_query_arguments - computed: false, optional: true, required: false
    _allQueryArguments = new Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchAllQueryArgumentsOutputReference(this, "all_query_arguments", true);
    get allQueryArguments() {
        return this._allQueryArguments;
    }
    putAllQueryArguments(value) {
        this._allQueryArguments.internalValue = value;
    }
    resetAllQueryArguments() {
        this._allQueryArguments.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allQueryArgumentsInput() {
        return this._allQueryArguments.internalValue;
    }
    // body - computed: false, optional: true, required: false
    _body = new Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchBodyOutputReference(this, "body", true);
    get body() {
        return this._body;
    }
    putBody(value) {
        this._body.internalValue = value;
    }
    resetBody() {
        this._body.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bodyInput() {
        return this._body.internalValue;
    }
    // method - computed: false, optional: true, required: false
    _method = new Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchMethodOutputReference(this, "method", true);
    get method() {
        return this._method;
    }
    putMethod(value) {
        this._method.internalValue = value;
    }
    resetMethod() {
        this._method.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get methodInput() {
        return this._method.internalValue;
    }
    // query_string - computed: false, optional: true, required: false
    _queryString = new Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchQueryStringOutputReference(this, "query_string", true);
    get queryString() {
        return this._queryString;
    }
    putQueryString(value) {
        this._queryString.internalValue = value;
    }
    resetQueryString() {
        this._queryString.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get queryStringInput() {
        return this._queryString.internalValue;
    }
    // single_header - computed: false, optional: true, required: false
    _singleHeader = new Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleHeaderOutputReference(this, "single_header", true);
    get singleHeader() {
        return this._singleHeader;
    }
    putSingleHeader(value) {
        this._singleHeader.internalValue = value;
    }
    resetSingleHeader() {
        this._singleHeader.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleHeaderInput() {
        return this._singleHeader.internalValue;
    }
    // single_query_argument - computed: false, optional: true, required: false
    _singleQueryArgument = new Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchSingleQueryArgumentOutputReference(this, "single_query_argument", true);
    get singleQueryArgument() {
        return this._singleQueryArgument;
    }
    putSingleQueryArgument(value) {
        this._singleQueryArgument.internalValue = value;
    }
    resetSingleQueryArgument() {
        this._singleQueryArgument.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get singleQueryArgumentInput() {
        return this._singleQueryArgument.internalValue;
    }
    // uri_path - computed: false, optional: true, required: false
    _uriPath = new Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchUriPathOutputReference(this, "uri_path", true);
    get uriPath() {
        return this._uriPath;
    }
    putUriPath(value) {
        this._uriPath.internalValue = value;
    }
    resetUriPath() {
        this._uriPath.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get uriPathInput() {
        return this._uriPath.internalValue;
    }
}
export function wafv2RuleGroupRuleStatementXssMatchStatementTextTransformationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        priority: cdktf.numberToTerraform(struct.priority),
        type: cdktf.stringToTerraform(struct.type),
    };
}
export function wafv2RuleGroupRuleStatementXssMatchStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        field_to_match: wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchToTerraform(struct.fieldToMatch),
        text_transformation: cdktf.listMapper(wafv2RuleGroupRuleStatementXssMatchStatementTextTransformationToTerraform)(struct.textTransformation),
    };
}
export class Wafv2RuleGroupRuleStatementXssMatchStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._fieldToMatch?.internalValue) {
            hasAnyValues = true;
            internalValueResult.fieldToMatch = this._fieldToMatch?.internalValue;
        }
        if (this._textTransformation) {
            hasAnyValues = true;
            internalValueResult.textTransformation = this._textTransformation;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._fieldToMatch.internalValue = undefined;
            this._textTransformation = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._fieldToMatch.internalValue = value.fieldToMatch;
            this._textTransformation = value.textTransformation;
        }
    }
    // field_to_match - computed: false, optional: true, required: false
    _fieldToMatch = new Wafv2RuleGroupRuleStatementXssMatchStatementFieldToMatchOutputReference(this, "field_to_match", true);
    get fieldToMatch() {
        return this._fieldToMatch;
    }
    putFieldToMatch(value) {
        this._fieldToMatch.internalValue = value;
    }
    resetFieldToMatch() {
        this._fieldToMatch.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fieldToMatchInput() {
        return this._fieldToMatch.internalValue;
    }
    // text_transformation - computed: false, optional: false, required: true
    _textTransformation;
    get textTransformation() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('text_transformation');
    }
    set textTransformation(value) {
        this._textTransformation = value;
    }
    // Temporarily expose input value. Use with caution.
    get textTransformationInput() {
        return this._textTransformation;
    }
}
export function wafv2RuleGroupRuleStatementToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        and_statement: wafv2RuleGroupRuleStatementAndStatementToTerraform(struct.andStatement),
        byte_match_statement: wafv2RuleGroupRuleStatementByteMatchStatementToTerraform(struct.byteMatchStatement),
        geo_match_statement: wafv2RuleGroupRuleStatementGeoMatchStatementToTerraform(struct.geoMatchStatement),
        ip_set_reference_statement: wafv2RuleGroupRuleStatementIpSetReferenceStatementToTerraform(struct.ipSetReferenceStatement),
        label_match_statement: wafv2RuleGroupRuleStatementLabelMatchStatementToTerraform(struct.labelMatchStatement),
        not_statement: wafv2RuleGroupRuleStatementNotStatementToTerraform(struct.notStatement),
        or_statement: wafv2RuleGroupRuleStatementOrStatementToTerraform(struct.orStatement),
        regex_pattern_set_reference_statement: wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementToTerraform(struct.regexPatternSetReferenceStatement),
        size_constraint_statement: wafv2RuleGroupRuleStatementSizeConstraintStatementToTerraform(struct.sizeConstraintStatement),
        sqli_match_statement: wafv2RuleGroupRuleStatementSqliMatchStatementToTerraform(struct.sqliMatchStatement),
        xss_match_statement: wafv2RuleGroupRuleStatementXssMatchStatementToTerraform(struct.xssMatchStatement),
    };
}
export class Wafv2RuleGroupRuleStatementOutputReference extends cdktf.ComplexObject {
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
        if (this._andStatement?.internalValue) {
            hasAnyValues = true;
            internalValueResult.andStatement = this._andStatement?.internalValue;
        }
        if (this._byteMatchStatement?.internalValue) {
            hasAnyValues = true;
            internalValueResult.byteMatchStatement = this._byteMatchStatement?.internalValue;
        }
        if (this._geoMatchStatement?.internalValue) {
            hasAnyValues = true;
            internalValueResult.geoMatchStatement = this._geoMatchStatement?.internalValue;
        }
        if (this._ipSetReferenceStatement?.internalValue) {
            hasAnyValues = true;
            internalValueResult.ipSetReferenceStatement = this._ipSetReferenceStatement?.internalValue;
        }
        if (this._labelMatchStatement?.internalValue) {
            hasAnyValues = true;
            internalValueResult.labelMatchStatement = this._labelMatchStatement?.internalValue;
        }
        if (this._notStatement?.internalValue) {
            hasAnyValues = true;
            internalValueResult.notStatement = this._notStatement?.internalValue;
        }
        if (this._orStatement?.internalValue) {
            hasAnyValues = true;
            internalValueResult.orStatement = this._orStatement?.internalValue;
        }
        if (this._regexPatternSetReferenceStatement?.internalValue) {
            hasAnyValues = true;
            internalValueResult.regexPatternSetReferenceStatement = this._regexPatternSetReferenceStatement?.internalValue;
        }
        if (this._sizeConstraintStatement?.internalValue) {
            hasAnyValues = true;
            internalValueResult.sizeConstraintStatement = this._sizeConstraintStatement?.internalValue;
        }
        if (this._sqliMatchStatement?.internalValue) {
            hasAnyValues = true;
            internalValueResult.sqliMatchStatement = this._sqliMatchStatement?.internalValue;
        }
        if (this._xssMatchStatement?.internalValue) {
            hasAnyValues = true;
            internalValueResult.xssMatchStatement = this._xssMatchStatement?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._andStatement.internalValue = undefined;
            this._byteMatchStatement.internalValue = undefined;
            this._geoMatchStatement.internalValue = undefined;
            this._ipSetReferenceStatement.internalValue = undefined;
            this._labelMatchStatement.internalValue = undefined;
            this._notStatement.internalValue = undefined;
            this._orStatement.internalValue = undefined;
            this._regexPatternSetReferenceStatement.internalValue = undefined;
            this._sizeConstraintStatement.internalValue = undefined;
            this._sqliMatchStatement.internalValue = undefined;
            this._xssMatchStatement.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._andStatement.internalValue = value.andStatement;
            this._byteMatchStatement.internalValue = value.byteMatchStatement;
            this._geoMatchStatement.internalValue = value.geoMatchStatement;
            this._ipSetReferenceStatement.internalValue = value.ipSetReferenceStatement;
            this._labelMatchStatement.internalValue = value.labelMatchStatement;
            this._notStatement.internalValue = value.notStatement;
            this._orStatement.internalValue = value.orStatement;
            this._regexPatternSetReferenceStatement.internalValue = value.regexPatternSetReferenceStatement;
            this._sizeConstraintStatement.internalValue = value.sizeConstraintStatement;
            this._sqliMatchStatement.internalValue = value.sqliMatchStatement;
            this._xssMatchStatement.internalValue = value.xssMatchStatement;
        }
    }
    // and_statement - computed: false, optional: true, required: false
    _andStatement = new Wafv2RuleGroupRuleStatementAndStatementOutputReference(this, "and_statement", true);
    get andStatement() {
        return this._andStatement;
    }
    putAndStatement(value) {
        this._andStatement.internalValue = value;
    }
    resetAndStatement() {
        this._andStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get andStatementInput() {
        return this._andStatement.internalValue;
    }
    // byte_match_statement - computed: false, optional: true, required: false
    _byteMatchStatement = new Wafv2RuleGroupRuleStatementByteMatchStatementOutputReference(this, "byte_match_statement", true);
    get byteMatchStatement() {
        return this._byteMatchStatement;
    }
    putByteMatchStatement(value) {
        this._byteMatchStatement.internalValue = value;
    }
    resetByteMatchStatement() {
        this._byteMatchStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get byteMatchStatementInput() {
        return this._byteMatchStatement.internalValue;
    }
    // geo_match_statement - computed: false, optional: true, required: false
    _geoMatchStatement = new Wafv2RuleGroupRuleStatementGeoMatchStatementOutputReference(this, "geo_match_statement", true);
    get geoMatchStatement() {
        return this._geoMatchStatement;
    }
    putGeoMatchStatement(value) {
        this._geoMatchStatement.internalValue = value;
    }
    resetGeoMatchStatement() {
        this._geoMatchStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get geoMatchStatementInput() {
        return this._geoMatchStatement.internalValue;
    }
    // ip_set_reference_statement - computed: false, optional: true, required: false
    _ipSetReferenceStatement = new Wafv2RuleGroupRuleStatementIpSetReferenceStatementOutputReference(this, "ip_set_reference_statement", true);
    get ipSetReferenceStatement() {
        return this._ipSetReferenceStatement;
    }
    putIpSetReferenceStatement(value) {
        this._ipSetReferenceStatement.internalValue = value;
    }
    resetIpSetReferenceStatement() {
        this._ipSetReferenceStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipSetReferenceStatementInput() {
        return this._ipSetReferenceStatement.internalValue;
    }
    // label_match_statement - computed: false, optional: true, required: false
    _labelMatchStatement = new Wafv2RuleGroupRuleStatementLabelMatchStatementOutputReference(this, "label_match_statement", true);
    get labelMatchStatement() {
        return this._labelMatchStatement;
    }
    putLabelMatchStatement(value) {
        this._labelMatchStatement.internalValue = value;
    }
    resetLabelMatchStatement() {
        this._labelMatchStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get labelMatchStatementInput() {
        return this._labelMatchStatement.internalValue;
    }
    // not_statement - computed: false, optional: true, required: false
    _notStatement = new Wafv2RuleGroupRuleStatementNotStatementOutputReference(this, "not_statement", true);
    get notStatement() {
        return this._notStatement;
    }
    putNotStatement(value) {
        this._notStatement.internalValue = value;
    }
    resetNotStatement() {
        this._notStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notStatementInput() {
        return this._notStatement.internalValue;
    }
    // or_statement - computed: false, optional: true, required: false
    _orStatement = new Wafv2RuleGroupRuleStatementOrStatementOutputReference(this, "or_statement", true);
    get orStatement() {
        return this._orStatement;
    }
    putOrStatement(value) {
        this._orStatement.internalValue = value;
    }
    resetOrStatement() {
        this._orStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orStatementInput() {
        return this._orStatement.internalValue;
    }
    // regex_pattern_set_reference_statement - computed: false, optional: true, required: false
    _regexPatternSetReferenceStatement = new Wafv2RuleGroupRuleStatementRegexPatternSetReferenceStatementOutputReference(this, "regex_pattern_set_reference_statement", true);
    get regexPatternSetReferenceStatement() {
        return this._regexPatternSetReferenceStatement;
    }
    putRegexPatternSetReferenceStatement(value) {
        this._regexPatternSetReferenceStatement.internalValue = value;
    }
    resetRegexPatternSetReferenceStatement() {
        this._regexPatternSetReferenceStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regexPatternSetReferenceStatementInput() {
        return this._regexPatternSetReferenceStatement.internalValue;
    }
    // size_constraint_statement - computed: false, optional: true, required: false
    _sizeConstraintStatement = new Wafv2RuleGroupRuleStatementSizeConstraintStatementOutputReference(this, "size_constraint_statement", true);
    get sizeConstraintStatement() {
        return this._sizeConstraintStatement;
    }
    putSizeConstraintStatement(value) {
        this._sizeConstraintStatement.internalValue = value;
    }
    resetSizeConstraintStatement() {
        this._sizeConstraintStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sizeConstraintStatementInput() {
        return this._sizeConstraintStatement.internalValue;
    }
    // sqli_match_statement - computed: false, optional: true, required: false
    _sqliMatchStatement = new Wafv2RuleGroupRuleStatementSqliMatchStatementOutputReference(this, "sqli_match_statement", true);
    get sqliMatchStatement() {
        return this._sqliMatchStatement;
    }
    putSqliMatchStatement(value) {
        this._sqliMatchStatement.internalValue = value;
    }
    resetSqliMatchStatement() {
        this._sqliMatchStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sqliMatchStatementInput() {
        return this._sqliMatchStatement.internalValue;
    }
    // xss_match_statement - computed: false, optional: true, required: false
    _xssMatchStatement = new Wafv2RuleGroupRuleStatementXssMatchStatementOutputReference(this, "xss_match_statement", true);
    get xssMatchStatement() {
        return this._xssMatchStatement;
    }
    putXssMatchStatement(value) {
        this._xssMatchStatement.internalValue = value;
    }
    resetXssMatchStatement() {
        this._xssMatchStatement.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get xssMatchStatementInput() {
        return this._xssMatchStatement.internalValue;
    }
}
export function wafv2RuleGroupRuleVisibilityConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct.cloudwatchMetricsEnabled),
        metric_name: cdktf.stringToTerraform(struct.metricName),
        sampled_requests_enabled: cdktf.booleanToTerraform(struct.sampledRequestsEnabled),
    };
}
export class Wafv2RuleGroupRuleVisibilityConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudwatchMetricsEnabled) {
            hasAnyValues = true;
            internalValueResult.cloudwatchMetricsEnabled = this._cloudwatchMetricsEnabled;
        }
        if (this._metricName) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._sampledRequestsEnabled) {
            hasAnyValues = true;
            internalValueResult.sampledRequestsEnabled = this._sampledRequestsEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cloudwatchMetricsEnabled = undefined;
            this._metricName = undefined;
            this._sampledRequestsEnabled = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cloudwatchMetricsEnabled = value.cloudwatchMetricsEnabled;
            this._metricName = value.metricName;
            this._sampledRequestsEnabled = value.sampledRequestsEnabled;
        }
    }
    // cloudwatch_metrics_enabled - computed: false, optional: false, required: true
    _cloudwatchMetricsEnabled;
    get cloudwatchMetricsEnabled() {
        return this.getBooleanAttribute('cloudwatch_metrics_enabled');
    }
    set cloudwatchMetricsEnabled(value) {
        this._cloudwatchMetricsEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchMetricsEnabledInput() {
        return this._cloudwatchMetricsEnabled;
    }
    // metric_name - computed: false, optional: false, required: true
    _metricName;
    get metricName() {
        return this.getStringAttribute('metric_name');
    }
    set metricName(value) {
        this._metricName = value;
    }
    // Temporarily expose input value. Use with caution.
    get metricNameInput() {
        return this._metricName;
    }
    // sampled_requests_enabled - computed: false, optional: false, required: true
    _sampledRequestsEnabled;
    get sampledRequestsEnabled() {
        return this.getBooleanAttribute('sampled_requests_enabled');
    }
    set sampledRequestsEnabled(value) {
        this._sampledRequestsEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get sampledRequestsEnabledInput() {
        return this._sampledRequestsEnabled;
    }
}
export function wafv2RuleGroupRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        priority: cdktf.numberToTerraform(struct.priority),
        action: wafv2RuleGroupRuleActionToTerraform(struct.action),
        rule_label: cdktf.listMapper(wafv2RuleGroupRuleRuleLabelToTerraform)(struct.ruleLabel),
        statement: wafv2RuleGroupRuleStatementToTerraform(struct.statement),
        visibility_config: wafv2RuleGroupRuleVisibilityConfigToTerraform(struct.visibilityConfig),
    };
}
export function wafv2RuleGroupVisibilityConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cloudwatch_metrics_enabled: cdktf.booleanToTerraform(struct.cloudwatchMetricsEnabled),
        metric_name: cdktf.stringToTerraform(struct.metricName),
        sampled_requests_enabled: cdktf.booleanToTerraform(struct.sampledRequestsEnabled),
    };
}
export class Wafv2RuleGroupVisibilityConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._cloudwatchMetricsEnabled) {
            hasAnyValues = true;
            internalValueResult.cloudwatchMetricsEnabled = this._cloudwatchMetricsEnabled;
        }
        if (this._metricName) {
            hasAnyValues = true;
            internalValueResult.metricName = this._metricName;
        }
        if (this._sampledRequestsEnabled) {
            hasAnyValues = true;
            internalValueResult.sampledRequestsEnabled = this._sampledRequestsEnabled;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._cloudwatchMetricsEnabled = undefined;
            this._metricName = undefined;
            this._sampledRequestsEnabled = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._cloudwatchMetricsEnabled = value.cloudwatchMetricsEnabled;
            this._metricName = value.metricName;
            this._sampledRequestsEnabled = value.sampledRequestsEnabled;
        }
    }
    // cloudwatch_metrics_enabled - computed: false, optional: false, required: true
    _cloudwatchMetricsEnabled;
    get cloudwatchMetricsEnabled() {
        return this.getBooleanAttribute('cloudwatch_metrics_enabled');
    }
    set cloudwatchMetricsEnabled(value) {
        this._cloudwatchMetricsEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchMetricsEnabledInput() {
        return this._cloudwatchMetricsEnabled;
    }
    // metric_name - computed: false, optional: false, required: true
    _metricName;
    get metricName() {
        return this.getStringAttribute('metric_name');
    }
    set metricName(value) {
        this._metricName = value;
    }
    // Temporarily expose input value. Use with caution.
    get metricNameInput() {
        return this._metricName;
    }
    // sampled_requests_enabled - computed: false, optional: false, required: true
    _sampledRequestsEnabled;
    get sampledRequestsEnabled() {
        return this.getBooleanAttribute('sampled_requests_enabled');
    }
    set sampledRequestsEnabled(value) {
        this._sampledRequestsEnabled = value;
    }
    // Temporarily expose input value. Use with caution.
    get sampledRequestsEnabledInput() {
        return this._sampledRequestsEnabled;
    }
}