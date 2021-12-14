// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingListComplianceDetails extends cdktf.ComplexComputedList {
    // compliance_status - computed: true, optional: false, required: false
    get complianceStatus() {
        return this.getBooleanAttribute('compliance_status');
    }
    // keys_with_noncompliant_values - computed: true, optional: false, required: false
    get keysWithNoncompliantValues() {
        return this.getListAttribute('keys_with_noncompliant_values');
    }
    // non_compliant_keys - computed: true, optional: false, required: false
    get nonCompliantKeys() {
        return this.getListAttribute('non_compliant_keys');
    }
}
export class DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList extends cdktf.ComplexComputedList {
    // compliance_details - computed: true, optional: false, required: false
    get complianceDetails() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('compliance_details');
    }
    // resource_arn - computed: true, optional: false, required: false
    get resourceArn() {
        return this.getStringAttribute('resource_arn');
    }
    // tags - computed: true, optional: false, required: false
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
}
export function dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        key: cdktf.stringToTerraform(struct.key),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html aws_resourcegroupstaggingapi_resources}
*/
export class DataAwsResourcegroupstaggingapiResources extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_resourcegroupstaggingapi_resources";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/resourcegroupstaggingapi_resources.html aws_resourcegroupstaggingapi_resources} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsResourcegroupstaggingapiResourcesConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_resourcegroupstaggingapi_resources',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._excludeCompliantResources = config.excludeCompliantResources;
        this._includeComplianceDetails = config.includeComplianceDetails;
        this._resourceArnList = config.resourceArnList;
        this._resourceTypeFilters = config.resourceTypeFilters;
        this._tagFilter = config.tagFilter;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // exclude_compliant_resources - computed: false, optional: true, required: false
    _excludeCompliantResources;
    get excludeCompliantResources() {
        return this.getBooleanAttribute('exclude_compliant_resources');
    }
    set excludeCompliantResources(value) {
        this._excludeCompliantResources = value;
    }
    resetExcludeCompliantResources() {
        this._excludeCompliantResources = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeCompliantResourcesInput() {
        return this._excludeCompliantResources;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // include_compliance_details - computed: false, optional: true, required: false
    _includeComplianceDetails;
    get includeComplianceDetails() {
        return this.getBooleanAttribute('include_compliance_details');
    }
    set includeComplianceDetails(value) {
        this._includeComplianceDetails = value;
    }
    resetIncludeComplianceDetails() {
        this._includeComplianceDetails = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeComplianceDetailsInput() {
        return this._includeComplianceDetails;
    }
    // resource_arn_list - computed: false, optional: true, required: false
    _resourceArnList;
    get resourceArnList() {
        return this.getListAttribute('resource_arn_list');
    }
    set resourceArnList(value) {
        this._resourceArnList = value;
    }
    resetResourceArnList() {
        this._resourceArnList = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceArnListInput() {
        return this._resourceArnList;
    }
    // resource_tag_mapping_list - computed: true, optional: false, required: false
    resourceTagMappingList(index) {
        return new DataAwsResourcegroupstaggingapiResourcesResourceTagMappingList(this, 'resource_tag_mapping_list', index);
    }
    // resource_type_filters - computed: false, optional: true, required: false
    _resourceTypeFilters;
    get resourceTypeFilters() {
        return this.getListAttribute('resource_type_filters');
    }
    set resourceTypeFilters(value) {
        this._resourceTypeFilters = value;
    }
    resetResourceTypeFilters() {
        this._resourceTypeFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceTypeFiltersInput() {
        return this._resourceTypeFilters;
    }
    // tag_filter - computed: false, optional: true, required: false
    _tagFilter;
    get tagFilter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tag_filter');
    }
    set tagFilter(value) {
        this._tagFilter = value;
    }
    resetTagFilter() {
        this._tagFilter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagFilterInput() {
        return this._tagFilter;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            exclude_compliant_resources: cdktf.booleanToTerraform(this._excludeCompliantResources),
            include_compliance_details: cdktf.booleanToTerraform(this._includeComplianceDetails),
            resource_arn_list: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceArnList),
            resource_type_filters: cdktf.listMapper(cdktf.stringToTerraform)(this._resourceTypeFilters),
            tag_filter: cdktf.listMapper(dataAwsResourcegroupstaggingapiResourcesTagFilterToTerraform)(this._tagFilter),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtcmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpLXJlc291cmNlcy5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiZGF0YS1hd3MtcmVzb3VyY2Vncm91cHN0YWdnaW5nYXBpLXJlc291cmNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUE2Qi9CLE1BQU0sT0FBTywrRUFBZ0YsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTVILHVFQUF1RTtJQUN2RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBUSxDQUFDO0lBQzlELENBQUM7SUFFRCxtRkFBbUY7SUFDbkYsSUFBVywwQkFBMEI7UUFDbkMsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLElBQVcsZ0JBQWdCO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDckQsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLDhEQUErRCxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFM0csd0VBQXdFO0lBQ3hFLElBQVcsaUJBQWlCO1FBQzFCLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxvQkFBb0IsQ0FBUSxDQUFDO0lBQ3JFLENBQUM7SUFFRCxrRUFBa0U7SUFDbEUsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2Isb0RBQW9EO1FBQ3BELE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBUSxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQVlELE1BQU0sVUFBVSw0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