// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function securityhubInsightFiltersAwsAccountIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersCompanyNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersComplianceStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersConfidenceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
export function securityhubInsightFiltersCreatedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export class SecurityhubInsightFiltersCreatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    // unit - computed: false, optional: false, required: true
    _unit;
    get unit() {
        return this.getStringAttribute('unit');
    }
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function securityhubInsightFiltersCreatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersCreatedAtDateRangeToTerraform(struct.dateRange),
    };
}
export function securityhubInsightFiltersCriticalityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
export function securityhubInsightFiltersDescriptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
export function securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
export function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersFindingProviderFieldsTypesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersFirstObservedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export class SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    // unit - computed: false, optional: false, required: true
    _unit;
    get unit() {
        return this.getStringAttribute('unit');
    }
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function securityhubInsightFiltersFirstObservedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersFirstObservedAtDateRangeToTerraform(struct.dateRange),
    };
}
export function securityhubInsightFiltersGeneratorIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersKeywordToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersLastObservedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export class SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    // unit - computed: false, optional: false, required: true
    _unit;
    get unit() {
        return this.getStringAttribute('unit');
    }
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function securityhubInsightFiltersLastObservedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersLastObservedAtDateRangeToTerraform(struct.dateRange),
    };
}
export function securityhubInsightFiltersMalwareNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersMalwarePathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersMalwareStateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersMalwareTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersNetworkDestinationDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersNetworkDestinationIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
    };
}
export function securityhubInsightFiltersNetworkDestinationIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
    };
}
export function securityhubInsightFiltersNetworkDestinationPortToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
export function securityhubInsightFiltersNetworkDirectionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersNetworkProtocolToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersNetworkSourceDomainToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersNetworkSourceIpv4ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
    };
}
export function securityhubInsightFiltersNetworkSourceIpv6ToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
    };
}
export function securityhubInsightFiltersNetworkSourceMacToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersNetworkSourcePortToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
export function securityhubInsightFiltersNoteTextToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export class SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    // unit - computed: false, optional: false, required: true
    _unit;
    get unit() {
        return this.getStringAttribute('unit');
    }
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function securityhubInsightFiltersNoteUpdatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform(struct.dateRange),
    };
}
export function securityhubInsightFiltersNoteUpdatedByToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export class SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    // unit - computed: false, optional: false, required: true
    _unit;
    get unit() {
        return this.getStringAttribute('unit');
    }
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function securityhubInsightFiltersProcessLaunchedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform(struct.dateRange),
    };
}
export function securityhubInsightFiltersProcessNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersProcessParentPidToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
export function securityhubInsightFiltersProcessPathToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersProcessPidToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        eq: cdktf.stringToTerraform(struct.eq),
        gte: cdktf.stringToTerraform(struct.gte),
        lte: cdktf.stringToTerraform(struct.lte),
    };
}
export function securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export class SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    // unit - computed: false, optional: false, required: true
    _unit;
    get unit() {
        return this.getStringAttribute('unit');
    }
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function securityhubInsightFiltersProcessTerminatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform(struct.dateRange),
    };
}
export function securityhubInsightFiltersProductArnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersProductFieldsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersProductNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersRecommendationTextToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersRecordStateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersRelatedFindingsIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersRelatedFindingsProductArnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
    };
}
export function securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cidr: cdktf.stringToTerraform(struct.cidr),
    };
}
export function securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export class SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    // unit - computed: false, optional: false, required: true
    _unit;
    get unit() {
        return this.getStringAttribute('unit');
    }
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform(struct.dateRange),
    };
}
export function securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export class SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    // unit - computed: false, optional: false, required: true
    _unit;
    get unit() {
        return this.getStringAttribute('unit');
    }
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform(struct.dateRange),
    };
}
export function securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceContainerImageIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceContainerImageNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export class SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    // unit - computed: false, optional: false, required: true
    _unit;
    get unit() {
        return this.getStringAttribute('unit');
    }
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function securityhubInsightFiltersResourceContainerLaunchedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform(struct.dateRange),
    };
}
export function securityhubInsightFiltersResourceContainerNameToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceDetailsOtherToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceIdToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourcePartitionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceRegionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceTagsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersResourceTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersSeverityLabelToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersSourceUrlToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export class SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    // unit - computed: false, optional: false, required: true
    _unit;
    get unit() {
        return this.getStringAttribute('unit');
    }
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform(struct.dateRange),
    };
}
export function securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersThreatIntelIndicatorValueToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersTitleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersTypeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersUpdatedAtDateRangeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        unit: cdktf.stringToTerraform(struct.unit),
        value: cdktf.numberToTerraform(struct.value),
    };
}
export class SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._unit) {
            hasAnyValues = true;
            internalValueResult.unit = this._unit;
        }
        if (this._value) {
            hasAnyValues = true;
            internalValueResult.value = this._value;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._unit = undefined;
            this._value = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._unit = value.unit;
            this._value = value.value;
        }
    }
    // unit - computed: false, optional: false, required: true
    _unit;
    get unit() {
        return this.getStringAttribute('unit');
    }
    set unit(value) {
        this._unit = value;
    }
    // Temporarily expose input value. Use with caution.
    get unitInput() {
        return this._unit;
    }
    // value - computed: false, optional: false, required: true
    _value;
    get value() {
        return this.getNumberAttribute('value');
    }
    set value(value) {
        this._value = value;
    }
    // Temporarily expose input value. Use with caution.
    get valueInput() {
        return this._value;
    }
}
export function securityhubInsightFiltersUpdatedAtToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        end: cdktf.stringToTerraform(struct.end),
        start: cdktf.stringToTerraform(struct.start),
        date_range: securityhubInsightFiltersUpdatedAtDateRangeToTerraform(struct.dateRange),
    };
}
export function securityhubInsightFiltersUserDefinedValuesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        key: cdktf.stringToTerraform(struct.key),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersVerificationStateToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersWorkflowStatusToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        comparison: cdktf.stringToTerraform(struct.comparison),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function securityhubInsightFiltersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        aws_account_id: cdktf.listMapper(securityhubInsightFiltersAwsAccountIdToTerraform)(struct.awsAccountId),
        company_name: cdktf.listMapper(securityhubInsightFiltersCompanyNameToTerraform)(struct.companyName),
        compliance_status: cdktf.listMapper(securityhubInsightFiltersComplianceStatusToTerraform)(struct.complianceStatus),
        confidence: cdktf.listMapper(securityhubInsightFiltersConfidenceToTerraform)(struct.confidence),
        created_at: cdktf.listMapper(securityhubInsightFiltersCreatedAtToTerraform)(struct.createdAt),
        criticality: cdktf.listMapper(securityhubInsightFiltersCriticalityToTerraform)(struct.criticality),
        description: cdktf.listMapper(securityhubInsightFiltersDescriptionToTerraform)(struct.description),
        finding_provider_fields_confidence: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform)(struct.findingProviderFieldsConfidence),
        finding_provider_fields_criticality: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform)(struct.findingProviderFieldsCriticality),
        finding_provider_fields_related_findings_id: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform)(struct.findingProviderFieldsRelatedFindingsId),
        finding_provider_fields_related_findings_product_arn: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform)(struct.findingProviderFieldsRelatedFindingsProductArn),
        finding_provider_fields_severity_label: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform)(struct.findingProviderFieldsSeverityLabel),
        finding_provider_fields_severity_original: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform)(struct.findingProviderFieldsSeverityOriginal),
        finding_provider_fields_types: cdktf.listMapper(securityhubInsightFiltersFindingProviderFieldsTypesToTerraform)(struct.findingProviderFieldsTypes),
        first_observed_at: cdktf.listMapper(securityhubInsightFiltersFirstObservedAtToTerraform)(struct.firstObservedAt),
        generator_id: cdktf.listMapper(securityhubInsightFiltersGeneratorIdToTerraform)(struct.generatorId),
        id: cdktf.listMapper(securityhubInsightFiltersIdToTerraform)(struct.id),
        keyword: cdktf.listMapper(securityhubInsightFiltersKeywordToTerraform)(struct.keyword),
        last_observed_at: cdktf.listMapper(securityhubInsightFiltersLastObservedAtToTerraform)(struct.lastObservedAt),
        malware_name: cdktf.listMapper(securityhubInsightFiltersMalwareNameToTerraform)(struct.malwareName),
        malware_path: cdktf.listMapper(securityhubInsightFiltersMalwarePathToTerraform)(struct.malwarePath),
        malware_state: cdktf.listMapper(securityhubInsightFiltersMalwareStateToTerraform)(struct.malwareState),
        malware_type: cdktf.listMapper(securityhubInsightFiltersMalwareTypeToTerraform)(struct.malwareType),
        network_destination_domain: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationDomainToTerraform)(struct.networkDestinationDomain),
        network_destination_ipv4: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationIpv4ToTerraform)(struct.networkDestinationIpv4),
        network_destination_ipv6: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationIpv6ToTerraform)(struct.networkDestinationIpv6),
        network_destination_port: cdktf.listMapper(securityhubInsightFiltersNetworkDestinationPortToTerraform)(struct.networkDestinationPort),
        network_direction: cdktf.listMapper(securityhubInsightFiltersNetworkDirectionToTerraform)(struct.networkDirection),
        network_protocol: cdktf.listMapper(securityhubInsightFiltersNetworkProtocolToTerraform)(struct.networkProtocol),
        network_source_domain: cdktf.listMapper(securityhubInsightFiltersNetworkSourceDomainToTerraform)(struct.networkSourceDomain),
        network_source_ipv4: cdktf.listMapper(securityhubInsightFiltersNetworkSourceIpv4ToTerraform)(struct.networkSourceIpv4),
        network_source_ipv6: cdktf.listMapper(securityhubInsightFiltersNetworkSourceIpv6ToTerraform)(struct.networkSourceIpv6),
        network_source_mac: cdktf.listMapper(securityhubInsightFiltersNetworkSourceMacToTerraform)(struct.networkSourceMac),
        network_source_port: cdktf.listMapper(securityhubInsightFiltersNetworkSourcePortToTerraform)(struct.networkSourcePort),
        note_text: cdktf.listMapper(securityhubInsightFiltersNoteTextToTerraform)(struct.noteText),
        note_updated_at: cdktf.listMapper(securityhubInsightFiltersNoteUpdatedAtToTerraform)(struct.noteUpdatedAt),
        note_updated_by: cdktf.listMapper(securityhubInsightFiltersNoteUpdatedByToTerraform)(struct.noteUpdatedBy),
        process_launched_at: cdktf.listMapper(securityhubInsightFiltersProcessLaunchedAtToTerraform)(struct.processLaunchedAt),
        process_name: cdktf.listMapper(securityhubInsightFiltersProcessNameToTerraform)(struct.processName),
        process_parent_pid: cdktf.listMapper(securityhubInsightFiltersProcessParentPidToTerraform)(struct.processParentPid),
        process_path: cdktf.listMapper(securityhubInsightFiltersProcessPathToTerraform)(struct.processPath),
        process_pid: cdktf.listMapper(securityhubInsightFiltersProcessPidToTerraform)(struct.processPid),
        process_terminated_at: cdktf.listMapper(securityhubInsightFiltersProcessTerminatedAtToTerraform)(struct.processTerminatedAt),
        product_arn: cdktf.listMapper(securityhubInsightFiltersProductArnToTerraform)(struct.productArn),
        product_fields: cdktf.listMapper(securityhubInsightFiltersProductFieldsToTerraform)(struct.productFields),
        product_name: cdktf.listMapper(securityhubInsightFiltersProductNameToTerraform)(struct.productName),
        recommendation_text: cdktf.listMapper(securityhubInsightFiltersRecommendationTextToTerraform)(struct.recommendationText),
        record_state: cdktf.listMapper(securityhubInsightFiltersRecordStateToTerraform)(struct.recordState),
        related_findings_id: cdktf.listMapper(securityhubInsightFiltersRelatedFindingsIdToTerraform)(struct.relatedFindingsId),
        related_findings_product_arn: cdktf.listMapper(securityhubInsightFiltersRelatedFindingsProductArnToTerraform)(struct.relatedFindingsProductArn),
        resource_aws_ec2_instance_iam_instance_profile_arn: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform)(struct.resourceAwsEc2InstanceIamInstanceProfileArn),
        resource_aws_ec2_instance_image_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform)(struct.resourceAwsEc2InstanceImageId),
        resource_aws_ec2_instance_ipv4_addresses: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform)(struct.resourceAwsEc2InstanceIpv4Addresses),
        resource_aws_ec2_instance_ipv6_addresses: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform)(struct.resourceAwsEc2InstanceIpv6Addresses),
        resource_aws_ec2_instance_key_name: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform)(struct.resourceAwsEc2InstanceKeyName),
        resource_aws_ec2_instance_launched_at: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform)(struct.resourceAwsEc2InstanceLaunchedAt),
        resource_aws_ec2_instance_subnet_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform)(struct.resourceAwsEc2InstanceSubnetId),
        resource_aws_ec2_instance_type: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform)(struct.resourceAwsEc2InstanceType),
        resource_aws_ec2_instance_vpc_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform)(struct.resourceAwsEc2InstanceVpcId),
        resource_aws_iam_access_key_created_at: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform)(struct.resourceAwsIamAccessKeyCreatedAt),
        resource_aws_iam_access_key_status: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform)(struct.resourceAwsIamAccessKeyStatus),
        resource_aws_iam_access_key_user_name: cdktf.listMapper(securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform)(struct.resourceAwsIamAccessKeyUserName),
        resource_aws_s3_bucket_owner_id: cdktf.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform)(struct.resourceAwsS3BucketOwnerId),
        resource_aws_s3_bucket_owner_name: cdktf.listMapper(securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform)(struct.resourceAwsS3BucketOwnerName),
        resource_container_image_id: cdktf.listMapper(securityhubInsightFiltersResourceContainerImageIdToTerraform)(struct.resourceContainerImageId),
        resource_container_image_name: cdktf.listMapper(securityhubInsightFiltersResourceContainerImageNameToTerraform)(struct.resourceContainerImageName),
        resource_container_launched_at: cdktf.listMapper(securityhubInsightFiltersResourceContainerLaunchedAtToTerraform)(struct.resourceContainerLaunchedAt),
        resource_container_name: cdktf.listMapper(securityhubInsightFiltersResourceContainerNameToTerraform)(struct.resourceContainerName),
        resource_details_other: cdktf.listMapper(securityhubInsightFiltersResourceDetailsOtherToTerraform)(struct.resourceDetailsOther),
        resource_id: cdktf.listMapper(securityhubInsightFiltersResourceIdToTerraform)(struct.resourceId),
        resource_partition: cdktf.listMapper(securityhubInsightFiltersResourcePartitionToTerraform)(struct.resourcePartition),
        resource_region: cdktf.listMapper(securityhubInsightFiltersResourceRegionToTerraform)(struct.resourceRegion),
        resource_tags: cdktf.listMapper(securityhubInsightFiltersResourceTagsToTerraform)(struct.resourceTags),
        resource_type: cdktf.listMapper(securityhubInsightFiltersResourceTypeToTerraform)(struct.resourceType),
        severity_label: cdktf.listMapper(securityhubInsightFiltersSeverityLabelToTerraform)(struct.severityLabel),
        source_url: cdktf.listMapper(securityhubInsightFiltersSourceUrlToTerraform)(struct.sourceUrl),
        threat_intel_indicator_category: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform)(struct.threatIntelIndicatorCategory),
        threat_intel_indicator_last_observed_at: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform)(struct.threatIntelIndicatorLastObservedAt),
        threat_intel_indicator_source: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform)(struct.threatIntelIndicatorSource),
        threat_intel_indicator_source_url: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform)(struct.threatIntelIndicatorSourceUrl),
        threat_intel_indicator_type: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform)(struct.threatIntelIndicatorType),
        threat_intel_indicator_value: cdktf.listMapper(securityhubInsightFiltersThreatIntelIndicatorValueToTerraform)(struct.threatIntelIndicatorValue),
        title: cdktf.listMapper(securityhubInsightFiltersTitleToTerraform)(struct.title),
        type: cdktf.listMapper(securityhubInsightFiltersTypeToTerraform)(struct.type),
        updated_at: cdktf.listMapper(securityhubInsightFiltersUpdatedAtToTerraform)(struct.updatedAt),
        user_defined_values: cdktf.listMapper(securityhubInsightFiltersUserDefinedValuesToTerraform)(struct.userDefinedValues),
        verification_state: cdktf.listMapper(securityhubInsightFiltersVerificationStateToTerraform)(struct.verificationState),
        workflow_status: cdktf.listMapper(securityhubInsightFiltersWorkflowStatusToTerraform)(struct.workflowStatus),
    };
}
export class SecurityhubInsightFiltersOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._awsAccountId) {
            hasAnyValues = true;
            internalValueResult.awsAccountId = this._awsAccountId;
        }
        if (this._companyName) {
            hasAnyValues = true;
            internalValueResult.companyName = this._companyName;
        }
        if (this._complianceStatus) {
            hasAnyValues = true;
            internalValueResult.complianceStatus = this._complianceStatus;
        }
        if (this._confidence) {
            hasAnyValues = true;
            internalValueResult.confidence = this._confidence;
        }
        if (this._createdAt) {
            hasAnyValues = true;
            internalValueResult.createdAt = this._createdAt;
        }
        if (this._criticality) {
            hasAnyValues = true;
            internalValueResult.criticality = this._criticality;
        }
        if (this._description) {
            hasAnyValues = true;
            internalValueResult.description = this._description;
        }
        if (this._findingProviderFieldsConfidence) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsConfidence = this._findingProviderFieldsConfidence;
        }
        if (this._findingProviderFieldsCriticality) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsCriticality = this._findingProviderFieldsCriticality;
        }
        if (this._findingProviderFieldsRelatedFindingsId) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsRelatedFindingsId = this._findingProviderFieldsRelatedFindingsId;
        }
        if (this._findingProviderFieldsRelatedFindingsProductArn) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsRelatedFindingsProductArn = this._findingProviderFieldsRelatedFindingsProductArn;
        }
        if (this._findingProviderFieldsSeverityLabel) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsSeverityLabel = this._findingProviderFieldsSeverityLabel;
        }
        if (this._findingProviderFieldsSeverityOriginal) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsSeverityOriginal = this._findingProviderFieldsSeverityOriginal;
        }
        if (this._findingProviderFieldsTypes) {
            hasAnyValues = true;
            internalValueResult.findingProviderFieldsTypes = this._findingProviderFieldsTypes;
        }
        if (this._firstObservedAt) {
            hasAnyValues = true;
            internalValueResult.firstObservedAt = this._firstObservedAt;
        }
        if (this._generatorId) {
            hasAnyValues = true;
            internalValueResult.generatorId = this._generatorId;
        }
        if (this._id) {
            hasAnyValues = true;
            internalValueResult.id = this._id;
        }
        if (this._keyword) {
            hasAnyValues = true;
            internalValueResult.keyword = this._keyword;
        }
        if (this._lastObservedAt) {
            hasAnyValues = true;
            internalValueResult.lastObservedAt = this._lastObservedAt;
        }
        if (this._malwareName) {
            hasAnyValues = true;
            internalValueResult.malwareName = this._malwareName;
        }
        if (this._malwarePath) {
            hasAnyValues = true;
            internalValueResult.malwarePath = this._malwarePath;
        }
        if (this._malwareState) {
            hasAnyValues = true;
            internalValueResult.malwareState = this._malwareState;
        }
        if (this._malwareType) {
            hasAnyValues = true;
            internalValueResult.malwareType = this._malwareType;
        }
        if (this._networkDestinationDomain) {
            hasAnyValues = true;
            internalValueResult.networkDestinationDomain = this._networkDestinationDomain;
        }
        if (this._networkDestinationIpv4) {
            hasAnyValues = true;
            internalValueResult.networkDestinationIpv4 = this._networkDestinationIpv4;
        }
        if (this._networkDestinationIpv6) {
            hasAnyValues = true;
            internalValueResult.networkDestinationIpv6 = this._networkDestinationIpv6;
        }
        if (this._networkDestinationPort) {
            hasAnyValues = true;
            internalValueResult.networkDestinationPort = this._networkDestinationPort;
        }
        if (this._networkDirection) {
            hasAnyValues = true;
            internalValueResult.networkDirection = this._networkDirection;
        }
        if (this._networkProtocol) {
            hasAnyValues = true;
            internalValueResult.networkProtocol = this._networkProtocol;
        }
        if (this._networkSourceDomain) {
            hasAnyValues = true;
            internalValueResult.networkSourceDomain = this._networkSourceDomain;
        }
        if (this._networkSourceIpv4) {
            hasAnyValues = true;
            internalValueResult.networkSourceIpv4 = this._networkSourceIpv4;
        }
        if (this._networkSourceIpv6) {
            hasAnyValues = true;
            internalValueResult.networkSourceIpv6 = this._networkSourceIpv6;
        }
        if (this._networkSourceMac) {
            hasAnyValues = true;
            internalValueResult.networkSourceMac = this._networkSourceMac;
        }
        if (this._networkSourcePort) {
            hasAnyValues = true;
            internalValueResult.networkSourcePort = this._networkSourcePort;
        }
        if (this._noteText) {
            hasAnyValues = true;
            internalValueResult.noteText = this._noteText;
        }
        if (this._noteUpdatedAt) {
            hasAnyValues = true;
            internalValueResult.noteUpdatedAt = this._noteUpdatedAt;
        }
        if (this._noteUpdatedBy) {
            hasAnyValues = true;
            internalValueResult.noteUpdatedBy = this._noteUpdatedBy;
        }
        if (this._processLaunchedAt) {
            hasAnyValues = true;
            internalValueResult.processLaunchedAt = this._processLaunchedAt;
        }
        if (this._processName) {
            hasAnyValues = true;
            internalValueResult.processName = this._processName;
        }
        if (this._processParentPid) {
            hasAnyValues = true;
            internalValueResult.processParentPid = this._processParentPid;
        }
        if (this._processPath) {
            hasAnyValues = true;
            internalValueResult.processPath = this._processPath;
        }
        if (this._processPid) {
            hasAnyValues = true;
            internalValueResult.processPid = this._processPid;
        }
        if (this._processTerminatedAt) {
            hasAnyValues = true;
            internalValueResult.processTerminatedAt = this._processTerminatedAt;
        }
        if (this._productArn) {
            hasAnyValues = true;
            internalValueResult.productArn = this._productArn;
        }
        if (this._productFields) {
            hasAnyValues = true;
            internalValueResult.productFields = this._productFields;
        }
        if (this._productName) {
            hasAnyValues = true;
            internalValueResult.productName = this._productName;
        }
        if (this._recommendationText) {
            hasAnyValues = true;
            internalValueResult.recommendationText = this._recommendationText;
        }
        if (this._recordState) {
            hasAnyValues = true;
            internalValueResult.recordState = this._recordState;
        }
        if (this._relatedFindingsId) {
            hasAnyValues = true;
            internalValueResult.relatedFindingsId = this._relatedFindingsId;
        }
        if (this._relatedFindingsProductArn) {
            hasAnyValues = true;
            internalValueResult.relatedFindingsProductArn = this._relatedFindingsProductArn;
        }
        if (this._resourceAwsEc2InstanceIamInstanceProfileArn) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceIamInstanceProfileArn = this._resourceAwsEc2InstanceIamInstanceProfileArn;
        }
        if (this._resourceAwsEc2InstanceImageId) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceImageId = this._resourceAwsEc2InstanceImageId;
        }
        if (this._resourceAwsEc2InstanceIpv4Addresses) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceIpv4Addresses = this._resourceAwsEc2InstanceIpv4Addresses;
        }
        if (this._resourceAwsEc2InstanceIpv6Addresses) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceIpv6Addresses = this._resourceAwsEc2InstanceIpv6Addresses;
        }
        if (this._resourceAwsEc2InstanceKeyName) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceKeyName = this._resourceAwsEc2InstanceKeyName;
        }
        if (this._resourceAwsEc2InstanceLaunchedAt) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceLaunchedAt = this._resourceAwsEc2InstanceLaunchedAt;
        }
        if (this._resourceAwsEc2InstanceSubnetId) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceSubnetId = this._resourceAwsEc2InstanceSubnetId;
        }
        if (this._resourceAwsEc2InstanceType) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceType = this._resourceAwsEc2InstanceType;
        }
        if (this._resourceAwsEc2InstanceVpcId) {
            hasAnyValues = true;
            internalValueResult.resourceAwsEc2InstanceVpcId = this._resourceAwsEc2InstanceVpcId;
        }
        if (this._resourceAwsIamAccessKeyCreatedAt) {
            hasAnyValues = true;
            internalValueResult.resourceAwsIamAccessKeyCreatedAt = this._resourceAwsIamAccessKeyCreatedAt;
        }
        if (this._resourceAwsIamAccessKeyStatus) {
            hasAnyValues = true;
            internalValueResult.resourceAwsIamAccessKeyStatus = this._resourceAwsIamAccessKeyStatus;
        }
        if (this._resourceAwsIamAccessKeyUserName) {
            hasAnyValues = true;
            internalValueResult.resourceAwsIamAccessKeyUserName = this._resourceAwsIamAccessKeyUserName;
        }
        if (this._resourceAwsS3BucketOwnerId) {
            hasAnyValues = true;
            internalValueResult.resourceAwsS3BucketOwnerId = this._resourceAwsS3BucketOwnerId;
        }
        if (this._resourceAwsS3BucketOwnerName) {
            hasAnyValues = true;
            internalValueResult.resourceAwsS3BucketOwnerName = this._resourceAwsS3BucketOwnerName;
        }
        if (this._resourceContainerImageId) {
            hasAnyValues = true;
            internalValueResult.resourceContainerImageId = this._resourceContainerImageId;
        }
        if (this._resourceContainerImageName) {
            hasAnyValues = true;
            internalValueResult.resourceContainerImageName = this._resourceContainerImageName;
        }
        if (this._resourceContainerLaunchedAt) {
            hasAnyValues = true;
            internalValueResult.resourceContainerLaunchedAt = this._resourceContainerLaunchedAt;
        }
        if (this._resourceContainerName) {
            hasAnyValues = true;
            internalValueResult.resourceContainerName = this._resourceContainerName;
        }
        if (this._resourceDetailsOther) {
            hasAnyValues = true;
            internalValueResult.resourceDetailsOther = this._resourceDetailsOther;
        }
        if (this._resourceId) {
            hasAnyValues = true;
            internalValueResult.resourceId = this._resourceId;
        }
        if (this._resourcePartition) {
            hasAnyValues = true;
            internalValueResult.resourcePartition = this._resourcePartition;
        }
        if (this._resourceRegion) {
            hasAnyValues = true;
            internalValueResult.resourceRegion = this._resourceRegion;
        }
        if (this._resourceTags) {
            hasAnyValues = true;
            internalValueResult.resourceTags = this._resourceTags;
        }
        if (this._resourceType) {
            hasAnyValues = true;
            internalValueResult.resourceType = this._resourceType;
        }
        if (this._severityLabel) {
            hasAnyValues = true;
            internalValueResult.severityLabel = this._severityLabel;
        }
        if (this._sourceUrl) {
            hasAnyValues = true;
            internalValueResult.sourceUrl = this._sourceUrl;
        }
        if (this._threatIntelIndicatorCategory) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorCategory = this._threatIntelIndicatorCategory;
        }
        if (this._threatIntelIndicatorLastObservedAt) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorLastObservedAt = this._threatIntelIndicatorLastObservedAt;
        }
        if (this._threatIntelIndicatorSource) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorSource = this._threatIntelIndicatorSource;
        }
        if (this._threatIntelIndicatorSourceUrl) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorSourceUrl = this._threatIntelIndicatorSourceUrl;
        }
        if (this._threatIntelIndicatorType) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorType = this._threatIntelIndicatorType;
        }
        if (this._threatIntelIndicatorValue) {
            hasAnyValues = true;
            internalValueResult.threatIntelIndicatorValue = this._threatIntelIndicatorValue;
        }
        if (this._title) {
            hasAnyValues = true;
            internalValueResult.title = this._title;
        }
        if (this._type) {
            hasAnyValues = true;
            internalValueResult.type = this._type;
        }
        if (this._updatedAt) {
            hasAnyValues = true;
            internalValueResult.updatedAt = this._updatedAt;
        }
        if (this._userDefinedValues) {
            hasAnyValues = true;
            internalValueResult.userDefinedValues = this._userDefinedValues;
        }
        if (this._verificationState) {
            hasAnyValues = true;
            internalValueResult.verificationState = this._verificationState;
        }
        if (this._workflowStatus) {
            hasAnyValues = true;
            internalValueResult.workflowStatus = this._workflowStatus;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._awsAccountId = undefined;
            this._companyName = undefined;
            this._complianceStatus = undefined;
            this._confidence = undefined;
            this._createdAt = undefined;
            this._criticality = undefined;
            this._description = undefined;
            this._findingProviderFieldsConfidence = undefined;
            this._findingProviderFieldsCriticality = undefined;
            this._findingProviderFieldsRelatedFindingsId = undefined;
            this._findingProviderFieldsRelatedFindingsProductArn = undefined;
            this._findingProviderFieldsSeverityLabel = undefined;
            this._findingProviderFieldsSeverityOriginal = undefined;
            this._findingProviderFieldsTypes = undefined;
            this._firstObservedAt = undefined;
            this._generatorId = undefined;
            this._id = undefined;
            this._keyword = undefined;
            this._lastObservedAt = undefined;
            this._malwareName = undefined;
            this._malwarePath = undefined;
            this._malwareState = undefined;
            this._malwareType = undefined;
            this._networkDestinationDomain = undefined;
            this._networkDestinationIpv4 = undefined;
            this._networkDestinationIpv6 = undefined;
            this._networkDestinationPort = undefined;
            this._networkDirection = undefined;
            this._networkProtocol = undefined;
            this._networkSourceDomain = undefined;
            this._networkSourceIpv4 = undefined;
            this._networkSourceIpv6 = undefined;
            this._networkSourceMac = undefined;
            this._networkSourcePort = undefined;
            this._noteText = undefined;
            this._noteUpdatedAt = undefined;
            this._noteUpdatedBy = undefined;
            this._processLaunchedAt = undefined;
            this._processName = undefined;
            this._processParentPid = undefined;
            this._processPath = undefined;
            this._processPid = undefined;
            this._processTerminatedAt = undefined;
            this._productArn = undefined;
            this._productFields = undefined;
            this._productName = undefined;
            this._recommendationText = undefined;
            this._recordState = undefined;
            this._relatedFindingsId = undefined;
            this._relatedFindingsProductArn = undefined;
            this._resourceAwsEc2InstanceIamInstanceProfileArn = undefined;
            this._resourceAwsEc2InstanceImageId = undefined;
            this._resourceAwsEc2InstanceIpv4Addresses = undefined;
            this._resourceAwsEc2InstanceIpv6Addresses = undefined;
            this._resourceAwsEc2InstanceKeyName = undefined;
            this._resourceAwsEc2InstanceLaunchedAt = undefined;
            this._resourceAwsEc2InstanceSubnetId = undefined;
            this._resourceAwsEc2InstanceType = undefined;
            this._resourceAwsEc2InstanceVpcId = undefined;
            this._resourceAwsIamAccessKeyCreatedAt = undefined;
            this._resourceAwsIamAccessKeyStatus = undefined;
            this._resourceAwsIamAccessKeyUserName = undefined;
            this._resourceAwsS3BucketOwnerId = undefined;
            this._resourceAwsS3BucketOwnerName = undefined;
            this._resourceContainerImageId = undefined;
            this._resourceContainerImageName = undefined;
            this._resourceContainerLaunchedAt = undefined;
            this._resourceContainerName = undefined;
            this._resourceDetailsOther = undefined;
            this._resourceId = undefined;
            this._resourcePartition = undefined;
            this._resourceRegion = undefined;
            this._resourceTags = undefined;
            this._resourceType = undefined;
            this._severityLabel = undefined;
            this._sourceUrl = undefined;
            this._threatIntelIndicatorCategory = undefined;
            this._threatIntelIndicatorLastObservedAt = undefined;
            this._threatIntelIndicatorSource = undefined;
            this._threatIntelIndicatorSourceUrl = undefined;
            this._threatIntelIndicatorType = undefined;
            this._threatIntelIndicatorValue = undefined;
            this._title = undefined;
            this._type = undefined;
            this._updatedAt = undefined;
            this._userDefinedValues = undefined;
            this._verificationState = undefined;
            this._workflowStatus = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._awsAccountId = value.awsAccountId;
            this._companyName = value.companyName;
            this._complianceStatus = value.complianceStatus;
            this._confidence = value.confidence;
            this._createdAt = value.createdAt;
            this._criticality = value.criticality;
            this._description = value.description;
            this._findingProviderFieldsConfidence = value.findingProviderFieldsConfidence;
            this._findingProviderFieldsCriticality = value.findingProviderFieldsCriticality;
            this._findingProviderFieldsRelatedFindingsId = value.findingProviderFieldsRelatedFindingsId;
            this._findingProviderFieldsRelatedFindingsProductArn = value.findingProviderFieldsRelatedFindingsProductArn;
            this._findingProviderFieldsSeverityLabel = value.findingProviderFieldsSeverityLabel;
            this._findingProviderFieldsSeverityOriginal = value.findingProviderFieldsSeverityOriginal;
            this._findingProviderFieldsTypes = value.findingProviderFieldsTypes;
            this._firstObservedAt = value.firstObservedAt;
            this._generatorId = value.generatorId;
            this._id = value.id;
            this._keyword = value.keyword;
            this._lastObservedAt = value.lastObservedAt;
            this._malwareName = value.malwareName;
            this._malwarePath = value.malwarePath;
            this._malwareState = value.malwareState;
            this._malwareType = value.malwareType;
            this._networkDestinationDomain = value.networkDestinationDomain;
            this._networkDestinationIpv4 = value.networkDestinationIpv4;
            this._networkDestinationIpv6 = value.networkDestinationIpv6;
            this._networkDestinationPort = value.networkDestinationPort;
            this._networkDirection = value.networkDirection;
            this._networkProtocol = value.networkProtocol;
            this._networkSourceDomain = value.networkSourceDomain;
            this._networkSourceIpv4 = value.networkSourceIpv4;
            this._networkSourceIpv6 = value.networkSourceIpv6;
            this._networkSourceMac = value.networkSourceMac;
            this._networkSourcePort = value.networkSourcePort;
            this._noteText = value.noteText;
            this._noteUpdatedAt = value.noteUpdatedAt;
            this._noteUpdatedBy = value.noteUpdatedBy;
            this._processLaunchedAt = value.processLaunchedAt;
            this._processName = value.processName;
            this._processParentPid = value.processParentPid;
            this._processPath = value.processPath;
            this._processPid = value.processPid;
            this._processTerminatedAt = value.processTerminatedAt;
            this._productArn = value.productArn;
            this._productFields = value.productFields;
            this._productName = value.productName;
            this._recommendationText = value.recommendationText;
            this._recordState = value.recordState;
            this._relatedFindingsId = value.relatedFindingsId;
            this._relatedFindingsProductArn = value.relatedFindingsProductArn;
            this._resourceAwsEc2InstanceIamInstanceProfileArn = value.resourceAwsEc2InstanceIamInstanceProfileArn;
            this._resourceAwsEc2InstanceImageId = value.resourceAwsEc2InstanceImageId;
            this._resourceAwsEc2InstanceIpv4Addresses = value.resourceAwsEc2InstanceIpv4Addresses;
            this._resourceAwsEc2InstanceIpv6Addresses = value.resourceAwsEc2InstanceIpv6Addresses;
            this._resourceAwsEc2InstanceKeyName = value.resourceAwsEc2InstanceKeyName;
            this._resourceAwsEc2InstanceLaunchedAt = value.resourceAwsEc2InstanceLaunchedAt;
            this._resourceAwsEc2InstanceSubnetId = value.resourceAwsEc2InstanceSubnetId;
            this._resourceAwsEc2InstanceType = value.resourceAwsEc2InstanceType;
            this._resourceAwsEc2InstanceVpcId = value.resourceAwsEc2InstanceVpcId;
            this._resourceAwsIamAccessKeyCreatedAt = value.resourceAwsIamAccessKeyCreatedAt;
            this._resourceAwsIamAccessKeyStatus = value.resourceAwsIamAccessKeyStatus;
            this._resourceAwsIamAccessKeyUserName = value.resourceAwsIamAccessKeyUserName;
            this._resourceAwsS3BucketOwnerId = value.resourceAwsS3BucketOwnerId;
            this._resourceAwsS3BucketOwnerName = value.resourceAwsS3BucketOwnerName;
            this._resourceContainerImageId = value.resourceContainerImageId;
            this._resourceContainerImageName = value.resourceContainerImageName;
            this._resourceContainerLaunchedAt = value.resourceContainerLaunchedAt;
            this._resourceContainerName = value.resourceContainerName;
            this._resourceDetailsOther = value.resourceDetailsOther;
            this._resourceId = value.resourceId;
            this._resourcePartition = value.resourcePartition;
            this._resourceRegion = value.resourceRegion;
            this._resourceTags = value.resourceTags;
            this._resourceType = value.resourceType;
            this._severityLabel = value.severityLabel;
            this._sourceUrl = value.sourceUrl;
            this._threatIntelIndicatorCategory = value.threatIntelIndicatorCategory;
            this._threatIntelIndicatorLastObservedAt = value.threatIntelIndicatorLastObservedAt;
            this._threatIntelIndicatorSource = value.threatIntelIndicatorSource;
            this._threatIntelIndicatorSourceUrl = value.threatIntelIndicatorSourceUrl;
            this._threatIntelIndicatorType = value.threatIntelIndicatorType;
            this._threatIntelIndicatorValue = value.threatIntelIndicatorValue;
            this._title = value.title;
            this._type = value.type;
            this._updatedAt = value.updatedAt;
            this._userDefinedValues = value.userDefinedValues;
            this._verificationState = value.verificationState;
            this._workflowStatus = value.workflowStatus;
        }
    }
    // aws_account_id - computed: false, optional: true, required: false
    _awsAccountId;
    get awsAccountId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('aws_account_id');
    }
    set awsAccountId(value) {
        this._awsAccountId = value;
    }
    resetAwsAccountId() {
        this._awsAccountId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get awsAccountIdInput() {
        return this._awsAccountId;
    }
    // company_name - computed: false, optional: true, required: false
    _companyName;
    get companyName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('company_name');
    }
    set companyName(value) {
        this._companyName = value;
    }
    resetCompanyName() {
        this._companyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get companyNameInput() {
        return this._companyName;
    }
    // compliance_status - computed: false, optional: true, required: false
    _complianceStatus;
    get complianceStatus() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('compliance_status');
    }
    set complianceStatus(value) {
        this._complianceStatus = value;
    }
    resetComplianceStatus() {
        this._complianceStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get complianceStatusInput() {
        return this._complianceStatus;
    }
    // confidence - computed: false, optional: true, required: false
    _confidence;
    get confidence() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('confidence');
    }
    set confidence(value) {
        this._confidence = value;
    }
    resetConfidence() {
        this._confidence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get confidenceInput() {
        return this._confidence;
    }
    // created_at - computed: false, optional: true, required: false
    _createdAt;
    get createdAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('created_at');
    }
    set createdAt(value) {
        this._createdAt = value;
    }
    resetCreatedAt() {
        this._createdAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createdAtInput() {
        return this._createdAt;
    }
    // criticality - computed: false, optional: true, required: false
    _criticality;
    get criticality() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('criticality');
    }
    set criticality(value) {
        this._criticality = value;
    }
    resetCriticality() {
        this._criticality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get criticalityInput() {
        return this._criticality;
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // finding_provider_fields_confidence - computed: false, optional: true, required: false
    _findingProviderFieldsConfidence;
    get findingProviderFieldsConfidence() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('finding_provider_fields_confidence');
    }
    set findingProviderFieldsConfidence(value) {
        this._findingProviderFieldsConfidence = value;
    }
    resetFindingProviderFieldsConfidence() {
        this._findingProviderFieldsConfidence = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get findingProviderFieldsConfidenceInput() {
        return this._findingProviderFieldsConfidence;
    }
    // finding_provider_fields_criticality - computed: false, optional: true, required: false
    _findingProviderFieldsCriticality;
    get findingProviderFieldsCriticality() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('finding_provider_fields_criticality');
    }
    set findingProviderFieldsCriticality(value) {
        this._findingProviderFieldsCriticality = value;
    }
    resetFindingProviderFieldsCriticality() {
        this._findingProviderFieldsCriticality = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get findingProviderFieldsCriticalityInput() {
        return this._findingProviderFieldsCriticality;
    }
    // finding_provider_fields_related_findings_id - computed: false, optional: true, required: false
    _findingProviderFieldsRelatedFindingsId;
    get findingProviderFieldsRelatedFindingsId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('finding_provider_fields_related_findings_id');
    }
    set findingProviderFieldsRelatedFindingsId(value) {
        this._findingProviderFieldsRelatedFindingsId = value;
    }
    resetFindingProviderFieldsRelatedFindingsId() {
        this._findingProviderFieldsRelatedFindingsId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get findingProviderFieldsRelatedFindingsIdInput() {
        return this._findingProviderFieldsRelatedFindingsId;
    }
    // finding_provider_fields_related_findings_product_arn - computed: false, optional: true, required: false
    _findingProviderFieldsRelatedFindingsProductArn;
    get findingProviderFieldsRelatedFindingsProductArn() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('finding_provider_fields_related_findings_product_arn');
    }
    set findingProviderFieldsRelatedFindingsProductArn(value) {
        this._findingProviderFieldsRelatedFindingsProductArn = value;
    }
    resetFindingProviderFieldsRelatedFindingsProductArn() {
        this._findingProviderFieldsRelatedFindingsProductArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get findingProviderFieldsRelatedFindingsProductArnInput() {
        return this._findingProviderFieldsRelatedFindingsProductArn;
    }
    // finding_provider_fields_severity_label - computed: false, optional: true, required: false
    _findingProviderFieldsSeverityLabel;
    get findingProviderFieldsSeverityLabel() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('finding_provider_fields_severity_label');
    }
    set findingProviderFieldsSeverityLabel(value) {
        this._findingProviderFieldsSeverityLabel = value;
    }
    resetFindingProviderFieldsSeverityLabel() {
        this._findingProviderFieldsSeverityLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get findingProviderFieldsSeverityLabelInput() {
        return this._findingProviderFieldsSeverityLabel;
    }
    // finding_provider_fields_severity_original - computed: false, optional: true, required: false
    _findingProviderFieldsSeverityOriginal;
    get findingProviderFieldsSeverityOriginal() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('finding_provider_fields_severity_original');
    }
    set findingProviderFieldsSeverityOriginal(value) {
        this._findingProviderFieldsSeverityOriginal = value;
    }
    resetFindingProviderFieldsSeverityOriginal() {
        this._findingProviderFieldsSeverityOriginal = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get findingProviderFieldsSeverityOriginalInput() {
        return this._findingProviderFieldsSeverityOriginal;
    }
    // finding_provider_fields_types - computed: false, optional: true, required: false
    _findingProviderFieldsTypes;
    get findingProviderFieldsTypes() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('finding_provider_fields_types');
    }
    set findingProviderFieldsTypes(value) {
        this._findingProviderFieldsTypes = value;
    }
    resetFindingProviderFieldsTypes() {
        this._findingProviderFieldsTypes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get findingProviderFieldsTypesInput() {
        return this._findingProviderFieldsTypes;
    }
    // first_observed_at - computed: false, optional: true, required: false
    _firstObservedAt;
    get firstObservedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('first_observed_at');
    }
    set firstObservedAt(value) {
        this._firstObservedAt = value;
    }
    resetFirstObservedAt() {
        this._firstObservedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get firstObservedAtInput() {
        return this._firstObservedAt;
    }
    // generator_id - computed: false, optional: true, required: false
    _generatorId;
    get generatorId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('generator_id');
    }
    set generatorId(value) {
        this._generatorId = value;
    }
    resetGeneratorId() {
        this._generatorId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get generatorIdInput() {
        return this._generatorId;
    }
    // id - computed: false, optional: true, required: false
    _id;
    get id() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('id');
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
    // keyword - computed: false, optional: true, required: false
    _keyword;
    get keyword() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('keyword');
    }
    set keyword(value) {
        this._keyword = value;
    }
    resetKeyword() {
        this._keyword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keywordInput() {
        return this._keyword;
    }
    // last_observed_at - computed: false, optional: true, required: false
    _lastObservedAt;
    get lastObservedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('last_observed_at');
    }
    set lastObservedAt(value) {
        this._lastObservedAt = value;
    }
    resetLastObservedAt() {
        this._lastObservedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get lastObservedAtInput() {
        return this._lastObservedAt;
    }
    // malware_name - computed: false, optional: true, required: false
    _malwareName;
    get malwareName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('malware_name');
    }
    set malwareName(value) {
        this._malwareName = value;
    }
    resetMalwareName() {
        this._malwareName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get malwareNameInput() {
        return this._malwareName;
    }
    // malware_path - computed: false, optional: true, required: false
    _malwarePath;
    get malwarePath() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('malware_path');
    }
    set malwarePath(value) {
        this._malwarePath = value;
    }
    resetMalwarePath() {
        this._malwarePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get malwarePathInput() {
        return this._malwarePath;
    }
    // malware_state - computed: false, optional: true, required: false
    _malwareState;
    get malwareState() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('malware_state');
    }
    set malwareState(value) {
        this._malwareState = value;
    }
    resetMalwareState() {
        this._malwareState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get malwareStateInput() {
        return this._malwareState;
    }
    // malware_type - computed: false, optional: true, required: false
    _malwareType;
    get malwareType() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('malware_type');
    }
    set malwareType(value) {
        this._malwareType = value;
    }
    resetMalwareType() {
        this._malwareType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get malwareTypeInput() {
        return this._malwareType;
    }
    // network_destination_domain - computed: false, optional: true, required: false
    _networkDestinationDomain;
    get networkDestinationDomain() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_destination_domain');
    }
    set networkDestinationDomain(value) {
        this._networkDestinationDomain = value;
    }
    resetNetworkDestinationDomain() {
        this._networkDestinationDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkDestinationDomainInput() {
        return this._networkDestinationDomain;
    }
    // network_destination_ipv4 - computed: false, optional: true, required: false
    _networkDestinationIpv4;
    get networkDestinationIpv4() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_destination_ipv4');
    }
    set networkDestinationIpv4(value) {
        this._networkDestinationIpv4 = value;
    }
    resetNetworkDestinationIpv4() {
        this._networkDestinationIpv4 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkDestinationIpv4Input() {
        return this._networkDestinationIpv4;
    }
    // network_destination_ipv6 - computed: false, optional: true, required: false
    _networkDestinationIpv6;
    get networkDestinationIpv6() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_destination_ipv6');
    }
    set networkDestinationIpv6(value) {
        this._networkDestinationIpv6 = value;
    }
    resetNetworkDestinationIpv6() {
        this._networkDestinationIpv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkDestinationIpv6Input() {
        return this._networkDestinationIpv6;
    }
    // network_destination_port - computed: false, optional: true, required: false
    _networkDestinationPort;
    get networkDestinationPort() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_destination_port');
    }
    set networkDestinationPort(value) {
        this._networkDestinationPort = value;
    }
    resetNetworkDestinationPort() {
        this._networkDestinationPort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkDestinationPortInput() {
        return this._networkDestinationPort;
    }
    // network_direction - computed: false, optional: true, required: false
    _networkDirection;
    get networkDirection() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_direction');
    }
    set networkDirection(value) {
        this._networkDirection = value;
    }
    resetNetworkDirection() {
        this._networkDirection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkDirectionInput() {
        return this._networkDirection;
    }
    // network_protocol - computed: false, optional: true, required: false
    _networkProtocol;
    get networkProtocol() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_protocol');
    }
    set networkProtocol(value) {
        this._networkProtocol = value;
    }
    resetNetworkProtocol() {
        this._networkProtocol = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkProtocolInput() {
        return this._networkProtocol;
    }
    // network_source_domain - computed: false, optional: true, required: false
    _networkSourceDomain;
    get networkSourceDomain() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_source_domain');
    }
    set networkSourceDomain(value) {
        this._networkSourceDomain = value;
    }
    resetNetworkSourceDomain() {
        this._networkSourceDomain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkSourceDomainInput() {
        return this._networkSourceDomain;
    }
    // network_source_ipv4 - computed: false, optional: true, required: false
    _networkSourceIpv4;
    get networkSourceIpv4() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_source_ipv4');
    }
    set networkSourceIpv4(value) {
        this._networkSourceIpv4 = value;
    }
    resetNetworkSourceIpv4() {
        this._networkSourceIpv4 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkSourceIpv4Input() {
        return this._networkSourceIpv4;
    }
    // network_source_ipv6 - computed: false, optional: true, required: false
    _networkSourceIpv6;
    get networkSourceIpv6() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_source_ipv6');
    }
    set networkSourceIpv6(value) {
        this._networkSourceIpv6 = value;
    }
    resetNetworkSourceIpv6() {
        this._networkSourceIpv6 = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkSourceIpv6Input() {
        return this._networkSourceIpv6;
    }
    // network_source_mac - computed: false, optional: true, required: false
    _networkSourceMac;
    get networkSourceMac() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_source_mac');
    }
    set networkSourceMac(value) {
        this._networkSourceMac = value;
    }
    resetNetworkSourceMac() {
        this._networkSourceMac = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkSourceMacInput() {
        return this._networkSourceMac;
    }
    // network_source_port - computed: false, optional: true, required: false
    _networkSourcePort;
    get networkSourcePort() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('network_source_port');
    }
    set networkSourcePort(value) {
        this._networkSourcePort = value;
    }
    resetNetworkSourcePort() {
        this._networkSourcePort = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get networkSourcePortInput() {
        return this._networkSourcePort;
    }
    // note_text - computed: false, optional: true, required: false
    _noteText;
    get noteText() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('note_text');
    }
    set noteText(value) {
        this._noteText = value;
    }
    resetNoteText() {
        this._noteText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noteTextInput() {
        return this._noteText;
    }
    // note_updated_at - computed: false, optional: true, required: false
    _noteUpdatedAt;
    get noteUpdatedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('note_updated_at');
    }
    set noteUpdatedAt(value) {
        this._noteUpdatedAt = value;
    }
    resetNoteUpdatedAt() {
        this._noteUpdatedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noteUpdatedAtInput() {
        return this._noteUpdatedAt;
    }
    // note_updated_by - computed: false, optional: true, required: false
    _noteUpdatedBy;
    get noteUpdatedBy() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('note_updated_by');
    }
    set noteUpdatedBy(value) {
        this._noteUpdatedBy = value;
    }
    resetNoteUpdatedBy() {
        this._noteUpdatedBy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get noteUpdatedByInput() {
        return this._noteUpdatedBy;
    }
    // process_launched_at - computed: false, optional: true, required: false
    _processLaunchedAt;
    get processLaunchedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('process_launched_at');
    }
    set processLaunchedAt(value) {
        this._processLaunchedAt = value;
    }
    resetProcessLaunchedAt() {
        this._processLaunchedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processLaunchedAtInput() {
        return this._processLaunchedAt;
    }
    // process_name - computed: false, optional: true, required: false
    _processName;
    get processName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('process_name');
    }
    set processName(value) {
        this._processName = value;
    }
    resetProcessName() {
        this._processName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processNameInput() {
        return this._processName;
    }
    // process_parent_pid - computed: false, optional: true, required: false
    _processParentPid;
    get processParentPid() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('process_parent_pid');
    }
    set processParentPid(value) {
        this._processParentPid = value;
    }
    resetProcessParentPid() {
        this._processParentPid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processParentPidInput() {
        return this._processParentPid;
    }
    // process_path - computed: false, optional: true, required: false
    _processPath;
    get processPath() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('process_path');
    }
    set processPath(value) {
        this._processPath = value;
    }
    resetProcessPath() {
        this._processPath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processPathInput() {
        return this._processPath;
    }
    // process_pid - computed: false, optional: true, required: false
    _processPid;
    get processPid() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('process_pid');
    }
    set processPid(value) {
        this._processPid = value;
    }
    resetProcessPid() {
        this._processPid = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processPidInput() {
        return this._processPid;
    }
    // process_terminated_at - computed: false, optional: true, required: false
    _processTerminatedAt;
    get processTerminatedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('process_terminated_at');
    }
    set processTerminatedAt(value) {
        this._processTerminatedAt = value;
    }
    resetProcessTerminatedAt() {
        this._processTerminatedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processTerminatedAtInput() {
        return this._processTerminatedAt;
    }
    // product_arn - computed: false, optional: true, required: false
    _productArn;
    get productArn() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('product_arn');
    }
    set productArn(value) {
        this._productArn = value;
    }
    resetProductArn() {
        this._productArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get productArnInput() {
        return this._productArn;
    }
    // product_fields - computed: false, optional: true, required: false
    _productFields;
    get productFields() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('product_fields');
    }
    set productFields(value) {
        this._productFields = value;
    }
    resetProductFields() {
        this._productFields = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get productFieldsInput() {
        return this._productFields;
    }
    // product_name - computed: false, optional: true, required: false
    _productName;
    get productName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('product_name');
    }
    set productName(value) {
        this._productName = value;
    }
    resetProductName() {
        this._productName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get productNameInput() {
        return this._productName;
    }
    // recommendation_text - computed: false, optional: true, required: false
    _recommendationText;
    get recommendationText() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('recommendation_text');
    }
    set recommendationText(value) {
        this._recommendationText = value;
    }
    resetRecommendationText() {
        this._recommendationText = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get recommendationTextInput() {
        return this._recommendationText;
    }
    // record_state - computed: false, optional: true, required: false
    _recordState;
    get recordState() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('record_state');
    }
    set recordState(value) {
        this._recordState = value;
    }
    resetRecordState() {
        this._recordState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get recordStateInput() {
        return this._recordState;
    }
    // related_findings_id - computed: false, optional: true, required: false
    _relatedFindingsId;
    get relatedFindingsId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('related_findings_id');
    }
    set relatedFindingsId(value) {
        this._relatedFindingsId = value;
    }
    resetRelatedFindingsId() {
        this._relatedFindingsId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get relatedFindingsIdInput() {
        return this._relatedFindingsId;
    }
    // related_findings_product_arn - computed: false, optional: true, required: false
    _relatedFindingsProductArn;
    get relatedFindingsProductArn() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('related_findings_product_arn');
    }
    set relatedFindingsProductArn(value) {
        this._relatedFindingsProductArn = value;
    }
    resetRelatedFindingsProductArn() {
        this._relatedFindingsProductArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get relatedFindingsProductArnInput() {
        return this._relatedFindingsProductArn;
    }
    // resource_aws_ec2_instance_iam_instance_profile_arn - computed: false, optional: true, required: false
    _resourceAwsEc2InstanceIamInstanceProfileArn;
    get resourceAwsEc2InstanceIamInstanceProfileArn() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_iam_instance_profile_arn');
    }
    set resourceAwsEc2InstanceIamInstanceProfileArn(value) {
        this._resourceAwsEc2InstanceIamInstanceProfileArn = value;
    }
    resetResourceAwsEc2InstanceIamInstanceProfileArn() {
        this._resourceAwsEc2InstanceIamInstanceProfileArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceAwsEc2InstanceIamInstanceProfileArnInput() {
        return this._resourceAwsEc2InstanceIamInstanceProfileArn;
    }
    // resource_aws_ec2_instance_image_id - computed: false, optional: true, required: false
    _resourceAwsEc2InstanceImageId;
    get resourceAwsEc2InstanceImageId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_image_id');
    }
    set resourceAwsEc2InstanceImageId(value) {
        this._resourceAwsEc2InstanceImageId = value;
    }
    resetResourceAwsEc2InstanceImageId() {
        this._resourceAwsEc2InstanceImageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceAwsEc2InstanceImageIdInput() {
        return this._resourceAwsEc2InstanceImageId;
    }
    // resource_aws_ec2_instance_ipv4_addresses - computed: false, optional: true, required: false
    _resourceAwsEc2InstanceIpv4Addresses;
    get resourceAwsEc2InstanceIpv4Addresses() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_ipv4_addresses');
    }
    set resourceAwsEc2InstanceIpv4Addresses(value) {
        this._resourceAwsEc2InstanceIpv4Addresses = value;
    }
    resetResourceAwsEc2InstanceIpv4Addresses() {
        this._resourceAwsEc2InstanceIpv4Addresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceAwsEc2InstanceIpv4AddressesInput() {
        return this._resourceAwsEc2InstanceIpv4Addresses;
    }
    // resource_aws_ec2_instance_ipv6_addresses - computed: false, optional: true, required: false
    _resourceAwsEc2InstanceIpv6Addresses;
    get resourceAwsEc2InstanceIpv6Addresses() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_ipv6_addresses');
    }
    set resourceAwsEc2InstanceIpv6Addresses(value) {
        this._resourceAwsEc2InstanceIpv6Addresses = value;
    }
    resetResourceAwsEc2InstanceIpv6Addresses() {
        this._resourceAwsEc2InstanceIpv6Addresses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceAwsEc2InstanceIpv6AddressesInput() {
        return this._resourceAwsEc2InstanceIpv6Addresses;
    }
    // resource_aws_ec2_instance_key_name - computed: false, optional: true, required: false
    _resourceAwsEc2InstanceKeyName;
    get resourceAwsEc2InstanceKeyName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_key_name');
    }
    set resourceAwsEc2InstanceKeyName(value) {
        this._resourceAwsEc2InstanceKeyName = value;
    }
    resetResourceAwsEc2InstanceKeyName() {
        this._resourceAwsEc2InstanceKeyName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceAwsEc2InstanceKeyNameInput() {
        return this._resourceAwsEc2InstanceKeyName;
    }
    // resource_aws_ec2_instance_launched_at - computed: false, optional: true, required: false
    _resourceAwsEc2InstanceLaunchedAt;
    get resourceAwsEc2InstanceLaunchedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_launched_at');
    }
    set resourceAwsEc2InstanceLaunchedAt(value) {
        this._resourceAwsEc2InstanceLaunchedAt = value;
    }
    resetResourceAwsEc2InstanceLaunchedAt() {
        this._resourceAwsEc2InstanceLaunchedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceAwsEc2InstanceLaunchedAtInput() {
        return this._resourceAwsEc2InstanceLaunchedAt;
    }
    // resource_aws_ec2_instance_subnet_id - computed: false, optional: true, required: false
    _resourceAwsEc2InstanceSubnetId;
    get resourceAwsEc2InstanceSubnetId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_subnet_id');
    }
    set resourceAwsEc2InstanceSubnetId(value) {
        this._resourceAwsEc2InstanceSubnetId = value;
    }
    resetResourceAwsEc2InstanceSubnetId() {
        this._resourceAwsEc2InstanceSubnetId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceAwsEc2InstanceSubnetIdInput() {
        return this._resourceAwsEc2InstanceSubnetId;
    }
    // resource_aws_ec2_instance_type - computed: false, optional: true, required: false
    _resourceAwsEc2InstanceType;
    get resourceAwsEc2InstanceType() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_type');
    }
    set resourceAwsEc2InstanceType(value) {
        this._resourceAwsEc2InstanceType = value;
    }
    resetResourceAwsEc2InstanceType() {
        this._resourceAwsEc2InstanceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceAwsEc2InstanceTypeInput() {
        return this._resourceAwsEc2InstanceType;
    }
    // resource_aws_ec2_instance_vpc_id - computed: false, optional: true, required: false
    _resourceAwsEc2InstanceVpcId;
    get resourceAwsEc2InstanceVpcId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_ec2_instance_vpc_id');
    }
    set resourceAwsEc2InstanceVpcId(value) {
        this._resourceAwsEc2InstanceVpcId = value;
    }
    resetResourceAwsEc2InstanceVpcId() {
        this._resourceAwsEc2InstanceVpcId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceAwsEc2InstanceVpcIdInput() {
        return this._resourceAwsEc2InstanceVpcId;
    }
    // resource_aws_iam_access_key_created_at - computed: false, optional: true, required: false
    _resourceAwsIamAccessKeyCreatedAt;
    get resourceAwsIamAccessKeyCreatedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_iam_access_key_created_at');
    }
    set resourceAwsIamAccessKeyCreatedAt(value) {
        this._resourceAwsIamAccessKeyCreatedAt = value;
    }
    resetResourceAwsIamAccessKeyCreatedAt() {
        this._resourceAwsIamAccessKeyCreatedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceAwsIamAccessKeyCreatedAtInput() {
        return this._resourceAwsIamAccessKeyCreatedAt;
    }
    // resource_aws_iam_access_key_status - computed: false, optional: true, required: false
    _resourceAwsIamAccessKeyStatus;
    get resourceAwsIamAccessKeyStatus() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_iam_access_key_status');
    }
    set resourceAwsIamAccessKeyStatus(value) {
        this._resourceAwsIamAccessKeyStatus = value;
    }
    resetResourceAwsIamAccessKeyStatus() {
        this._resourceAwsIamAccessKeyStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceAwsIamAccessKeyStatusInput() {
        return this._resourceAwsIamAccessKeyStatus;
    }
    // resource_aws_iam_access_key_user_name - computed: false, optional: true, required: false
    _resourceAwsIamAccessKeyUserName;
    get resourceAwsIamAccessKeyUserName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_iam_access_key_user_name');
    }
    set resourceAwsIamAccessKeyUserName(value) {
        this._resourceAwsIamAccessKeyUserName = value;
    }
    resetResourceAwsIamAccessKeyUserName() {
        this._resourceAwsIamAccessKeyUserName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceAwsIamAccessKeyUserNameInput() {
        return this._resourceAwsIamAccessKeyUserName;
    }
    // resource_aws_s3_bucket_owner_id - computed: false, optional: true, required: false
    _resourceAwsS3BucketOwnerId;
    get resourceAwsS3BucketOwnerId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_s3_bucket_owner_id');
    }
    set resourceAwsS3BucketOwnerId(value) {
        this._resourceAwsS3BucketOwnerId = value;
    }
    resetResourceAwsS3BucketOwnerId() {
        this._resourceAwsS3BucketOwnerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceAwsS3BucketOwnerIdInput() {
        return this._resourceAwsS3BucketOwnerId;
    }
    // resource_aws_s3_bucket_owner_name - computed: false, optional: true, required: false
    _resourceAwsS3BucketOwnerName;
    get resourceAwsS3BucketOwnerName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_aws_s3_bucket_owner_name');
    }
    set resourceAwsS3BucketOwnerName(value) {
        this._resourceAwsS3BucketOwnerName = value;
    }
    resetResourceAwsS3BucketOwnerName() {
        this._resourceAwsS3BucketOwnerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceAwsS3BucketOwnerNameInput() {
        return this._resourceAwsS3BucketOwnerName;
    }
    // resource_container_image_id - computed: false, optional: true, required: false
    _resourceContainerImageId;
    get resourceContainerImageId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_container_image_id');
    }
    set resourceContainerImageId(value) {
        this._resourceContainerImageId = value;
    }
    resetResourceContainerImageId() {
        this._resourceContainerImageId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceContainerImageIdInput() {
        return this._resourceContainerImageId;
    }
    // resource_container_image_name - computed: false, optional: true, required: false
    _resourceContainerImageName;
    get resourceContainerImageName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_container_image_name');
    }
    set resourceContainerImageName(value) {
        this._resourceContainerImageName = value;
    }
    resetResourceContainerImageName() {
        this._resourceContainerImageName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceContainerImageNameInput() {
        return this._resourceContainerImageName;
    }
    // resource_container_launched_at - computed: false, optional: true, required: false
    _resourceContainerLaunchedAt;
    get resourceContainerLaunchedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_container_launched_at');
    }
    set resourceContainerLaunchedAt(value) {
        this._resourceContainerLaunchedAt = value;
    }
    resetResourceContainerLaunchedAt() {
        this._resourceContainerLaunchedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceContainerLaunchedAtInput() {
        return this._resourceContainerLaunchedAt;
    }
    // resource_container_name - computed: false, optional: true, required: false
    _resourceContainerName;
    get resourceContainerName() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_container_name');
    }
    set resourceContainerName(value) {
        this._resourceContainerName = value;
    }
    resetResourceContainerName() {
        this._resourceContainerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceContainerNameInput() {
        return this._resourceContainerName;
    }
    // resource_details_other - computed: false, optional: true, required: false
    _resourceDetailsOther;
    get resourceDetailsOther() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_details_other');
    }
    set resourceDetailsOther(value) {
        this._resourceDetailsOther = value;
    }
    resetResourceDetailsOther() {
        this._resourceDetailsOther = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceDetailsOtherInput() {
        return this._resourceDetailsOther;
    }
    // resource_id - computed: false, optional: true, required: false
    _resourceId;
    get resourceId() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_id');
    }
    set resourceId(value) {
        this._resourceId = value;
    }
    resetResourceId() {
        this._resourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceIdInput() {
        return this._resourceId;
    }
    // resource_partition - computed: false, optional: true, required: false
    _resourcePartition;
    get resourcePartition() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_partition');
    }
    set resourcePartition(value) {
        this._resourcePartition = value;
    }
    resetResourcePartition() {
        this._resourcePartition = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourcePartitionInput() {
        return this._resourcePartition;
    }
    // resource_region - computed: false, optional: true, required: false
    _resourceRegion;
    get resourceRegion() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_region');
    }
    set resourceRegion(value) {
        this._resourceRegion = value;
    }
    resetResourceRegion() {
        this._resourceRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceRegionInput() {
        return this._resourceRegion;
    }
    // resource_tags - computed: false, optional: true, required: false
    _resourceTags;
    get resourceTags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_tags');
    }
    set resourceTags(value) {
        this._resourceTags = value;
    }
    resetResourceTags() {
        this._resourceTags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceTagsInput() {
        return this._resourceTags;
    }
    // resource_type - computed: false, optional: true, required: false
    _resourceType;
    get resourceType() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('resource_type');
    }
    set resourceType(value) {
        this._resourceType = value;
    }
    resetResourceType() {
        this._resourceType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceTypeInput() {
        return this._resourceType;
    }
    // severity_label - computed: false, optional: true, required: false
    _severityLabel;
    get severityLabel() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('severity_label');
    }
    set severityLabel(value) {
        this._severityLabel = value;
    }
    resetSeverityLabel() {
        this._severityLabel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get severityLabelInput() {
        return this._severityLabel;
    }
    // source_url - computed: false, optional: true, required: false
    _sourceUrl;
    get sourceUrl() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('source_url');
    }
    set sourceUrl(value) {
        this._sourceUrl = value;
    }
    resetSourceUrl() {
        this._sourceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceUrlInput() {
        return this._sourceUrl;
    }
    // threat_intel_indicator_category - computed: false, optional: true, required: false
    _threatIntelIndicatorCategory;
    get threatIntelIndicatorCategory() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('threat_intel_indicator_category');
    }
    set threatIntelIndicatorCategory(value) {
        this._threatIntelIndicatorCategory = value;
    }
    resetThreatIntelIndicatorCategory() {
        this._threatIntelIndicatorCategory = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get threatIntelIndicatorCategoryInput() {
        return this._threatIntelIndicatorCategory;
    }
    // threat_intel_indicator_last_observed_at - computed: false, optional: true, required: false
    _threatIntelIndicatorLastObservedAt;
    get threatIntelIndicatorLastObservedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('threat_intel_indicator_last_observed_at');
    }
    set threatIntelIndicatorLastObservedAt(value) {
        this._threatIntelIndicatorLastObservedAt = value;
    }
    resetThreatIntelIndicatorLastObservedAt() {
        this._threatIntelIndicatorLastObservedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get threatIntelIndicatorLastObservedAtInput() {
        return this._threatIntelIndicatorLastObservedAt;
    }
    // threat_intel_indicator_source - computed: false, optional: true, required: false
    _threatIntelIndicatorSource;
    get threatIntelIndicatorSource() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('threat_intel_indicator_source');
    }
    set threatIntelIndicatorSource(value) {
        this._threatIntelIndicatorSource = value;
    }
    resetThreatIntelIndicatorSource() {
        this._threatIntelIndicatorSource = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get threatIntelIndicatorSourceInput() {
        return this._threatIntelIndicatorSource;
    }
    // threat_intel_indicator_source_url - computed: false, optional: true, required: false
    _threatIntelIndicatorSourceUrl;
    get threatIntelIndicatorSourceUrl() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('threat_intel_indicator_source_url');
    }
    set threatIntelIndicatorSourceUrl(value) {
        this._threatIntelIndicatorSourceUrl = value;
    }
    resetThreatIntelIndicatorSourceUrl() {
        this._threatIntelIndicatorSourceUrl = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get threatIntelIndicatorSourceUrlInput() {
        return this._threatIntelIndicatorSourceUrl;
    }
    // threat_intel_indicator_type - computed: false, optional: true, required: false
    _threatIntelIndicatorType;
    get threatIntelIndicatorType() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('threat_intel_indicator_type');
    }
    set threatIntelIndicatorType(value) {
        this._threatIntelIndicatorType = value;
    }
    resetThreatIntelIndicatorType() {
        this._threatIntelIndicatorType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get threatIntelIndicatorTypeInput() {
        return this._threatIntelIndicatorType;
    }
    // threat_intel_indicator_value - computed: false, optional: true, required: false
    _threatIntelIndicatorValue;
    get threatIntelIndicatorValue() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('threat_intel_indicator_value');
    }
    set threatIntelIndicatorValue(value) {
        this._threatIntelIndicatorValue = value;
    }
    resetThreatIntelIndicatorValue() {
        this._threatIntelIndicatorValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get threatIntelIndicatorValueInput() {
        return this._threatIntelIndicatorValue;
    }
    // title - computed: false, optional: true, required: false
    _title;
    get title() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('title');
    }
    set title(value) {
        this._title = value;
    }
    resetTitle() {
        this._title = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get titleInput() {
        return this._title;
    }
    // type - computed: false, optional: true, required: false
    _type;
    get type() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    resetType() {
        this._type = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // updated_at - computed: false, optional: true, required: false
    _updatedAt;
    get updatedAt() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('updated_at');
    }
    set updatedAt(value) {
        this._updatedAt = value;
    }
    resetUpdatedAt() {
        this._updatedAt = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updatedAtInput() {
        return this._updatedAt;
    }
    // user_defined_values - computed: false, optional: true, required: false
    _userDefinedValues;
    get userDefinedValues() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('user_defined_values');
    }
    set userDefinedValues(value) {
        this._userDefinedValues = value;
    }
    resetUserDefinedValues() {
        this._userDefinedValues = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get userDefinedValuesInput() {
        return this._userDefinedValues;
    }
    // verification_state - computed: false, optional: true, required: false
    _verificationState;
    get verificationState() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('verification_state');
    }
    set verificationState(value) {
        this._verificationState = value;
    }
    resetVerificationState() {
        this._verificationState = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get verificationStateInput() {
        return this._verificationState;
    }
    // workflow_status - computed: false, optional: true, required: false
    _workflowStatus;
    get workflowStatus() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('workflow_status');
    }
    set workflowStatus(value) {
        this._workflowStatus = value;
    }
    resetWorkflowStatus() {
        this._workflowStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workflowStatusInput() {
        return this._workflowStatus;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html aws_securityhub_insight}
*/
export class SecurityhubInsight extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_securityhub_insight";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html aws_securityhub_insight} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubInsightConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_securityhub_insight',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._groupByAttribute = config.groupByAttribute;
        this._name = config.name;
        this._filters.internalValue = config.filters;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // group_by_attribute - computed: false, optional: false, required: true
    _groupByAttribute;
    get groupByAttribute() {
        return this.getStringAttribute('group_by_attribute');
    }
    set groupByAttribute(value) {
        this._groupByAttribute = value;
    }
    // Temporarily expose input value. Use with caution.
    get groupByAttributeInput() {
        return this._groupByAttribute;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // filters - computed: false, optional: false, required: true
    _filters = new SecurityhubInsightFiltersOutputReference(this, "filters", true);
    get filters() {
        return this._filters;
    }
    putFilters(value) {
        this._filters.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get filtersInput() {
        return this._filters.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            group_by_attribute: cdktf.stringToTerraform(this._groupByAttribute),
            name: cdktf.stringToTerraform(this._name),
            filters: securityhubInsightFiltersToTerraform(this._filters.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdXJpdHlodWItaW5zaWdodC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsic2VjdXJpdHlodWItaW5zaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUFnQy9CLE1BQU0sVUFBVSxnREFBZ0QsQ0FBQyxNQUE4QztJQUM3RyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLFVBQVUsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFVBQVUsQ0FBQztRQUN2RCxLQUFLLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxLQUFLLENBQUM7S0FDOUMsQ0FBQTtBQUNILENBQUM7QUFhRCxNQUFNLFVBQVUsK0NBQStDLENBQUMsTUFBNkM7SUFDM0csSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxVQUFVLENBQUM7UUFDdkQsS0FBSyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsS0FBSyxDQUFDO0tBQzlDLENBQUE7QUFDSCxDQUFDO0FBYUQsTUFBTSxVQUFVLG9EQUFvRCxD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