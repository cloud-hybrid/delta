// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html aws_db_snapshot}
*/
export class DataAwsDbSnapshot extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_db_snapshot";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_snapshot.html aws_db_snapshot} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbSnapshotConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_db_snapshot',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._dbInstanceIdentifier = config.dbInstanceIdentifier;
        this._dbSnapshotIdentifier = config.dbSnapshotIdentifier;
        this._includePublic = config.includePublic;
        this._includeShared = config.includeShared;
        this._mostRecent = config.mostRecent;
        this._snapshotType = config.snapshotType;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // allocated_storage - computed: true, optional: false, required: false
    get allocatedStorage() {
        return this.getNumberAttribute('allocated_storage');
    }
    // availability_zone - computed: true, optional: false, required: false
    get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    // db_instance_identifier - computed: false, optional: true, required: false
    _dbInstanceIdentifier;
    get dbInstanceIdentifier() {
        return this.getStringAttribute('db_instance_identifier');
    }
    set dbInstanceIdentifier(value) {
        this._dbInstanceIdentifier = value;
    }
    resetDbInstanceIdentifier() {
        this._dbInstanceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dbInstanceIdentifierInput() {
        return this._dbInstanceIdentifier;
    }
    // db_snapshot_arn - computed: true, optional: false, required: false
    get dbSnapshotArn() {
        return this.getStringAttribute('db_snapshot_arn');
    }
    // db_snapshot_identifier - computed: false, optional: true, required: false
    _dbSnapshotIdentifier;
    get dbSnapshotIdentifier() {
        return this.getStringAttribute('db_snapshot_identifier');
    }
    set dbSnapshotIdentifier(value) {
        this._dbSnapshotIdentifier = value;
    }
    resetDbSnapshotIdentifier() {
        this._dbSnapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dbSnapshotIdentifierInput() {
        return this._dbSnapshotIdentifier;
    }
    // encrypted - computed: true, optional: false, required: false
    get encrypted() {
        return this.getBooleanAttribute('encrypted');
    }
    // engine - computed: true, optional: false, required: false
    get engine() {
        return this.getStringAttribute('engine');
    }
    // engine_version - computed: true, optional: false, required: false
    get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // include_public - computed: false, optional: true, required: false
    _includePublic;
    get includePublic() {
        return this.getBooleanAttribute('include_public');
    }
    set includePublic(value) {
        this._includePublic = value;
    }
    resetIncludePublic() {
        this._includePublic = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includePublicInput() {
        return this._includePublic;
    }
    // include_shared - computed: false, optional: true, required: false
    _includeShared;
    get includeShared() {
        return this.getBooleanAttribute('include_shared');
    }
    set includeShared(value) {
        this._includeShared = value;
    }
    resetIncludeShared() {
        this._includeShared = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get includeSharedInput() {
        return this._includeShared;
    }
    // iops - computed: true, optional: false, required: false
    get iops() {
        return this.getNumberAttribute('iops');
    }
    // kms_key_id - computed: true, optional: false, required: false
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    // license_model - computed: true, optional: false, required: false
    get licenseModel() {
        return this.getStringAttribute('license_model');
    }
    // most_recent - computed: false, optional: true, required: false
    _mostRecent;
    get mostRecent() {
        return this.getBooleanAttribute('most_recent');
    }
    set mostRecent(value) {
        this._mostRecent = value;
    }
    resetMostRecent() {
        this._mostRecent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get mostRecentInput() {
        return this._mostRecent;
    }
    // option_group_name - computed: true, optional: false, required: false
    get optionGroupName() {
        return this.getStringAttribute('option_group_name');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
    // snapshot_create_time - computed: true, optional: false, required: false
    get snapshotCreateTime() {
        return this.getStringAttribute('snapshot_create_time');
    }
    // snapshot_type - computed: false, optional: true, required: false
    _snapshotType;
    get snapshotType() {
        return this.getStringAttribute('snapshot_type');
    }
    set snapshotType(value) {
        this._snapshotType = value;
    }
    resetSnapshotType() {
        this._snapshotType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get snapshotTypeInput() {
        return this._snapshotType;
    }
    // source_db_snapshot_identifier - computed: true, optional: false, required: false
    get sourceDbSnapshotIdentifier() {
        return this.getStringAttribute('source_db_snapshot_identifier');
    }
    // source_region - computed: true, optional: false, required: false
    get sourceRegion() {
        return this.getStringAttribute('source_region');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // storage_type - computed: true, optional: false, required: false
    get storageType() {
        return this.getStringAttribute('storage_type');
    }
    // vpc_id - computed: true, optional: false, required: false
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            db_instance_identifier: cdktf.stringToTerraform(this._dbInstanceIdentifier),
            db_snapshot_identifier: cdktf.stringToTerraform(this._dbSnapshotIdentifier),
            include_public: cdktf.booleanToTerraform(this._includePublic),
            include_shared: cdktf.booleanToTerraform(this._includeShared),
            most_recent: cdktf.booleanToTerraform(this._mostRecent),
            snapshot_type: cdktf.stringToTerraform(this._snapshotType),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZGItc25hcHNob3QuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLWRiLXNuYXBzaG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQWdDL0I7O0VBRUU7QUFDRixNQUFNLE9BQU8saUJBQWtCLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU5RCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsaUJBQWlCLENBQUM7SUFFbEUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsU0FBa0MsRUFBRTtRQUNuRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGlCQUFpQjtZQUN4QywwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHFCQUFxQixHQUFHLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQztRQUN6RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDLG9CQUFvQixDQUFDO1FBQ3pELElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdB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