// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html aws_neptune_orderable_db_instance}
*/
export class DataAwsNeptuneOrderableDbInstance extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_neptune_orderable_db_instance";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/neptune_orderable_db_instance.html aws_neptune_orderable_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsNeptuneOrderableDbInstanceConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_neptune_orderable_db_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._engine = config.engine;
        this._engineVersion = config.engineVersion;
        this._instanceClass = config.instanceClass;
        this._licenseModel = config.licenseModel;
        this._preferredInstanceClasses = config.preferredInstanceClasses;
        this._vpc = config.vpc;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // availability_zones - computed: true, optional: false, required: false
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    // engine - computed: false, optional: true, required: false
    _engine;
    get engine() {
        return this.getStringAttribute('engine');
    }
    set engine(value) {
        this._engine = value;
    }
    resetEngine() {
        this._engine = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get engineInput() {
        return this._engine;
    }
    // engine_version - computed: true, optional: true, required: false
    _engineVersion;
    get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    set engineVersion(value) {
        this._engineVersion = value;
    }
    resetEngineVersion() {
        this._engineVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get engineVersionInput() {
        return this._engineVersion;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // instance_class - computed: true, optional: true, required: false
    _instanceClass;
    get instanceClass() {
        return this.getStringAttribute('instance_class');
    }
    set instanceClass(value) {
        this._instanceClass = value;
    }
    resetInstanceClass() {
        this._instanceClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceClassInput() {
        return this._instanceClass;
    }
    // license_model - computed: false, optional: true, required: false
    _licenseModel;
    get licenseModel() {
        return this.getStringAttribute('license_model');
    }
    set licenseModel(value) {
        this._licenseModel = value;
    }
    resetLicenseModel() {
        this._licenseModel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get licenseModelInput() {
        return this._licenseModel;
    }
    // max_iops_per_db_instance - computed: true, optional: false, required: false
    get maxIopsPerDbInstance() {
        return this.getNumberAttribute('max_iops_per_db_instance');
    }
    // max_iops_per_gib - computed: true, optional: false, required: false
    get maxIopsPerGib() {
        return this.getNumberAttribute('max_iops_per_gib');
    }
    // max_storage_size - computed: true, optional: false, required: false
    get maxStorageSize() {
        return this.getNumberAttribute('max_storage_size');
    }
    // min_iops_per_db_instance - computed: true, optional: false, required: false
    get minIopsPerDbInstance() {
        return this.getNumberAttribute('min_iops_per_db_instance');
    }
    // min_iops_per_gib - computed: true, optional: false, required: false
    get minIopsPerGib() {
        return this.getNumberAttribute('min_iops_per_gib');
    }
    // min_storage_size - computed: true, optional: false, required: false
    get minStorageSize() {
        return this.getNumberAttribute('min_storage_size');
    }
    // multi_az_capable - computed: true, optional: false, required: false
    get multiAzCapable() {
        return this.getBooleanAttribute('multi_az_capable');
    }
    // preferred_instance_classes - computed: false, optional: true, required: false
    _preferredInstanceClasses;
    get preferredInstanceClasses() {
        return this.getListAttribute('preferred_instance_classes');
    }
    set preferredInstanceClasses(value) {
        this._preferredInstanceClasses = value;
    }
    resetPreferredInstanceClasses() {
        this._preferredInstanceClasses = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preferredInstanceClassesInput() {
        return this._preferredInstanceClasses;
    }
    // read_replica_capable - computed: true, optional: false, required: false
    get readReplicaCapable() {
        return this.getBooleanAttribute('read_replica_capable');
    }
    // storage_type - computed: true, optional: false, required: false
    get storageType() {
        return this.getStringAttribute('storage_type');
    }
    // supports_enhanced_monitoring - computed: true, optional: false, required: false
    get supportsEnhancedMonitoring() {
        return this.getBooleanAttribute('supports_enhanced_monitoring');
    }
    // supports_iam_database_authentication - computed: true, optional: false, required: false
    get supportsIamDatabaseAuthentication() {
        return this.getBooleanAttribute('supports_iam_database_authentication');
    }
    // supports_iops - computed: true, optional: false, required: false
    get supportsIops() {
        return this.getBooleanAttribute('supports_iops');
    }
    // supports_performance_insights - computed: true, optional: false, required: false
    get supportsPerformanceInsights() {
        return this.getBooleanAttribute('supports_performance_insights');
    }
    // supports_storage_encryption - computed: true, optional: false, required: false
    get supportsStorageEncryption() {
        return this.getBooleanAttribute('supports_storage_encryption');
    }
    // vpc - computed: true, optional: true, required: false
    _vpc;
    get vpc() {
        return this.getBooleanAttribute('vpc');
    }
    set vpc(value) {
        this._vpc = value;
    }
    resetVpc() {
        this._vpc = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcInput() {
        return this._vpc;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            instance_class: cdktf.stringToTerraform(this._instanceClass),
            license_model: cdktf.stringToTerraform(this._licenseModel),
            preferred_instance_classes: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredInstanceClasses),
            vpc: cdktf.booleanToTerraform(this._vpc),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtbmVwdHVuZS1vcmRlcmFibGUtZGItaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLW5lcHR1bmUtb3JkZXJhYmxlLWRiLWluc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQWdDL0I7O0VBRUU7QUFDRixNQUFNLE9BQU8saUNBQWtDLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU5RSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsbUNBQW1DLENBQUM7SUFFcEYsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsU0FBa0QsRUFBRTtRQUNuRyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLG1DQUFtQztZQUMxRCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzdCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxNQUFNLENBQUMsd0JB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