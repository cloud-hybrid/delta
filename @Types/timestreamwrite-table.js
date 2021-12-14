// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function timestreamwriteTableRetentionPropertiesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        magnetic_store_retention_period_in_days: cdktf.numberToTerraform(struct.magneticStoreRetentionPeriodInDays),
        memory_store_retention_period_in_hours: cdktf.numberToTerraform(struct.memoryStoreRetentionPeriodInHours),
    };
}
export class TimestreamwriteTableRetentionPropertiesOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._magneticStoreRetentionPeriodInDays) {
            hasAnyValues = true;
            internalValueResult.magneticStoreRetentionPeriodInDays = this._magneticStoreRetentionPeriodInDays;
        }
        if (this._memoryStoreRetentionPeriodInHours) {
            hasAnyValues = true;
            internalValueResult.memoryStoreRetentionPeriodInHours = this._memoryStoreRetentionPeriodInHours;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._magneticStoreRetentionPeriodInDays = undefined;
            this._memoryStoreRetentionPeriodInHours = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._magneticStoreRetentionPeriodInDays = value.magneticStoreRetentionPeriodInDays;
            this._memoryStoreRetentionPeriodInHours = value.memoryStoreRetentionPeriodInHours;
        }
    }
    // magnetic_store_retention_period_in_days - computed: false, optional: false, required: true
    _magneticStoreRetentionPeriodInDays;
    get magneticStoreRetentionPeriodInDays() {
        return this.getNumberAttribute('magnetic_store_retention_period_in_days');
    }
    set magneticStoreRetentionPeriodInDays(value) {
        this._magneticStoreRetentionPeriodInDays = value;
    }
    // Temporarily expose input value. Use with caution.
    get magneticStoreRetentionPeriodInDaysInput() {
        return this._magneticStoreRetentionPeriodInDays;
    }
    // memory_store_retention_period_in_hours - computed: false, optional: false, required: true
    _memoryStoreRetentionPeriodInHours;
    get memoryStoreRetentionPeriodInHours() {
        return this.getNumberAttribute('memory_store_retention_period_in_hours');
    }
    set memoryStoreRetentionPeriodInHours(value) {
        this._memoryStoreRetentionPeriodInHours = value;
    }
    // Temporarily expose input value. Use with caution.
    get memoryStoreRetentionPeriodInHoursInput() {
        return this._memoryStoreRetentionPeriodInHours;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html aws_timestreamwrite_table}
*/
export class TimestreamwriteTable extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_timestreamwrite_table";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/timestreamwrite_table.html aws_timestreamwrite_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options TimestreamwriteTableConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_timestreamwrite_table',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._databaseName = config.databaseName;
        this._tableName = config.tableName;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._retentionProperties.internalValue = config.retentionProperties;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // database_name - computed: false, optional: false, required: true
    _databaseName;
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    set databaseName(value) {
        this._databaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    get databaseNameInput() {
        return this._databaseName;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // table_name - computed: false, optional: false, required: true
    _tableName;
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    set tableName(value) {
        this._tableName = value;
    }
    // Temporarily expose input value. Use with caution.
    get tableNameInput() {
        return this._tableName;
    }
    // tags - computed: false, optional: true, required: false
    _tags;
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // tags_all - computed: true, optional: true, required: false
    _tagsAll;
    get tagsAll() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags_all');
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    // retention_properties - computed: false, optional: true, required: false
    _retentionProperties = new TimestreamwriteTableRetentionPropertiesOutputReference(this, "retention_properties", true);
    get retentionProperties() {
        return this._retentionProperties;
    }
    putRetentionProperties(value) {
        this._retentionProperties.internalValue = value;
    }
    resetRetentionProperties() {
        this._retentionProperties.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retentionPropertiesInput() {
        return this._retentionProperties.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            database_name: cdktf.stringToTerraform(this._databaseName),
            table_name: cdktf.stringToTerraform(this._tableName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            retention_properties: timestreamwriteTableRetentionPropertiesToTerraform(this._retentionProperties.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXN0cmVhbXdyaXRlLXRhYmxlLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJ0aW1lc3RyZWFtd3JpdGUtdGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBd0MvQixNQUFNLFVBQVUsa0RBQWtELENBQUMsTUFBeUc7SUFDMUssSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCx1Q0FBdUMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLGtDQUFrQyxDQUFDO1FBQzVHLHNDQUFzQyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsaUNBQWlDLENBQUM7S0FDM0csQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sc0RBQXVELFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDckYsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElBQUksQ0FBQyxtQ0FBbUMsRUFBRTtZQUM1QyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGtDQUFrQyxH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