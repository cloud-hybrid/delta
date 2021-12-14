// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dataAwsAvailabilityZonesFilterToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        values: cdktf.listMapper(cdktf.stringToTerraform)(struct.values),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html aws_availability_zones}
*/
export class DataAwsAvailabilityZones extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_availability_zones";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/availability_zones.html aws_availability_zones} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAvailabilityZonesConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_availability_zones',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._allAvailabilityZones = config.allAvailabilityZones;
        this._excludeNames = config.excludeNames;
        this._excludeZoneIds = config.excludeZoneIds;
        this._state = config.state;
        this._filter = config.filter;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // all_availability_zones - computed: false, optional: true, required: false
    _allAvailabilityZones;
    get allAvailabilityZones() {
        return this.getBooleanAttribute('all_availability_zones');
    }
    set allAvailabilityZones(value) {
        this._allAvailabilityZones = value;
    }
    resetAllAvailabilityZones() {
        this._allAvailabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allAvailabilityZonesInput() {
        return this._allAvailabilityZones;
    }
    // exclude_names - computed: false, optional: true, required: false
    _excludeNames;
    get excludeNames() {
        return this.getListAttribute('exclude_names');
    }
    set excludeNames(value) {
        this._excludeNames = value;
    }
    resetExcludeNames() {
        this._excludeNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeNamesInput() {
        return this._excludeNames;
    }
    // exclude_zone_ids - computed: false, optional: true, required: false
    _excludeZoneIds;
    get excludeZoneIds() {
        return this.getListAttribute('exclude_zone_ids');
    }
    set excludeZoneIds(value) {
        this._excludeZoneIds = value;
    }
    resetExcludeZoneIds() {
        this._excludeZoneIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get excludeZoneIdsInput() {
        return this._excludeZoneIds;
    }
    // group_names - computed: true, optional: false, required: false
    get groupNames() {
        return this.getListAttribute('group_names');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // names - computed: true, optional: false, required: false
    get names() {
        return this.getListAttribute('names');
    }
    // state - computed: false, optional: true, required: false
    _state;
    get state() {
        return this.getStringAttribute('state');
    }
    set state(value) {
        this._state = value;
    }
    resetState() {
        this._state = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stateInput() {
        return this._state;
    }
    // zone_ids - computed: true, optional: false, required: false
    get zoneIds() {
        return this.getListAttribute('zone_ids');
    }
    // filter - computed: false, optional: true, required: false
    _filter;
    get filter() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('filter');
    }
    set filter(value) {
        this._filter = value;
    }
    resetFilter() {
        this._filter = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get filterInput() {
        return this._filter;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            all_availability_zones: cdktf.booleanToTerraform(this._allAvailabilityZones),
            exclude_names: cdktf.listMapper(cdktf.stringToTerraform)(this._excludeNames),
            exclude_zone_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._excludeZoneIds),
            state: cdktf.stringToTerraform(this._state),
            filter: cdktf.listMapper(dataAwsAvailabilityZonesFilterToTerraform)(this._filter),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtYXZhaWxhYmlsaXR5LXpvbmVzLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJkYXRhLWF3cy1hdmFpbGFiaWxpdHktem9uZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBd0MvQixNQUFNLFVBQVUseUNBQXlDLENBQUMsTUFBdUM7SUFDL0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFBRSxPQUFPLE1BQU0sQ0FBQztLQUFFO0lBQ2pELElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ2xDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0hBQW9ILENBQUMsQ0FBQztLQUN2STtJQUNELE9BQU87UUFDTCxJQUFJLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxJQUFJLENBQUM7UUFDM0MsTUFBTSxFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNsRSxDQUFBO0FBQ0gsQ0FBQztBQUdEOztFQUVFO0FBQ0YsTUFBTSxPQUFPLHdCQUF5QixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFckUsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLHdCQUF3QixDQUFDO0lBRXpFLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLFNBQXlDLEVBQUU7UUFDMUYsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSx3QkFBd0I7WUFDL0MsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFB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