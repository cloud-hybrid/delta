// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html aws_rds_orderable_db_instance}
*/
export class DataAwsRdsOrderableDbInstance extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_rds_orderable_db_instance";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/rds_orderable_db_instance.html aws_rds_orderable_db_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRdsOrderableDbInstanceConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_rds_orderable_db_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._availabilityZoneGroup = config.availabilityZoneGroup;
        this._engine = config.engine;
        this._engineVersion = config.engineVersion;
        this._instanceClass = config.instanceClass;
        this._licenseModel = config.licenseModel;
        this._preferredEngineVersions = config.preferredEngineVersions;
        this._preferredInstanceClasses = config.preferredInstanceClasses;
        this._storageType = config.storageType;
        this._supportsEnhancedMonitoring = config.supportsEnhancedMonitoring;
        this._supportsGlobalDatabases = config.supportsGlobalDatabases;
        this._supportsIamDatabaseAuthentication = config.supportsIamDatabaseAuthentication;
        this._supportsIops = config.supportsIops;
        this._supportsKerberosAuthentication = config.supportsKerberosAuthentication;
        this._supportsPerformanceInsights = config.supportsPerformanceInsights;
        this._supportsStorageAutoscaling = config.supportsStorageAutoscaling;
        this._supportsStorageEncryption = config.supportsStorageEncryption;
        this._vpc = config.vpc;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // availability_zone_group - computed: true, optional: true, required: false
    _availabilityZoneGroup;
    get availabilityZoneGroup() {
        return this.getStringAttribute('availability_zone_group');
    }
    set availabilityZoneGroup(value) {
        this._availabilityZoneGroup = value;
    }
    resetAvailabilityZoneGroup() {
        this._availabilityZoneGroup = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get availabilityZoneGroupInput() {
        return this._availabilityZoneGroup;
    }
    // availability_zones - computed: true, optional: false, required: false
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    // engine - computed: false, optional: false, required: true
    _engine;
    get engine() {
        return this.getStringAttribute('engine');
    }
    set engine(value) {
        this._engine = value;
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
    // license_model - computed: true, optional: true, required: false
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
    // outpost_capable - computed: true, optional: false, required: false
    get outpostCapable() {
        return this.getBooleanAttribute('outpost_capable');
    }
    // preferred_engine_versions - computed: false, optional: true, required: false
    _preferredEngineVersions;
    get preferredEngineVersions() {
        return this.getListAttribute('preferred_engine_versions');
    }
    set preferredEngineVersions(value) {
        this._preferredEngineVersions = value;
    }
    resetPreferredEngineVersions() {
        this._preferredEngineVersions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preferredEngineVersionsInput() {
        return this._preferredEngineVersions;
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
    // storage_type - computed: true, optional: true, required: false
    _storageType;
    get storageType() {
        return this.getStringAttribute('storage_type');
    }
    set storageType(value) {
        this._storageType = value;
    }
    resetStorageType() {
        this._storageType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storageTypeInput() {
        return this._storageType;
    }
    // supported_engine_modes - computed: true, optional: false, required: false
    get supportedEngineModes() {
        return this.getListAttribute('supported_engine_modes');
    }
    // supports_enhanced_monitoring - computed: true, optional: true, required: false
    _supportsEnhancedMonitoring;
    get supportsEnhancedMonitoring() {
        return this.getBooleanAttribute('supports_enhanced_monitoring');
    }
    set supportsEnhancedMonitoring(value) {
        this._supportsEnhancedMonitoring = value;
    }
    resetSupportsEnhancedMonitoring() {
        this._supportsEnhancedMonitoring = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsEnhancedMonitoringInput() {
        return this._supportsEnhancedMonitoring;
    }
    // supports_global_databases - computed: true, optional: true, required: false
    _supportsGlobalDatabases;
    get supportsGlobalDatabases() {
        return this.getBooleanAttribute('supports_global_databases');
    }
    set supportsGlobalDatabases(value) {
        this._supportsGlobalDatabases = value;
    }
    resetSupportsGlobalDatabases() {
        this._supportsGlobalDatabases = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsGlobalDatabasesInput() {
        return this._supportsGlobalDatabases;
    }
    // supports_iam_database_authentication - computed: true, optional: true, required: false
    _supportsIamDatabaseAuthentication;
    get supportsIamDatabaseAuthentication() {
        return this.getBooleanAttribute('supports_iam_database_authentication');
    }
    set supportsIamDatabaseAuthentication(value) {
        this._supportsIamDatabaseAuthentication = value;
    }
    resetSupportsIamDatabaseAuthentication() {
        this._supportsIamDatabaseAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsIamDatabaseAuthenticationInput() {
        return this._supportsIamDatabaseAuthentication;
    }
    // supports_iops - computed: true, optional: true, required: false
    _supportsIops;
    get supportsIops() {
        return this.getBooleanAttribute('supports_iops');
    }
    set supportsIops(value) {
        this._supportsIops = value;
    }
    resetSupportsIops() {
        this._supportsIops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsIopsInput() {
        return this._supportsIops;
    }
    // supports_kerberos_authentication - computed: true, optional: true, required: false
    _supportsKerberosAuthentication;
    get supportsKerberosAuthentication() {
        return this.getBooleanAttribute('supports_kerberos_authentication');
    }
    set supportsKerberosAuthentication(value) {
        this._supportsKerberosAuthentication = value;
    }
    resetSupportsKerberosAuthentication() {
        this._supportsKerberosAuthentication = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsKerberosAuthenticationInput() {
        return this._supportsKerberosAuthentication;
    }
    // supports_performance_insights - computed: true, optional: true, required: false
    _supportsPerformanceInsights;
    get supportsPerformanceInsights() {
        return this.getBooleanAttribute('supports_performance_insights');
    }
    set supportsPerformanceInsights(value) {
        this._supportsPerformanceInsights = value;
    }
    resetSupportsPerformanceInsights() {
        this._supportsPerformanceInsights = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsPerformanceInsightsInput() {
        return this._supportsPerformanceInsights;
    }
    // supports_storage_autoscaling - computed: true, optional: true, required: false
    _supportsStorageAutoscaling;
    get supportsStorageAutoscaling() {
        return this.getBooleanAttribute('supports_storage_autoscaling');
    }
    set supportsStorageAutoscaling(value) {
        this._supportsStorageAutoscaling = value;
    }
    resetSupportsStorageAutoscaling() {
        this._supportsStorageAutoscaling = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsStorageAutoscalingInput() {
        return this._supportsStorageAutoscaling;
    }
    // supports_storage_encryption - computed: true, optional: true, required: false
    _supportsStorageEncryption;
    get supportsStorageEncryption() {
        return this.getBooleanAttribute('supports_storage_encryption');
    }
    set supportsStorageEncryption(value) {
        this._supportsStorageEncryption = value;
    }
    resetSupportsStorageEncryption() {
        this._supportsStorageEncryption = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get supportsStorageEncryptionInput() {
        return this._supportsStorageEncryption;
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
            availability_zone_group: cdktf.stringToTerraform(this._availabilityZoneGroup),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            instance_class: cdktf.stringToTerraform(this._instanceClass),
            license_model: cdktf.stringToTerraform(this._licenseModel),
            preferred_engine_versions: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredEngineVersions),
            preferred_instance_classes: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredInstanceClasses),
            storage_type: cdktf.stringToTerraform(this._storageType),
            supports_enhanced_monitoring: cdktf.booleanToTerraform(this._supportsEnhancedMonitoring),
            supports_global_databases: cdktf.booleanToTerraform(this._supportsGlobalDatabases),
            supports_iam_database_authentication: cdktf.booleanToTerraform(this._supportsIamDatabaseAuthentication),
            supports_iops: cdktf.booleanToTerraform(this._supportsIops),
            supports_kerberos_authentication: cdktf.booleanToTerraform(this._supportsKerberosAuthentication),
            supports_performance_insights: cdktf.booleanToTerraform(this._supportsPerformanceInsights),
            supports_storage_autoscaling: cdktf.booleanToTerraform(this._supportsStorageAutoscaling),
            supports_storage_encryption: cdktf.booleanToTerraform(this._supportsStorageEncryption),
            vpc: cdktf.booleanToTerraform(this._vpc),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtcmRzLW9yZGVyYWJsZS1kYi1pbnN0YW5jZS5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiZGF0YS1hd3MtcmRzLW9yZGVyYWJsZS1kYi1pbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUE0RS9COztFQUVFO0FBQ0YsTUFBTSxPQUFPLDZCQUE4QixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFMUUsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDYixNQUFNLENBQVUsY0FBYyxHQUFXLCtCQUErQixDQUFDO0lBRWhGLGNBQWM7SUFDZCxjQUFjO0lBQ2QsY0FBYztJQUVkOzs7Ozs7TUFNRTtJQUNGLFlBQW1CLEtBQWdCLEVBQUUsRUFBVSxFQUFFLE1BQTJDO1FBQzFGLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFO1lBQ2YscUJBQXFCLEVBQUUsK0JBQStCO1lBQ3RELDBCQUEwQixFQUFFO2dCQUMxQixZQUFZLEVBQUUsS0FBSzthQUNwQjtZQUNELFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUTtZQUN6QixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7WUFDM0IsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLO1lBQ25CLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztTQUM1QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUM7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQztRQUN6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