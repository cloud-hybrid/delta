import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Security Hub
*/
export interface SecurityhubInsightConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#group_by_attribute SecurityhubInsight#group_by_attribute}
    */
    readonly groupByAttribute: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#name SecurityhubInsight#name}
    */
    readonly name: string;
    /**
    * filters block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#filters SecurityhubInsight#filters}
    */
    readonly filters: SecurityhubInsightFilters;
}
export interface SecurityhubInsightFiltersAwsAccountId {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersAwsAccountIdToTerraform(struct?: SecurityhubInsightFiltersAwsAccountId): any;
export interface SecurityhubInsightFiltersCompanyName {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersCompanyNameToTerraform(struct?: SecurityhubInsightFiltersCompanyName): any;
export interface SecurityhubInsightFiltersComplianceStatus {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersComplianceStatusToTerraform(struct?: SecurityhubInsightFiltersComplianceStatus): any;
export interface SecurityhubInsightFiltersConfidence {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersConfidenceToTerraform(struct?: SecurityhubInsightFiltersConfidence): any;
export interface SecurityhubInsightFiltersCreatedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersCreatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersCreatedAtDateRangeOutputReference | SecurityhubInsightFiltersCreatedAtDateRange): any;
export declare class SecurityhubInsightFiltersCreatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SecurityhubInsightFiltersCreatedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersCreatedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface SecurityhubInsightFiltersCreatedAt {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersCreatedAtDateRange;
}
export declare function securityhubInsightFiltersCreatedAtToTerraform(struct?: SecurityhubInsightFiltersCreatedAt): any;
export interface SecurityhubInsightFiltersCriticality {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersCriticalityToTerraform(struct?: SecurityhubInsightFiltersCriticality): any;
export interface SecurityhubInsightFiltersDescription {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersDescriptionToTerraform(struct?: SecurityhubInsightFiltersDescription): any;
export interface SecurityhubInsightFiltersFindingProviderFieldsConfidence {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersFindingProviderFieldsConfidenceToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsConfidence): any;
export interface SecurityhubInsightFiltersFindingProviderFieldsCriticality {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersFindingProviderFieldsCriticalityToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsCriticality): any;
export interface SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsIdToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId): any;
export interface SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArnToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn): any;
export interface SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersFindingProviderFieldsSeverityLabelToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel): any;
export interface SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersFindingProviderFieldsSeverityOriginalToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal): any;
export interface SecurityhubInsightFiltersFindingProviderFieldsTypes {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersFindingProviderFieldsTypesToTerraform(struct?: SecurityhubInsightFiltersFindingProviderFieldsTypes): any;
export interface SecurityhubInsightFiltersFirstObservedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersFirstObservedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference | SecurityhubInsightFiltersFirstObservedAtDateRange): any;
export declare class SecurityhubInsightFiltersFirstObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SecurityhubInsightFiltersFirstObservedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersFirstObservedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface SecurityhubInsightFiltersFirstObservedAt {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersFirstObservedAtDateRange;
}
export declare function securityhubInsightFiltersFirstObservedAtToTerraform(struct?: SecurityhubInsightFiltersFirstObservedAt): any;
export interface SecurityhubInsightFiltersGeneratorId {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersGeneratorIdToTerraform(struct?: SecurityhubInsightFiltersGeneratorId): any;
export interface SecurityhubInsightFiltersId {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersIdToTerraform(struct?: SecurityhubInsightFiltersId): any;
export interface SecurityhubInsightFiltersKeyword {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersKeywordToTerraform(struct?: SecurityhubInsightFiltersKeyword): any;
export interface SecurityhubInsightFiltersLastObservedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersLastObservedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference | SecurityhubInsightFiltersLastObservedAtDateRange): any;
export declare class SecurityhubInsightFiltersLastObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SecurityhubInsightFiltersLastObservedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersLastObservedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface SecurityhubInsightFiltersLastObservedAt {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersLastObservedAtDateRange;
}
export declare function securityhubInsightFiltersLastObservedAtToTerraform(struct?: SecurityhubInsightFiltersLastObservedAt): any;
export interface SecurityhubInsightFiltersMalwareName {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersMalwareNameToTerraform(struct?: SecurityhubInsightFiltersMalwareName): any;
export interface SecurityhubInsightFiltersMalwarePath {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersMalwarePathToTerraform(struct?: SecurityhubInsightFiltersMalwarePath): any;
export interface SecurityhubInsightFiltersMalwareState {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersMalwareStateToTerraform(struct?: SecurityhubInsightFiltersMalwareState): any;
export interface SecurityhubInsightFiltersMalwareType {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersMalwareTypeToTerraform(struct?: SecurityhubInsightFiltersMalwareType): any;
export interface SecurityhubInsightFiltersNetworkDestinationDomain {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersNetworkDestinationDomainToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationDomain): any;
export interface SecurityhubInsightFiltersNetworkDestinationIpv4 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}
    */
    readonly cidr: string;
}
export declare function securityhubInsightFiltersNetworkDestinationIpv4ToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationIpv4): any;
export interface SecurityhubInsightFiltersNetworkDestinationIpv6 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}
    */
    readonly cidr: string;
}
export declare function securityhubInsightFiltersNetworkDestinationIpv6ToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationIpv6): any;
export interface SecurityhubInsightFiltersNetworkDestinationPort {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersNetworkDestinationPortToTerraform(struct?: SecurityhubInsightFiltersNetworkDestinationPort): any;
export interface SecurityhubInsightFiltersNetworkDirection {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersNetworkDirectionToTerraform(struct?: SecurityhubInsightFiltersNetworkDirection): any;
export interface SecurityhubInsightFiltersNetworkProtocol {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersNetworkProtocolToTerraform(struct?: SecurityhubInsightFiltersNetworkProtocol): any;
export interface SecurityhubInsightFiltersNetworkSourceDomain {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersNetworkSourceDomainToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceDomain): any;
export interface SecurityhubInsightFiltersNetworkSourceIpv4 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}
    */
    readonly cidr: string;
}
export declare function securityhubInsightFiltersNetworkSourceIpv4ToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceIpv4): any;
export interface SecurityhubInsightFiltersNetworkSourceIpv6 {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}
    */
    readonly cidr: string;
}
export declare function securityhubInsightFiltersNetworkSourceIpv6ToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceIpv6): any;
export interface SecurityhubInsightFiltersNetworkSourceMac {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersNetworkSourceMacToTerraform(struct?: SecurityhubInsightFiltersNetworkSourceMac): any;
export interface SecurityhubInsightFiltersNetworkSourcePort {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersNetworkSourcePortToTerraform(struct?: SecurityhubInsightFiltersNetworkSourcePort): any;
export interface SecurityhubInsightFiltersNoteText {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersNoteTextToTerraform(struct?: SecurityhubInsightFiltersNoteText): any;
export interface SecurityhubInsightFiltersNoteUpdatedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersNoteUpdatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference | SecurityhubInsightFiltersNoteUpdatedAtDateRange): any;
export declare class SecurityhubInsightFiltersNoteUpdatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SecurityhubInsightFiltersNoteUpdatedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersNoteUpdatedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface SecurityhubInsightFiltersNoteUpdatedAt {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersNoteUpdatedAtDateRange;
}
export declare function securityhubInsightFiltersNoteUpdatedAtToTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedAt): any;
export interface SecurityhubInsightFiltersNoteUpdatedBy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersNoteUpdatedByToTerraform(struct?: SecurityhubInsightFiltersNoteUpdatedBy): any;
export interface SecurityhubInsightFiltersProcessLaunchedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersProcessLaunchedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersProcessLaunchedAtDateRange): any;
export declare class SecurityhubInsightFiltersProcessLaunchedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SecurityhubInsightFiltersProcessLaunchedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersProcessLaunchedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface SecurityhubInsightFiltersProcessLaunchedAt {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersProcessLaunchedAtDateRange;
}
export declare function securityhubInsightFiltersProcessLaunchedAtToTerraform(struct?: SecurityhubInsightFiltersProcessLaunchedAt): any;
export interface SecurityhubInsightFiltersProcessName {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersProcessNameToTerraform(struct?: SecurityhubInsightFiltersProcessName): any;
export interface SecurityhubInsightFiltersProcessParentPid {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersProcessParentPidToTerraform(struct?: SecurityhubInsightFiltersProcessParentPid): any;
export interface SecurityhubInsightFiltersProcessPath {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersProcessPathToTerraform(struct?: SecurityhubInsightFiltersProcessPath): any;
export interface SecurityhubInsightFiltersProcessPid {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#eq SecurityhubInsight#eq}
    */
    readonly eq?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#gte SecurityhubInsight#gte}
    */
    readonly gte?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#lte SecurityhubInsight#lte}
    */
    readonly lte?: string;
}
export declare function securityhubInsightFiltersProcessPidToTerraform(struct?: SecurityhubInsightFiltersProcessPid): any;
export interface SecurityhubInsightFiltersProcessTerminatedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersProcessTerminatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference | SecurityhubInsightFiltersProcessTerminatedAtDateRange): any;
export declare class SecurityhubInsightFiltersProcessTerminatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SecurityhubInsightFiltersProcessTerminatedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersProcessTerminatedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface SecurityhubInsightFiltersProcessTerminatedAt {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersProcessTerminatedAtDateRange;
}
export declare function securityhubInsightFiltersProcessTerminatedAtToTerraform(struct?: SecurityhubInsightFiltersProcessTerminatedAt): any;
export interface SecurityhubInsightFiltersProductArn {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersProductArnToTerraform(struct?: SecurityhubInsightFiltersProductArn): any;
export interface SecurityhubInsightFiltersProductFields {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#key SecurityhubInsight#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersProductFieldsToTerraform(struct?: SecurityhubInsightFiltersProductFields): any;
export interface SecurityhubInsightFiltersProductName {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersProductNameToTerraform(struct?: SecurityhubInsightFiltersProductName): any;
export interface SecurityhubInsightFiltersRecommendationText {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersRecommendationTextToTerraform(struct?: SecurityhubInsightFiltersRecommendationText): any;
export interface SecurityhubInsightFiltersRecordState {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersRecordStateToTerraform(struct?: SecurityhubInsightFiltersRecordState): any;
export interface SecurityhubInsightFiltersRelatedFindingsId {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersRelatedFindingsIdToTerraform(struct?: SecurityhubInsightFiltersRelatedFindingsId): any;
export interface SecurityhubInsightFiltersRelatedFindingsProductArn {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersRelatedFindingsProductArnToTerraform(struct?: SecurityhubInsightFiltersRelatedFindingsProductArn): any;
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArnToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn): any;
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceImageId {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceImageIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId): any;
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}
    */
    readonly cidr: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceIpv4AddressesToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses): any;
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#cidr SecurityhubInsight#cidr}
    */
    readonly cidr: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceIpv6AddressesToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses): any;
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceKeyNameToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName): any;
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange): any;
export declare class SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtDateRange;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceLaunchedAtToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt): any;
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceSubnetIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId): any;
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceType {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceTypeToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceType): any;
export interface SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsEc2InstanceVpcIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId): any;
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange): any;
export declare class SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtDateRange;
}
export declare function securityhubInsightFiltersResourceAwsIamAccessKeyCreatedAtToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt): any;
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsIamAccessKeyStatusToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus): any;
export interface SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsIamAccessKeyUserNameToTerraform(struct?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName): any;
export interface SecurityhubInsightFiltersResourceAwsS3BucketOwnerId {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsS3BucketOwnerIdToTerraform(struct?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId): any;
export interface SecurityhubInsightFiltersResourceAwsS3BucketOwnerName {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceAwsS3BucketOwnerNameToTerraform(struct?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName): any;
export interface SecurityhubInsightFiltersResourceContainerImageId {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceContainerImageIdToTerraform(struct?: SecurityhubInsightFiltersResourceContainerImageId): any;
export interface SecurityhubInsightFiltersResourceContainerImageName {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceContainerImageNameToTerraform(struct?: SecurityhubInsightFiltersResourceContainerImageName): any;
export interface SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersResourceContainerLaunchedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference | SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange): any;
export declare class SecurityhubInsightFiltersResourceContainerLaunchedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface SecurityhubInsightFiltersResourceContainerLaunchedAt {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersResourceContainerLaunchedAtDateRange;
}
export declare function securityhubInsightFiltersResourceContainerLaunchedAtToTerraform(struct?: SecurityhubInsightFiltersResourceContainerLaunchedAt): any;
export interface SecurityhubInsightFiltersResourceContainerName {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceContainerNameToTerraform(struct?: SecurityhubInsightFiltersResourceContainerName): any;
export interface SecurityhubInsightFiltersResourceDetailsOther {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#key SecurityhubInsight#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceDetailsOtherToTerraform(struct?: SecurityhubInsightFiltersResourceDetailsOther): any;
export interface SecurityhubInsightFiltersResourceId {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceIdToTerraform(struct?: SecurityhubInsightFiltersResourceId): any;
export interface SecurityhubInsightFiltersResourcePartition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourcePartitionToTerraform(struct?: SecurityhubInsightFiltersResourcePartition): any;
export interface SecurityhubInsightFiltersResourceRegion {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceRegionToTerraform(struct?: SecurityhubInsightFiltersResourceRegion): any;
export interface SecurityhubInsightFiltersResourceTags {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#key SecurityhubInsight#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceTagsToTerraform(struct?: SecurityhubInsightFiltersResourceTags): any;
export interface SecurityhubInsightFiltersResourceType {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersResourceTypeToTerraform(struct?: SecurityhubInsightFiltersResourceType): any;
export interface SecurityhubInsightFiltersSeverityLabel {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersSeverityLabelToTerraform(struct?: SecurityhubInsightFiltersSeverityLabel): any;
export interface SecurityhubInsightFiltersSourceUrl {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersSourceUrlToTerraform(struct?: SecurityhubInsightFiltersSourceUrl): any;
export interface SecurityhubInsightFiltersThreatIntelIndicatorCategory {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersThreatIntelIndicatorCategoryToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorCategory): any;
export interface SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference | SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange): any;
export declare class SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAtDateRange;
}
export declare function securityhubInsightFiltersThreatIntelIndicatorLastObservedAtToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt): any;
export interface SecurityhubInsightFiltersThreatIntelIndicatorSource {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersThreatIntelIndicatorSourceToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorSource): any;
export interface SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersThreatIntelIndicatorSourceUrlToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl): any;
export interface SecurityhubInsightFiltersThreatIntelIndicatorType {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersThreatIntelIndicatorTypeToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorType): any;
export interface SecurityhubInsightFiltersThreatIntelIndicatorValue {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersThreatIntelIndicatorValueToTerraform(struct?: SecurityhubInsightFiltersThreatIntelIndicatorValue): any;
export interface SecurityhubInsightFiltersTitle {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersTitleToTerraform(struct?: SecurityhubInsightFiltersTitle): any;
export interface SecurityhubInsightFiltersType {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersTypeToTerraform(struct?: SecurityhubInsightFiltersType): any;
export interface SecurityhubInsightFiltersUpdatedAtDateRange {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#unit SecurityhubInsight#unit}
    */
    readonly unit: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: number;
}
export declare function securityhubInsightFiltersUpdatedAtDateRangeToTerraform(struct?: SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference | SecurityhubInsightFiltersUpdatedAtDateRange): any;
export declare class SecurityhubInsightFiltersUpdatedAtDateRangeOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SecurityhubInsightFiltersUpdatedAtDateRange | undefined;
    set internalValue(value: SecurityhubInsightFiltersUpdatedAtDateRange | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    get valueInput(): number;
}
export interface SecurityhubInsightFiltersUpdatedAt {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#end SecurityhubInsight#end}
    */
    readonly end?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#start SecurityhubInsight#start}
    */
    readonly start?: string;
    /**
    * date_range block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#date_range SecurityhubInsight#date_range}
    */
    readonly dateRange?: SecurityhubInsightFiltersUpdatedAtDateRange;
}
export declare function securityhubInsightFiltersUpdatedAtToTerraform(struct?: SecurityhubInsightFiltersUpdatedAt): any;
export interface SecurityhubInsightFiltersUserDefinedValues {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#key SecurityhubInsight#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersUserDefinedValuesToTerraform(struct?: SecurityhubInsightFiltersUserDefinedValues): any;
export interface SecurityhubInsightFiltersVerificationState {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersVerificationStateToTerraform(struct?: SecurityhubInsightFiltersVerificationState): any;
export interface SecurityhubInsightFiltersWorkflowStatus {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#comparison SecurityhubInsight#comparison}
    */
    readonly comparison: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#value SecurityhubInsight#value}
    */
    readonly value: string;
}
export declare function securityhubInsightFiltersWorkflowStatusToTerraform(struct?: SecurityhubInsightFiltersWorkflowStatus): any;
export interface SecurityhubInsightFilters {
    /**
    * aws_account_id block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#aws_account_id SecurityhubInsight#aws_account_id}
    */
    readonly awsAccountId?: SecurityhubInsightFiltersAwsAccountId[];
    /**
    * company_name block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#company_name SecurityhubInsight#company_name}
    */
    readonly companyName?: SecurityhubInsightFiltersCompanyName[];
    /**
    * compliance_status block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#compliance_status SecurityhubInsight#compliance_status}
    */
    readonly complianceStatus?: SecurityhubInsightFiltersComplianceStatus[];
    /**
    * confidence block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#confidence SecurityhubInsight#confidence}
    */
    readonly confidence?: SecurityhubInsightFiltersConfidence[];
    /**
    * created_at block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#created_at SecurityhubInsight#created_at}
    */
    readonly createdAt?: SecurityhubInsightFiltersCreatedAt[];
    /**
    * criticality block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#criticality SecurityhubInsight#criticality}
    */
    readonly criticality?: SecurityhubInsightFiltersCriticality[];
    /**
    * description block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#description SecurityhubInsight#description}
    */
    readonly description?: SecurityhubInsightFiltersDescription[];
    /**
    * finding_provider_fields_confidence block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_confidence SecurityhubInsight#finding_provider_fields_confidence}
    */
    readonly findingProviderFieldsConfidence?: SecurityhubInsightFiltersFindingProviderFieldsConfidence[];
    /**
    * finding_provider_fields_criticality block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_criticality SecurityhubInsight#finding_provider_fields_criticality}
    */
    readonly findingProviderFieldsCriticality?: SecurityhubInsightFiltersFindingProviderFieldsCriticality[];
    /**
    * finding_provider_fields_related_findings_id block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_related_findings_id SecurityhubInsight#finding_provider_fields_related_findings_id}
    */
    readonly findingProviderFieldsRelatedFindingsId?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[];
    /**
    * finding_provider_fields_related_findings_product_arn block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_related_findings_product_arn SecurityhubInsight#finding_provider_fields_related_findings_product_arn}
    */
    readonly findingProviderFieldsRelatedFindingsProductArn?: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[];
    /**
    * finding_provider_fields_severity_label block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_severity_label SecurityhubInsight#finding_provider_fields_severity_label}
    */
    readonly findingProviderFieldsSeverityLabel?: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[];
    /**
    * finding_provider_fields_severity_original block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_severity_original SecurityhubInsight#finding_provider_fields_severity_original}
    */
    readonly findingProviderFieldsSeverityOriginal?: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[];
    /**
    * finding_provider_fields_types block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#finding_provider_fields_types SecurityhubInsight#finding_provider_fields_types}
    */
    readonly findingProviderFieldsTypes?: SecurityhubInsightFiltersFindingProviderFieldsTypes[];
    /**
    * first_observed_at block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#first_observed_at SecurityhubInsight#first_observed_at}
    */
    readonly firstObservedAt?: SecurityhubInsightFiltersFirstObservedAt[];
    /**
    * generator_id block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#generator_id SecurityhubInsight#generator_id}
    */
    readonly generatorId?: SecurityhubInsightFiltersGeneratorId[];
    /**
    * id block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#id SecurityhubInsight#id}
    */
    readonly id?: SecurityhubInsightFiltersId[];
    /**
    * keyword block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#keyword SecurityhubInsight#keyword}
    */
    readonly keyword?: SecurityhubInsightFiltersKeyword[];
    /**
    * last_observed_at block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#last_observed_at SecurityhubInsight#last_observed_at}
    */
    readonly lastObservedAt?: SecurityhubInsightFiltersLastObservedAt[];
    /**
    * malware_name block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#malware_name SecurityhubInsight#malware_name}
    */
    readonly malwareName?: SecurityhubInsightFiltersMalwareName[];
    /**
    * malware_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#malware_path SecurityhubInsight#malware_path}
    */
    readonly malwarePath?: SecurityhubInsightFiltersMalwarePath[];
    /**
    * malware_state block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#malware_state SecurityhubInsight#malware_state}
    */
    readonly malwareState?: SecurityhubInsightFiltersMalwareState[];
    /**
    * malware_type block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#malware_type SecurityhubInsight#malware_type}
    */
    readonly malwareType?: SecurityhubInsightFiltersMalwareType[];
    /**
    * network_destination_domain block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_destination_domain SecurityhubInsight#network_destination_domain}
    */
    readonly networkDestinationDomain?: SecurityhubInsightFiltersNetworkDestinationDomain[];
    /**
    * network_destination_ipv4 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_destination_ipv4 SecurityhubInsight#network_destination_ipv4}
    */
    readonly networkDestinationIpv4?: SecurityhubInsightFiltersNetworkDestinationIpv4[];
    /**
    * network_destination_ipv6 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_destination_ipv6 SecurityhubInsight#network_destination_ipv6}
    */
    readonly networkDestinationIpv6?: SecurityhubInsightFiltersNetworkDestinationIpv6[];
    /**
    * network_destination_port block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_destination_port SecurityhubInsight#network_destination_port}
    */
    readonly networkDestinationPort?: SecurityhubInsightFiltersNetworkDestinationPort[];
    /**
    * network_direction block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_direction SecurityhubInsight#network_direction}
    */
    readonly networkDirection?: SecurityhubInsightFiltersNetworkDirection[];
    /**
    * network_protocol block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_protocol SecurityhubInsight#network_protocol}
    */
    readonly networkProtocol?: SecurityhubInsightFiltersNetworkProtocol[];
    /**
    * network_source_domain block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_source_domain SecurityhubInsight#network_source_domain}
    */
    readonly networkSourceDomain?: SecurityhubInsightFiltersNetworkSourceDomain[];
    /**
    * network_source_ipv4 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_source_ipv4 SecurityhubInsight#network_source_ipv4}
    */
    readonly networkSourceIpv4?: SecurityhubInsightFiltersNetworkSourceIpv4[];
    /**
    * network_source_ipv6 block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_source_ipv6 SecurityhubInsight#network_source_ipv6}
    */
    readonly networkSourceIpv6?: SecurityhubInsightFiltersNetworkSourceIpv6[];
    /**
    * network_source_mac block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_source_mac SecurityhubInsight#network_source_mac}
    */
    readonly networkSourceMac?: SecurityhubInsightFiltersNetworkSourceMac[];
    /**
    * network_source_port block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#network_source_port SecurityhubInsight#network_source_port}
    */
    readonly networkSourcePort?: SecurityhubInsightFiltersNetworkSourcePort[];
    /**
    * note_text block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#note_text SecurityhubInsight#note_text}
    */
    readonly noteText?: SecurityhubInsightFiltersNoteText[];
    /**
    * note_updated_at block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#note_updated_at SecurityhubInsight#note_updated_at}
    */
    readonly noteUpdatedAt?: SecurityhubInsightFiltersNoteUpdatedAt[];
    /**
    * note_updated_by block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#note_updated_by SecurityhubInsight#note_updated_by}
    */
    readonly noteUpdatedBy?: SecurityhubInsightFiltersNoteUpdatedBy[];
    /**
    * process_launched_at block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_launched_at SecurityhubInsight#process_launched_at}
    */
    readonly processLaunchedAt?: SecurityhubInsightFiltersProcessLaunchedAt[];
    /**
    * process_name block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_name SecurityhubInsight#process_name}
    */
    readonly processName?: SecurityhubInsightFiltersProcessName[];
    /**
    * process_parent_pid block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_parent_pid SecurityhubInsight#process_parent_pid}
    */
    readonly processParentPid?: SecurityhubInsightFiltersProcessParentPid[];
    /**
    * process_path block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_path SecurityhubInsight#process_path}
    */
    readonly processPath?: SecurityhubInsightFiltersProcessPath[];
    /**
    * process_pid block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_pid SecurityhubInsight#process_pid}
    */
    readonly processPid?: SecurityhubInsightFiltersProcessPid[];
    /**
    * process_terminated_at block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#process_terminated_at SecurityhubInsight#process_terminated_at}
    */
    readonly processTerminatedAt?: SecurityhubInsightFiltersProcessTerminatedAt[];
    /**
    * product_arn block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#product_arn SecurityhubInsight#product_arn}
    */
    readonly productArn?: SecurityhubInsightFiltersProductArn[];
    /**
    * product_fields block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#product_fields SecurityhubInsight#product_fields}
    */
    readonly productFields?: SecurityhubInsightFiltersProductFields[];
    /**
    * product_name block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#product_name SecurityhubInsight#product_name}
    */
    readonly productName?: SecurityhubInsightFiltersProductName[];
    /**
    * recommendation_text block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#recommendation_text SecurityhubInsight#recommendation_text}
    */
    readonly recommendationText?: SecurityhubInsightFiltersRecommendationText[];
    /**
    * record_state block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#record_state SecurityhubInsight#record_state}
    */
    readonly recordState?: SecurityhubInsightFiltersRecordState[];
    /**
    * related_findings_id block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#related_findings_id SecurityhubInsight#related_findings_id}
    */
    readonly relatedFindingsId?: SecurityhubInsightFiltersRelatedFindingsId[];
    /**
    * related_findings_product_arn block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#related_findings_product_arn SecurityhubInsight#related_findings_product_arn}
    */
    readonly relatedFindingsProductArn?: SecurityhubInsightFiltersRelatedFindingsProductArn[];
    /**
    * resource_aws_ec2_instance_iam_instance_profile_arn block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_iam_instance_profile_arn SecurityhubInsight#resource_aws_ec2_instance_iam_instance_profile_arn}
    */
    readonly resourceAwsEc2InstanceIamInstanceProfileArn?: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[];
    /**
    * resource_aws_ec2_instance_image_id block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_image_id SecurityhubInsight#resource_aws_ec2_instance_image_id}
    */
    readonly resourceAwsEc2InstanceImageId?: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[];
    /**
    * resource_aws_ec2_instance_ipv4_addresses block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_ipv4_addresses SecurityhubInsight#resource_aws_ec2_instance_ipv4_addresses}
    */
    readonly resourceAwsEc2InstanceIpv4Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[];
    /**
    * resource_aws_ec2_instance_ipv6_addresses block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_ipv6_addresses SecurityhubInsight#resource_aws_ec2_instance_ipv6_addresses}
    */
    readonly resourceAwsEc2InstanceIpv6Addresses?: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[];
    /**
    * resource_aws_ec2_instance_key_name block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_key_name SecurityhubInsight#resource_aws_ec2_instance_key_name}
    */
    readonly resourceAwsEc2InstanceKeyName?: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[];
    /**
    * resource_aws_ec2_instance_launched_at block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_launched_at SecurityhubInsight#resource_aws_ec2_instance_launched_at}
    */
    readonly resourceAwsEc2InstanceLaunchedAt?: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[];
    /**
    * resource_aws_ec2_instance_subnet_id block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_subnet_id SecurityhubInsight#resource_aws_ec2_instance_subnet_id}
    */
    readonly resourceAwsEc2InstanceSubnetId?: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[];
    /**
    * resource_aws_ec2_instance_type block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_type SecurityhubInsight#resource_aws_ec2_instance_type}
    */
    readonly resourceAwsEc2InstanceType?: SecurityhubInsightFiltersResourceAwsEc2InstanceType[];
    /**
    * resource_aws_ec2_instance_vpc_id block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_ec2_instance_vpc_id SecurityhubInsight#resource_aws_ec2_instance_vpc_id}
    */
    readonly resourceAwsEc2InstanceVpcId?: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[];
    /**
    * resource_aws_iam_access_key_created_at block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_iam_access_key_created_at SecurityhubInsight#resource_aws_iam_access_key_created_at}
    */
    readonly resourceAwsIamAccessKeyCreatedAt?: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[];
    /**
    * resource_aws_iam_access_key_status block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_iam_access_key_status SecurityhubInsight#resource_aws_iam_access_key_status}
    */
    readonly resourceAwsIamAccessKeyStatus?: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[];
    /**
    * resource_aws_iam_access_key_user_name block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_iam_access_key_user_name SecurityhubInsight#resource_aws_iam_access_key_user_name}
    */
    readonly resourceAwsIamAccessKeyUserName?: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[];
    /**
    * resource_aws_s3_bucket_owner_id block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_s3_bucket_owner_id SecurityhubInsight#resource_aws_s3_bucket_owner_id}
    */
    readonly resourceAwsS3BucketOwnerId?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[];
    /**
    * resource_aws_s3_bucket_owner_name block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_aws_s3_bucket_owner_name SecurityhubInsight#resource_aws_s3_bucket_owner_name}
    */
    readonly resourceAwsS3BucketOwnerName?: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[];
    /**
    * resource_container_image_id block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_container_image_id SecurityhubInsight#resource_container_image_id}
    */
    readonly resourceContainerImageId?: SecurityhubInsightFiltersResourceContainerImageId[];
    /**
    * resource_container_image_name block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_container_image_name SecurityhubInsight#resource_container_image_name}
    */
    readonly resourceContainerImageName?: SecurityhubInsightFiltersResourceContainerImageName[];
    /**
    * resource_container_launched_at block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_container_launched_at SecurityhubInsight#resource_container_launched_at}
    */
    readonly resourceContainerLaunchedAt?: SecurityhubInsightFiltersResourceContainerLaunchedAt[];
    /**
    * resource_container_name block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_container_name SecurityhubInsight#resource_container_name}
    */
    readonly resourceContainerName?: SecurityhubInsightFiltersResourceContainerName[];
    /**
    * resource_details_other block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_details_other SecurityhubInsight#resource_details_other}
    */
    readonly resourceDetailsOther?: SecurityhubInsightFiltersResourceDetailsOther[];
    /**
    * resource_id block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_id SecurityhubInsight#resource_id}
    */
    readonly resourceId?: SecurityhubInsightFiltersResourceId[];
    /**
    * resource_partition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_partition SecurityhubInsight#resource_partition}
    */
    readonly resourcePartition?: SecurityhubInsightFiltersResourcePartition[];
    /**
    * resource_region block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_region SecurityhubInsight#resource_region}
    */
    readonly resourceRegion?: SecurityhubInsightFiltersResourceRegion[];
    /**
    * resource_tags block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_tags SecurityhubInsight#resource_tags}
    */
    readonly resourceTags?: SecurityhubInsightFiltersResourceTags[];
    /**
    * resource_type block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#resource_type SecurityhubInsight#resource_type}
    */
    readonly resourceType?: SecurityhubInsightFiltersResourceType[];
    /**
    * severity_label block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#severity_label SecurityhubInsight#severity_label}
    */
    readonly severityLabel?: SecurityhubInsightFiltersSeverityLabel[];
    /**
    * source_url block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#source_url SecurityhubInsight#source_url}
    */
    readonly sourceUrl?: SecurityhubInsightFiltersSourceUrl[];
    /**
    * threat_intel_indicator_category block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_category SecurityhubInsight#threat_intel_indicator_category}
    */
    readonly threatIntelIndicatorCategory?: SecurityhubInsightFiltersThreatIntelIndicatorCategory[];
    /**
    * threat_intel_indicator_last_observed_at block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_last_observed_at SecurityhubInsight#threat_intel_indicator_last_observed_at}
    */
    readonly threatIntelIndicatorLastObservedAt?: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[];
    /**
    * threat_intel_indicator_source block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_source SecurityhubInsight#threat_intel_indicator_source}
    */
    readonly threatIntelIndicatorSource?: SecurityhubInsightFiltersThreatIntelIndicatorSource[];
    /**
    * threat_intel_indicator_source_url block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_source_url SecurityhubInsight#threat_intel_indicator_source_url}
    */
    readonly threatIntelIndicatorSourceUrl?: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[];
    /**
    * threat_intel_indicator_type block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_type SecurityhubInsight#threat_intel_indicator_type}
    */
    readonly threatIntelIndicatorType?: SecurityhubInsightFiltersThreatIntelIndicatorType[];
    /**
    * threat_intel_indicator_value block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#threat_intel_indicator_value SecurityhubInsight#threat_intel_indicator_value}
    */
    readonly threatIntelIndicatorValue?: SecurityhubInsightFiltersThreatIntelIndicatorValue[];
    /**
    * title block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#title SecurityhubInsight#title}
    */
    readonly title?: SecurityhubInsightFiltersTitle[];
    /**
    * type block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#type SecurityhubInsight#type}
    */
    readonly type?: SecurityhubInsightFiltersType[];
    /**
    * updated_at block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#updated_at SecurityhubInsight#updated_at}
    */
    readonly updatedAt?: SecurityhubInsightFiltersUpdatedAt[];
    /**
    * user_defined_values block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#user_defined_values SecurityhubInsight#user_defined_values}
    */
    readonly userDefinedValues?: SecurityhubInsightFiltersUserDefinedValues[];
    /**
    * verification_state block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#verification_state SecurityhubInsight#verification_state}
    */
    readonly verificationState?: SecurityhubInsightFiltersVerificationState[];
    /**
    * workflow_status block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html#workflow_status SecurityhubInsight#workflow_status}
    */
    readonly workflowStatus?: SecurityhubInsightFiltersWorkflowStatus[];
}
export declare function securityhubInsightFiltersToTerraform(struct?: SecurityhubInsightFiltersOutputReference | SecurityhubInsightFilters): any;
export declare class SecurityhubInsightFiltersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SecurityhubInsightFilters | undefined;
    set internalValue(value: SecurityhubInsightFilters | undefined);
    private _awsAccountId?;
    get awsAccountId(): SecurityhubInsightFiltersAwsAccountId[];
    set awsAccountId(value: SecurityhubInsightFiltersAwsAccountId[]);
    resetAwsAccountId(): void;
    get awsAccountIdInput(): SecurityhubInsightFiltersAwsAccountId[];
    private _companyName?;
    get companyName(): SecurityhubInsightFiltersCompanyName[];
    set companyName(value: SecurityhubInsightFiltersCompanyName[]);
    resetCompanyName(): void;
    get companyNameInput(): SecurityhubInsightFiltersCompanyName[];
    private _complianceStatus?;
    get complianceStatus(): SecurityhubInsightFiltersComplianceStatus[];
    set complianceStatus(value: SecurityhubInsightFiltersComplianceStatus[]);
    resetComplianceStatus(): void;
    get complianceStatusInput(): SecurityhubInsightFiltersComplianceStatus[];
    private _confidence?;
    get confidence(): SecurityhubInsightFiltersConfidence[];
    set confidence(value: SecurityhubInsightFiltersConfidence[]);
    resetConfidence(): void;
    get confidenceInput(): SecurityhubInsightFiltersConfidence[];
    private _createdAt?;
    get createdAt(): SecurityhubInsightFiltersCreatedAt[];
    set createdAt(value: SecurityhubInsightFiltersCreatedAt[]);
    resetCreatedAt(): void;
    get createdAtInput(): SecurityhubInsightFiltersCreatedAt[];
    private _criticality?;
    get criticality(): SecurityhubInsightFiltersCriticality[];
    set criticality(value: SecurityhubInsightFiltersCriticality[]);
    resetCriticality(): void;
    get criticalityInput(): SecurityhubInsightFiltersCriticality[];
    private _description?;
    get description(): SecurityhubInsightFiltersDescription[];
    set description(value: SecurityhubInsightFiltersDescription[]);
    resetDescription(): void;
    get descriptionInput(): SecurityhubInsightFiltersDescription[];
    private _findingProviderFieldsConfidence?;
    get findingProviderFieldsConfidence(): SecurityhubInsightFiltersFindingProviderFieldsConfidence[];
    set findingProviderFieldsConfidence(value: SecurityhubInsightFiltersFindingProviderFieldsConfidence[]);
    resetFindingProviderFieldsConfidence(): void;
    get findingProviderFieldsConfidenceInput(): SecurityhubInsightFiltersFindingProviderFieldsConfidence[];
    private _findingProviderFieldsCriticality?;
    get findingProviderFieldsCriticality(): SecurityhubInsightFiltersFindingProviderFieldsCriticality[];
    set findingProviderFieldsCriticality(value: SecurityhubInsightFiltersFindingProviderFieldsCriticality[]);
    resetFindingProviderFieldsCriticality(): void;
    get findingProviderFieldsCriticalityInput(): SecurityhubInsightFiltersFindingProviderFieldsCriticality[];
    private _findingProviderFieldsRelatedFindingsId?;
    get findingProviderFieldsRelatedFindingsId(): SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[];
    set findingProviderFieldsRelatedFindingsId(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[]);
    resetFindingProviderFieldsRelatedFindingsId(): void;
    get findingProviderFieldsRelatedFindingsIdInput(): SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsId[];
    private _findingProviderFieldsRelatedFindingsProductArn?;
    get findingProviderFieldsRelatedFindingsProductArn(): SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[];
    set findingProviderFieldsRelatedFindingsProductArn(value: SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[]);
    resetFindingProviderFieldsRelatedFindingsProductArn(): void;
    get findingProviderFieldsRelatedFindingsProductArnInput(): SecurityhubInsightFiltersFindingProviderFieldsRelatedFindingsProductArn[];
    private _findingProviderFieldsSeverityLabel?;
    get findingProviderFieldsSeverityLabel(): SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[];
    set findingProviderFieldsSeverityLabel(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[]);
    resetFindingProviderFieldsSeverityLabel(): void;
    get findingProviderFieldsSeverityLabelInput(): SecurityhubInsightFiltersFindingProviderFieldsSeverityLabel[];
    private _findingProviderFieldsSeverityOriginal?;
    get findingProviderFieldsSeverityOriginal(): SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[];
    set findingProviderFieldsSeverityOriginal(value: SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[]);
    resetFindingProviderFieldsSeverityOriginal(): void;
    get findingProviderFieldsSeverityOriginalInput(): SecurityhubInsightFiltersFindingProviderFieldsSeverityOriginal[];
    private _findingProviderFieldsTypes?;
    get findingProviderFieldsTypes(): SecurityhubInsightFiltersFindingProviderFieldsTypes[];
    set findingProviderFieldsTypes(value: SecurityhubInsightFiltersFindingProviderFieldsTypes[]);
    resetFindingProviderFieldsTypes(): void;
    get findingProviderFieldsTypesInput(): SecurityhubInsightFiltersFindingProviderFieldsTypes[];
    private _firstObservedAt?;
    get firstObservedAt(): SecurityhubInsightFiltersFirstObservedAt[];
    set firstObservedAt(value: SecurityhubInsightFiltersFirstObservedAt[]);
    resetFirstObservedAt(): void;
    get firstObservedAtInput(): SecurityhubInsightFiltersFirstObservedAt[];
    private _generatorId?;
    get generatorId(): SecurityhubInsightFiltersGeneratorId[];
    set generatorId(value: SecurityhubInsightFiltersGeneratorId[]);
    resetGeneratorId(): void;
    get generatorIdInput(): SecurityhubInsightFiltersGeneratorId[];
    private _id?;
    get id(): SecurityhubInsightFiltersId[];
    set id(value: SecurityhubInsightFiltersId[]);
    resetId(): void;
    get idInput(): SecurityhubInsightFiltersId[];
    private _keyword?;
    get keyword(): SecurityhubInsightFiltersKeyword[];
    set keyword(value: SecurityhubInsightFiltersKeyword[]);
    resetKeyword(): void;
    get keywordInput(): SecurityhubInsightFiltersKeyword[];
    private _lastObservedAt?;
    get lastObservedAt(): SecurityhubInsightFiltersLastObservedAt[];
    set lastObservedAt(value: SecurityhubInsightFiltersLastObservedAt[]);
    resetLastObservedAt(): void;
    get lastObservedAtInput(): SecurityhubInsightFiltersLastObservedAt[];
    private _malwareName?;
    get malwareName(): SecurityhubInsightFiltersMalwareName[];
    set malwareName(value: SecurityhubInsightFiltersMalwareName[]);
    resetMalwareName(): void;
    get malwareNameInput(): SecurityhubInsightFiltersMalwareName[];
    private _malwarePath?;
    get malwarePath(): SecurityhubInsightFiltersMalwarePath[];
    set malwarePath(value: SecurityhubInsightFiltersMalwarePath[]);
    resetMalwarePath(): void;
    get malwarePathInput(): SecurityhubInsightFiltersMalwarePath[];
    private _malwareState?;
    get malwareState(): SecurityhubInsightFiltersMalwareState[];
    set malwareState(value: SecurityhubInsightFiltersMalwareState[]);
    resetMalwareState(): void;
    get malwareStateInput(): SecurityhubInsightFiltersMalwareState[];
    private _malwareType?;
    get malwareType(): SecurityhubInsightFiltersMalwareType[];
    set malwareType(value: SecurityhubInsightFiltersMalwareType[]);
    resetMalwareType(): void;
    get malwareTypeInput(): SecurityhubInsightFiltersMalwareType[];
    private _networkDestinationDomain?;
    get networkDestinationDomain(): SecurityhubInsightFiltersNetworkDestinationDomain[];
    set networkDestinationDomain(value: SecurityhubInsightFiltersNetworkDestinationDomain[]);
    resetNetworkDestinationDomain(): void;
    get networkDestinationDomainInput(): SecurityhubInsightFiltersNetworkDestinationDomain[];
    private _networkDestinationIpv4?;
    get networkDestinationIpv4(): SecurityhubInsightFiltersNetworkDestinationIpv4[];
    set networkDestinationIpv4(value: SecurityhubInsightFiltersNetworkDestinationIpv4[]);
    resetNetworkDestinationIpv4(): void;
    get networkDestinationIpv4Input(): SecurityhubInsightFiltersNetworkDestinationIpv4[];
    private _networkDestinationIpv6?;
    get networkDestinationIpv6(): SecurityhubInsightFiltersNetworkDestinationIpv6[];
    set networkDestinationIpv6(value: SecurityhubInsightFiltersNetworkDestinationIpv6[]);
    resetNetworkDestinationIpv6(): void;
    get networkDestinationIpv6Input(): SecurityhubInsightFiltersNetworkDestinationIpv6[];
    private _networkDestinationPort?;
    get networkDestinationPort(): SecurityhubInsightFiltersNetworkDestinationPort[];
    set networkDestinationPort(value: SecurityhubInsightFiltersNetworkDestinationPort[]);
    resetNetworkDestinationPort(): void;
    get networkDestinationPortInput(): SecurityhubInsightFiltersNetworkDestinationPort[];
    private _networkDirection?;
    get networkDirection(): SecurityhubInsightFiltersNetworkDirection[];
    set networkDirection(value: SecurityhubInsightFiltersNetworkDirection[]);
    resetNetworkDirection(): void;
    get networkDirectionInput(): SecurityhubInsightFiltersNetworkDirection[];
    private _networkProtocol?;
    get networkProtocol(): SecurityhubInsightFiltersNetworkProtocol[];
    set networkProtocol(value: SecurityhubInsightFiltersNetworkProtocol[]);
    resetNetworkProtocol(): void;
    get networkProtocolInput(): SecurityhubInsightFiltersNetworkProtocol[];
    private _networkSourceDomain?;
    get networkSourceDomain(): SecurityhubInsightFiltersNetworkSourceDomain[];
    set networkSourceDomain(value: SecurityhubInsightFiltersNetworkSourceDomain[]);
    resetNetworkSourceDomain(): void;
    get networkSourceDomainInput(): SecurityhubInsightFiltersNetworkSourceDomain[];
    private _networkSourceIpv4?;
    get networkSourceIpv4(): SecurityhubInsightFiltersNetworkSourceIpv4[];
    set networkSourceIpv4(value: SecurityhubInsightFiltersNetworkSourceIpv4[]);
    resetNetworkSourceIpv4(): void;
    get networkSourceIpv4Input(): SecurityhubInsightFiltersNetworkSourceIpv4[];
    private _networkSourceIpv6?;
    get networkSourceIpv6(): SecurityhubInsightFiltersNetworkSourceIpv6[];
    set networkSourceIpv6(value: SecurityhubInsightFiltersNetworkSourceIpv6[]);
    resetNetworkSourceIpv6(): void;
    get networkSourceIpv6Input(): SecurityhubInsightFiltersNetworkSourceIpv6[];
    private _networkSourceMac?;
    get networkSourceMac(): SecurityhubInsightFiltersNetworkSourceMac[];
    set networkSourceMac(value: SecurityhubInsightFiltersNetworkSourceMac[]);
    resetNetworkSourceMac(): void;
    get networkSourceMacInput(): SecurityhubInsightFiltersNetworkSourceMac[];
    private _networkSourcePort?;
    get networkSourcePort(): SecurityhubInsightFiltersNetworkSourcePort[];
    set networkSourcePort(value: SecurityhubInsightFiltersNetworkSourcePort[]);
    resetNetworkSourcePort(): void;
    get networkSourcePortInput(): SecurityhubInsightFiltersNetworkSourcePort[];
    private _noteText?;
    get noteText(): SecurityhubInsightFiltersNoteText[];
    set noteText(value: SecurityhubInsightFiltersNoteText[]);
    resetNoteText(): void;
    get noteTextInput(): SecurityhubInsightFiltersNoteText[];
    private _noteUpdatedAt?;
    get noteUpdatedAt(): SecurityhubInsightFiltersNoteUpdatedAt[];
    set noteUpdatedAt(value: SecurityhubInsightFiltersNoteUpdatedAt[]);
    resetNoteUpdatedAt(): void;
    get noteUpdatedAtInput(): SecurityhubInsightFiltersNoteUpdatedAt[];
    private _noteUpdatedBy?;
    get noteUpdatedBy(): SecurityhubInsightFiltersNoteUpdatedBy[];
    set noteUpdatedBy(value: SecurityhubInsightFiltersNoteUpdatedBy[]);
    resetNoteUpdatedBy(): void;
    get noteUpdatedByInput(): SecurityhubInsightFiltersNoteUpdatedBy[];
    private _processLaunchedAt?;
    get processLaunchedAt(): SecurityhubInsightFiltersProcessLaunchedAt[];
    set processLaunchedAt(value: SecurityhubInsightFiltersProcessLaunchedAt[]);
    resetProcessLaunchedAt(): void;
    get processLaunchedAtInput(): SecurityhubInsightFiltersProcessLaunchedAt[];
    private _processName?;
    get processName(): SecurityhubInsightFiltersProcessName[];
    set processName(value: SecurityhubInsightFiltersProcessName[]);
    resetProcessName(): void;
    get processNameInput(): SecurityhubInsightFiltersProcessName[];
    private _processParentPid?;
    get processParentPid(): SecurityhubInsightFiltersProcessParentPid[];
    set processParentPid(value: SecurityhubInsightFiltersProcessParentPid[]);
    resetProcessParentPid(): void;
    get processParentPidInput(): SecurityhubInsightFiltersProcessParentPid[];
    private _processPath?;
    get processPath(): SecurityhubInsightFiltersProcessPath[];
    set processPath(value: SecurityhubInsightFiltersProcessPath[]);
    resetProcessPath(): void;
    get processPathInput(): SecurityhubInsightFiltersProcessPath[];
    private _processPid?;
    get processPid(): SecurityhubInsightFiltersProcessPid[];
    set processPid(value: SecurityhubInsightFiltersProcessPid[]);
    resetProcessPid(): void;
    get processPidInput(): SecurityhubInsightFiltersProcessPid[];
    private _processTerminatedAt?;
    get processTerminatedAt(): SecurityhubInsightFiltersProcessTerminatedAt[];
    set processTerminatedAt(value: SecurityhubInsightFiltersProcessTerminatedAt[]);
    resetProcessTerminatedAt(): void;
    get processTerminatedAtInput(): SecurityhubInsightFiltersProcessTerminatedAt[];
    private _productArn?;
    get productArn(): SecurityhubInsightFiltersProductArn[];
    set productArn(value: SecurityhubInsightFiltersProductArn[]);
    resetProductArn(): void;
    get productArnInput(): SecurityhubInsightFiltersProductArn[];
    private _productFields?;
    get productFields(): SecurityhubInsightFiltersProductFields[];
    set productFields(value: SecurityhubInsightFiltersProductFields[]);
    resetProductFields(): void;
    get productFieldsInput(): SecurityhubInsightFiltersProductFields[];
    private _productName?;
    get productName(): SecurityhubInsightFiltersProductName[];
    set productName(value: SecurityhubInsightFiltersProductName[]);
    resetProductName(): void;
    get productNameInput(): SecurityhubInsightFiltersProductName[];
    private _recommendationText?;
    get recommendationText(): SecurityhubInsightFiltersRecommendationText[];
    set recommendationText(value: SecurityhubInsightFiltersRecommendationText[]);
    resetRecommendationText(): void;
    get recommendationTextInput(): SecurityhubInsightFiltersRecommendationText[];
    private _recordState?;
    get recordState(): SecurityhubInsightFiltersRecordState[];
    set recordState(value: SecurityhubInsightFiltersRecordState[]);
    resetRecordState(): void;
    get recordStateInput(): SecurityhubInsightFiltersRecordState[];
    private _relatedFindingsId?;
    get relatedFindingsId(): SecurityhubInsightFiltersRelatedFindingsId[];
    set relatedFindingsId(value: SecurityhubInsightFiltersRelatedFindingsId[]);
    resetRelatedFindingsId(): void;
    get relatedFindingsIdInput(): SecurityhubInsightFiltersRelatedFindingsId[];
    private _relatedFindingsProductArn?;
    get relatedFindingsProductArn(): SecurityhubInsightFiltersRelatedFindingsProductArn[];
    set relatedFindingsProductArn(value: SecurityhubInsightFiltersRelatedFindingsProductArn[]);
    resetRelatedFindingsProductArn(): void;
    get relatedFindingsProductArnInput(): SecurityhubInsightFiltersRelatedFindingsProductArn[];
    private _resourceAwsEc2InstanceIamInstanceProfileArn?;
    get resourceAwsEc2InstanceIamInstanceProfileArn(): SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[];
    set resourceAwsEc2InstanceIamInstanceProfileArn(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[]);
    resetResourceAwsEc2InstanceIamInstanceProfileArn(): void;
    get resourceAwsEc2InstanceIamInstanceProfileArnInput(): SecurityhubInsightFiltersResourceAwsEc2InstanceIamInstanceProfileArn[];
    private _resourceAwsEc2InstanceImageId?;
    get resourceAwsEc2InstanceImageId(): SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[];
    set resourceAwsEc2InstanceImageId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[]);
    resetResourceAwsEc2InstanceImageId(): void;
    get resourceAwsEc2InstanceImageIdInput(): SecurityhubInsightFiltersResourceAwsEc2InstanceImageId[];
    private _resourceAwsEc2InstanceIpv4Addresses?;
    get resourceAwsEc2InstanceIpv4Addresses(): SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[];
    set resourceAwsEc2InstanceIpv4Addresses(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[]);
    resetResourceAwsEc2InstanceIpv4Addresses(): void;
    get resourceAwsEc2InstanceIpv4AddressesInput(): SecurityhubInsightFiltersResourceAwsEc2InstanceIpv4Addresses[];
    private _resourceAwsEc2InstanceIpv6Addresses?;
    get resourceAwsEc2InstanceIpv6Addresses(): SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[];
    set resourceAwsEc2InstanceIpv6Addresses(value: SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[]);
    resetResourceAwsEc2InstanceIpv6Addresses(): void;
    get resourceAwsEc2InstanceIpv6AddressesInput(): SecurityhubInsightFiltersResourceAwsEc2InstanceIpv6Addresses[];
    private _resourceAwsEc2InstanceKeyName?;
    get resourceAwsEc2InstanceKeyName(): SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[];
    set resourceAwsEc2InstanceKeyName(value: SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[]);
    resetResourceAwsEc2InstanceKeyName(): void;
    get resourceAwsEc2InstanceKeyNameInput(): SecurityhubInsightFiltersResourceAwsEc2InstanceKeyName[];
    private _resourceAwsEc2InstanceLaunchedAt?;
    get resourceAwsEc2InstanceLaunchedAt(): SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[];
    set resourceAwsEc2InstanceLaunchedAt(value: SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[]);
    resetResourceAwsEc2InstanceLaunchedAt(): void;
    get resourceAwsEc2InstanceLaunchedAtInput(): SecurityhubInsightFiltersResourceAwsEc2InstanceLaunchedAt[];
    private _resourceAwsEc2InstanceSubnetId?;
    get resourceAwsEc2InstanceSubnetId(): SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[];
    set resourceAwsEc2InstanceSubnetId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[]);
    resetResourceAwsEc2InstanceSubnetId(): void;
    get resourceAwsEc2InstanceSubnetIdInput(): SecurityhubInsightFiltersResourceAwsEc2InstanceSubnetId[];
    private _resourceAwsEc2InstanceType?;
    get resourceAwsEc2InstanceType(): SecurityhubInsightFiltersResourceAwsEc2InstanceType[];
    set resourceAwsEc2InstanceType(value: SecurityhubInsightFiltersResourceAwsEc2InstanceType[]);
    resetResourceAwsEc2InstanceType(): void;
    get resourceAwsEc2InstanceTypeInput(): SecurityhubInsightFiltersResourceAwsEc2InstanceType[];
    private _resourceAwsEc2InstanceVpcId?;
    get resourceAwsEc2InstanceVpcId(): SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[];
    set resourceAwsEc2InstanceVpcId(value: SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[]);
    resetResourceAwsEc2InstanceVpcId(): void;
    get resourceAwsEc2InstanceVpcIdInput(): SecurityhubInsightFiltersResourceAwsEc2InstanceVpcId[];
    private _resourceAwsIamAccessKeyCreatedAt?;
    get resourceAwsIamAccessKeyCreatedAt(): SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[];
    set resourceAwsIamAccessKeyCreatedAt(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[]);
    resetResourceAwsIamAccessKeyCreatedAt(): void;
    get resourceAwsIamAccessKeyCreatedAtInput(): SecurityhubInsightFiltersResourceAwsIamAccessKeyCreatedAt[];
    private _resourceAwsIamAccessKeyStatus?;
    get resourceAwsIamAccessKeyStatus(): SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[];
    set resourceAwsIamAccessKeyStatus(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[]);
    resetResourceAwsIamAccessKeyStatus(): void;
    get resourceAwsIamAccessKeyStatusInput(): SecurityhubInsightFiltersResourceAwsIamAccessKeyStatus[];
    private _resourceAwsIamAccessKeyUserName?;
    get resourceAwsIamAccessKeyUserName(): SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[];
    set resourceAwsIamAccessKeyUserName(value: SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[]);
    resetResourceAwsIamAccessKeyUserName(): void;
    get resourceAwsIamAccessKeyUserNameInput(): SecurityhubInsightFiltersResourceAwsIamAccessKeyUserName[];
    private _resourceAwsS3BucketOwnerId?;
    get resourceAwsS3BucketOwnerId(): SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[];
    set resourceAwsS3BucketOwnerId(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[]);
    resetResourceAwsS3BucketOwnerId(): void;
    get resourceAwsS3BucketOwnerIdInput(): SecurityhubInsightFiltersResourceAwsS3BucketOwnerId[];
    private _resourceAwsS3BucketOwnerName?;
    get resourceAwsS3BucketOwnerName(): SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[];
    set resourceAwsS3BucketOwnerName(value: SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[]);
    resetResourceAwsS3BucketOwnerName(): void;
    get resourceAwsS3BucketOwnerNameInput(): SecurityhubInsightFiltersResourceAwsS3BucketOwnerName[];
    private _resourceContainerImageId?;
    get resourceContainerImageId(): SecurityhubInsightFiltersResourceContainerImageId[];
    set resourceContainerImageId(value: SecurityhubInsightFiltersResourceContainerImageId[]);
    resetResourceContainerImageId(): void;
    get resourceContainerImageIdInput(): SecurityhubInsightFiltersResourceContainerImageId[];
    private _resourceContainerImageName?;
    get resourceContainerImageName(): SecurityhubInsightFiltersResourceContainerImageName[];
    set resourceContainerImageName(value: SecurityhubInsightFiltersResourceContainerImageName[]);
    resetResourceContainerImageName(): void;
    get resourceContainerImageNameInput(): SecurityhubInsightFiltersResourceContainerImageName[];
    private _resourceContainerLaunchedAt?;
    get resourceContainerLaunchedAt(): SecurityhubInsightFiltersResourceContainerLaunchedAt[];
    set resourceContainerLaunchedAt(value: SecurityhubInsightFiltersResourceContainerLaunchedAt[]);
    resetResourceContainerLaunchedAt(): void;
    get resourceContainerLaunchedAtInput(): SecurityhubInsightFiltersResourceContainerLaunchedAt[];
    private _resourceContainerName?;
    get resourceContainerName(): SecurityhubInsightFiltersResourceContainerName[];
    set resourceContainerName(value: SecurityhubInsightFiltersResourceContainerName[]);
    resetResourceContainerName(): void;
    get resourceContainerNameInput(): SecurityhubInsightFiltersResourceContainerName[];
    private _resourceDetailsOther?;
    get resourceDetailsOther(): SecurityhubInsightFiltersResourceDetailsOther[];
    set resourceDetailsOther(value: SecurityhubInsightFiltersResourceDetailsOther[]);
    resetResourceDetailsOther(): void;
    get resourceDetailsOtherInput(): SecurityhubInsightFiltersResourceDetailsOther[];
    private _resourceId?;
    get resourceId(): SecurityhubInsightFiltersResourceId[];
    set resourceId(value: SecurityhubInsightFiltersResourceId[]);
    resetResourceId(): void;
    get resourceIdInput(): SecurityhubInsightFiltersResourceId[];
    private _resourcePartition?;
    get resourcePartition(): SecurityhubInsightFiltersResourcePartition[];
    set resourcePartition(value: SecurityhubInsightFiltersResourcePartition[]);
    resetResourcePartition(): void;
    get resourcePartitionInput(): SecurityhubInsightFiltersResourcePartition[];
    private _resourceRegion?;
    get resourceRegion(): SecurityhubInsightFiltersResourceRegion[];
    set resourceRegion(value: SecurityhubInsightFiltersResourceRegion[]);
    resetResourceRegion(): void;
    get resourceRegionInput(): SecurityhubInsightFiltersResourceRegion[];
    private _resourceTags?;
    get resourceTags(): SecurityhubInsightFiltersResourceTags[];
    set resourceTags(value: SecurityhubInsightFiltersResourceTags[]);
    resetResourceTags(): void;
    get resourceTagsInput(): SecurityhubInsightFiltersResourceTags[];
    private _resourceType?;
    get resourceType(): SecurityhubInsightFiltersResourceType[];
    set resourceType(value: SecurityhubInsightFiltersResourceType[]);
    resetResourceType(): void;
    get resourceTypeInput(): SecurityhubInsightFiltersResourceType[];
    private _severityLabel?;
    get severityLabel(): SecurityhubInsightFiltersSeverityLabel[];
    set severityLabel(value: SecurityhubInsightFiltersSeverityLabel[]);
    resetSeverityLabel(): void;
    get severityLabelInput(): SecurityhubInsightFiltersSeverityLabel[];
    private _sourceUrl?;
    get sourceUrl(): SecurityhubInsightFiltersSourceUrl[];
    set sourceUrl(value: SecurityhubInsightFiltersSourceUrl[]);
    resetSourceUrl(): void;
    get sourceUrlInput(): SecurityhubInsightFiltersSourceUrl[];
    private _threatIntelIndicatorCategory?;
    get threatIntelIndicatorCategory(): SecurityhubInsightFiltersThreatIntelIndicatorCategory[];
    set threatIntelIndicatorCategory(value: SecurityhubInsightFiltersThreatIntelIndicatorCategory[]);
    resetThreatIntelIndicatorCategory(): void;
    get threatIntelIndicatorCategoryInput(): SecurityhubInsightFiltersThreatIntelIndicatorCategory[];
    private _threatIntelIndicatorLastObservedAt?;
    get threatIntelIndicatorLastObservedAt(): SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[];
    set threatIntelIndicatorLastObservedAt(value: SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[]);
    resetThreatIntelIndicatorLastObservedAt(): void;
    get threatIntelIndicatorLastObservedAtInput(): SecurityhubInsightFiltersThreatIntelIndicatorLastObservedAt[];
    private _threatIntelIndicatorSource?;
    get threatIntelIndicatorSource(): SecurityhubInsightFiltersThreatIntelIndicatorSource[];
    set threatIntelIndicatorSource(value: SecurityhubInsightFiltersThreatIntelIndicatorSource[]);
    resetThreatIntelIndicatorSource(): void;
    get threatIntelIndicatorSourceInput(): SecurityhubInsightFiltersThreatIntelIndicatorSource[];
    private _threatIntelIndicatorSourceUrl?;
    get threatIntelIndicatorSourceUrl(): SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[];
    set threatIntelIndicatorSourceUrl(value: SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[]);
    resetThreatIntelIndicatorSourceUrl(): void;
    get threatIntelIndicatorSourceUrlInput(): SecurityhubInsightFiltersThreatIntelIndicatorSourceUrl[];
    private _threatIntelIndicatorType?;
    get threatIntelIndicatorType(): SecurityhubInsightFiltersThreatIntelIndicatorType[];
    set threatIntelIndicatorType(value: SecurityhubInsightFiltersThreatIntelIndicatorType[]);
    resetThreatIntelIndicatorType(): void;
    get threatIntelIndicatorTypeInput(): SecurityhubInsightFiltersThreatIntelIndicatorType[];
    private _threatIntelIndicatorValue?;
    get threatIntelIndicatorValue(): SecurityhubInsightFiltersThreatIntelIndicatorValue[];
    set threatIntelIndicatorValue(value: SecurityhubInsightFiltersThreatIntelIndicatorValue[]);
    resetThreatIntelIndicatorValue(): void;
    get threatIntelIndicatorValueInput(): SecurityhubInsightFiltersThreatIntelIndicatorValue[];
    private _title?;
    get title(): SecurityhubInsightFiltersTitle[];
    set title(value: SecurityhubInsightFiltersTitle[]);
    resetTitle(): void;
    get titleInput(): SecurityhubInsightFiltersTitle[];
    private _type?;
    get type(): SecurityhubInsightFiltersType[];
    set type(value: SecurityhubInsightFiltersType[]);
    resetType(): void;
    get typeInput(): SecurityhubInsightFiltersType[];
    private _updatedAt?;
    get updatedAt(): SecurityhubInsightFiltersUpdatedAt[];
    set updatedAt(value: SecurityhubInsightFiltersUpdatedAt[]);
    resetUpdatedAt(): void;
    get updatedAtInput(): SecurityhubInsightFiltersUpdatedAt[];
    private _userDefinedValues?;
    get userDefinedValues(): SecurityhubInsightFiltersUserDefinedValues[];
    set userDefinedValues(value: SecurityhubInsightFiltersUserDefinedValues[]);
    resetUserDefinedValues(): void;
    get userDefinedValuesInput(): SecurityhubInsightFiltersUserDefinedValues[];
    private _verificationState?;
    get verificationState(): SecurityhubInsightFiltersVerificationState[];
    set verificationState(value: SecurityhubInsightFiltersVerificationState[]);
    resetVerificationState(): void;
    get verificationStateInput(): SecurityhubInsightFiltersVerificationState[];
    private _workflowStatus?;
    get workflowStatus(): SecurityhubInsightFiltersWorkflowStatus[];
    set workflowStatus(value: SecurityhubInsightFiltersWorkflowStatus[]);
    resetWorkflowStatus(): void;
    get workflowStatusInput(): SecurityhubInsightFiltersWorkflowStatus[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html aws_securityhub_insight}
*/
export declare class SecurityhubInsight extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/securityhub_insight.html aws_securityhub_insight} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SecurityhubInsightConfig
    */
    constructor(scope: Construct, id: string, config: SecurityhubInsightConfig);
    get arn(): string;
    private _groupByAttribute?;
    get groupByAttribute(): string;
    set groupByAttribute(value: string);
    get groupByAttributeInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _filters;
    get filters(): SecurityhubInsightFiltersOutputReference;
    putFilters(value: SecurityhubInsightFilters): void;
    get filtersInput(): SecurityhubInsightFilters;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=securityhub-insight.d.ts.map