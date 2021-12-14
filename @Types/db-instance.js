// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dbInstanceRestoreToPointInTimeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        restore_time: cdktf.stringToTerraform(struct.restoreTime),
        source_db_instance_identifier: cdktf.stringToTerraform(struct.sourceDbInstanceIdentifier),
        source_dbi_resource_id: cdktf.stringToTerraform(struct.sourceDbiResourceId),
        use_latest_restorable_time: cdktf.booleanToTerraform(struct.useLatestRestorableTime),
    };
}
export class DbInstanceRestoreToPointInTimeOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._restoreTime) {
            hasAnyValues = true;
            internalValueResult.restoreTime = this._restoreTime;
        }
        if (this._sourceDbInstanceIdentifier) {
            hasAnyValues = true;
            internalValueResult.sourceDbInstanceIdentifier = this._sourceDbInstanceIdentifier;
        }
        if (this._sourceDbiResourceId) {
            hasAnyValues = true;
            internalValueResult.sourceDbiResourceId = this._sourceDbiResourceId;
        }
        if (this._useLatestRestorableTime) {
            hasAnyValues = true;
            internalValueResult.useLatestRestorableTime = this._useLatestRestorableTime;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._restoreTime = undefined;
            this._sourceDbInstanceIdentifier = undefined;
            this._sourceDbiResourceId = undefined;
            this._useLatestRestorableTime = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._restoreTime = value.restoreTime;
            this._sourceDbInstanceIdentifier = value.sourceDbInstanceIdentifier;
            this._sourceDbiResourceId = value.sourceDbiResourceId;
            this._useLatestRestorableTime = value.useLatestRestorableTime;
        }
    }
    // restore_time - computed: false, optional: true, required: false
    _restoreTime;
    get restoreTime() {
        return this.getStringAttribute('restore_time');
    }
    set restoreTime(value) {
        this._restoreTime = value;
    }
    resetRestoreTime() {
        this._restoreTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get restoreTimeInput() {
        return this._restoreTime;
    }
    // source_db_instance_identifier - computed: false, optional: true, required: false
    _sourceDbInstanceIdentifier;
    get sourceDbInstanceIdentifier() {
        return this.getStringAttribute('source_db_instance_identifier');
    }
    set sourceDbInstanceIdentifier(value) {
        this._sourceDbInstanceIdentifier = value;
    }
    resetSourceDbInstanceIdentifier() {
        this._sourceDbInstanceIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceDbInstanceIdentifierInput() {
        return this._sourceDbInstanceIdentifier;
    }
    // source_dbi_resource_id - computed: false, optional: true, required: false
    _sourceDbiResourceId;
    get sourceDbiResourceId() {
        return this.getStringAttribute('source_dbi_resource_id');
    }
    set sourceDbiResourceId(value) {
        this._sourceDbiResourceId = value;
    }
    resetSourceDbiResourceId() {
        this._sourceDbiResourceId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sourceDbiResourceIdInput() {
        return this._sourceDbiResourceId;
    }
    // use_latest_restorable_time - computed: false, optional: true, required: false
    _useLatestRestorableTime;
    get useLatestRestorableTime() {
        return this.getBooleanAttribute('use_latest_restorable_time');
    }
    set useLatestRestorableTime(value) {
        this._useLatestRestorableTime = value;
    }
    resetUseLatestRestorableTime() {
        this._useLatestRestorableTime = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get useLatestRestorableTimeInput() {
        return this._useLatestRestorableTime;
    }
}
export function dbInstanceS3ImportToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_name: cdktf.stringToTerraform(struct.bucketName),
        bucket_prefix: cdktf.stringToTerraform(struct.bucketPrefix),
        ingestion_role: cdktf.stringToTerraform(struct.ingestionRole),
        source_engine: cdktf.stringToTerraform(struct.sourceEngine),
        source_engine_version: cdktf.stringToTerraform(struct.sourceEngineVersion),
    };
}
export class DbInstanceS3ImportOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._bucketName) {
            hasAnyValues = true;
            internalValueResult.bucketName = this._bucketName;
        }
        if (this._bucketPrefix) {
            hasAnyValues = true;
            internalValueResult.bucketPrefix = this._bucketPrefix;
        }
        if (this._ingestionRole) {
            hasAnyValues = true;
            internalValueResult.ingestionRole = this._ingestionRole;
        }
        if (this._sourceEngine) {
            hasAnyValues = true;
            internalValueResult.sourceEngine = this._sourceEngine;
        }
        if (this._sourceEngineVersion) {
            hasAnyValues = true;
            internalValueResult.sourceEngineVersion = this._sourceEngineVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketName = undefined;
            this._bucketPrefix = undefined;
            this._ingestionRole = undefined;
            this._sourceEngine = undefined;
            this._sourceEngineVersion = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketName = value.bucketName;
            this._bucketPrefix = value.bucketPrefix;
            this._ingestionRole = value.ingestionRole;
            this._sourceEngine = value.sourceEngine;
            this._sourceEngineVersion = value.sourceEngineVersion;
        }
    }
    // bucket_name - computed: false, optional: false, required: true
    _bucketName;
    get bucketName() {
        return this.getStringAttribute('bucket_name');
    }
    set bucketName(value) {
        this._bucketName = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketNameInput() {
        return this._bucketName;
    }
    // bucket_prefix - computed: false, optional: true, required: false
    _bucketPrefix;
    get bucketPrefix() {
        return this.getStringAttribute('bucket_prefix');
    }
    set bucketPrefix(value) {
        this._bucketPrefix = value;
    }
    resetBucketPrefix() {
        this._bucketPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bucketPrefixInput() {
        return this._bucketPrefix;
    }
    // ingestion_role - computed: false, optional: false, required: true
    _ingestionRole;
    get ingestionRole() {
        return this.getStringAttribute('ingestion_role');
    }
    set ingestionRole(value) {
        this._ingestionRole = value;
    }
    // Temporarily expose input value. Use with caution.
    get ingestionRoleInput() {
        return this._ingestionRole;
    }
    // source_engine - computed: false, optional: false, required: true
    _sourceEngine;
    get sourceEngine() {
        return this.getStringAttribute('source_engine');
    }
    set sourceEngine(value) {
        this._sourceEngine = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceEngineInput() {
        return this._sourceEngine;
    }
    // source_engine_version - computed: false, optional: false, required: true
    _sourceEngineVersion;
    get sourceEngineVersion() {
        return this.getStringAttribute('source_engine_version');
    }
    set sourceEngineVersion(value) {
        this._sourceEngineVersion = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceEngineVersionInput() {
        return this._sourceEngineVersion;
    }
}
export function dbInstanceTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
        update: cdktf.stringToTerraform(struct.update),
    };
}
export class DbInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._create) {
            hasAnyValues = true;
            internalValueResult.create = this._create;
        }
        if (this._delete) {
            hasAnyValues = true;
            internalValueResult.delete = this._delete;
        }
        if (this._update) {
            hasAnyValues = true;
            internalValueResult.update = this._update;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._create = undefined;
            this._delete = undefined;
            this._update = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._create = value.create;
            this._delete = value.delete;
            this._update = value.update;
        }
    }
    // create - computed: false, optional: true, required: false
    _create;
    get create() {
        return this.getStringAttribute('create');
    }
    set create(value) {
        this._create = value;
    }
    resetCreate() {
        this._create = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get createInput() {
        return this._create;
    }
    // delete - computed: false, optional: true, required: false
    _delete;
    get delete() {
        return this.getStringAttribute('delete');
    }
    set delete(value) {
        this._delete = value;
    }
    resetDelete() {
        this._delete = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteInput() {
        return this._delete;
    }
    // update - computed: false, optional: true, required: false
    _update;
    get update() {
        return this.getStringAttribute('update');
    }
    set update(value) {
        this._update = value;
    }
    resetUpdate() {
        this._update = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get updateInput() {
        return this._update;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html aws_db_instance}
*/
export class DbInstance extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_db_instance";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_instance.html aws_db_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbInstanceConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_db_instance',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._allocatedStorage = config.allocatedStorage;
        this._allowMajorVersionUpgrade = config.allowMajorVersionUpgrade;
        this._applyImmediately = config.applyImmediately;
        this._autoMinorVersionUpgrade = config.autoMinorVersionUpgrade;
        this._availabilityZone = config.availabilityZone;
        this._backupRetentionPeriod = config.backupRetentionPeriod;
        this._backupWindow = config.backupWindow;
        this._caCertIdentifier = config.caCertIdentifier;
        this._characterSetName = config.characterSetName;
        this._copyTagsToSnapshot = config.copyTagsToSnapshot;
        this._customerOwnedIpEnabled = config.customerOwnedIpEnabled;
        this._dbSubnetGroupName = config.dbSubnetGroupName;
        this._deleteAutomatedBackups = config.deleteAutomatedBackups;
        this._deletionProtection = config.deletionProtection;
        this._domain = config.domain;
        this._domainIamRoleName = config.domainIamRoleName;
        this._enabledCloudwatchLogsExports = config.enabledCloudwatchLogsExports;
        this._engine = config.engine;
        this._engineVersion = config.engineVersion;
        this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
        this._iamDatabaseAuthenticationEnabled = config.iamDatabaseAuthenticationEnabled;
        this._identifier = config.identifier;
        this._identifierPrefix = config.identifierPrefix;
        this._instanceClass = config.instanceClass;
        this._iops = config.iops;
        this._kmsKeyId = config.kmsKeyId;
        this._licenseModel = config.licenseModel;
        this._maintenanceWindow = config.maintenanceWindow;
        this._maxAllocatedStorage = config.maxAllocatedStorage;
        this._monitoringInterval = config.monitoringInterval;
        this._monitoringRoleArn = config.monitoringRoleArn;
        this._multiAz = config.multiAz;
        this._name = config.name;
        this._ncharCharacterSetName = config.ncharCharacterSetName;
        this._optionGroupName = config.optionGroupName;
        this._parameterGroupName = config.parameterGroupName;
        this._password = config.password;
        this._performanceInsightsEnabled = config.performanceInsightsEnabled;
        this._performanceInsightsKmsKeyId = config.performanceInsightsKmsKeyId;
        this._performanceInsightsRetentionPeriod = config.performanceInsightsRetentionPeriod;
        this._port = config.port;
        this._publiclyAccessible = config.publiclyAccessible;
        this._replicaMode = config.replicaMode;
        this._replicateSourceDb = config.replicateSourceDb;
        this._securityGroupNames = config.securityGroupNames;
        this._skipFinalSnapshot = config.skipFinalSnapshot;
        this._snapshotIdentifier = config.snapshotIdentifier;
        this._storageEncrypted = config.storageEncrypted;
        this._storageType = config.storageType;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._timezone = config.timezone;
        this._username = config.username;
        this._vpcSecurityGroupIds = config.vpcSecurityGroupIds;
        this._restoreToPointInTime.internalValue = config.restoreToPointInTime;
        this._s3Import.internalValue = config.s3Import;
        this._timeouts.internalValue = config.timeouts;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // address - computed: true, optional: false, required: false
    get address() {
        return this.getStringAttribute('address');
    }
    // allocated_storage - computed: true, optional: true, required: false
    _allocatedStorage;
    get allocatedStorage() {
        return this.getNumberAttribute('allocated_storage');
    }
    set allocatedStorage(value) {
        this._allocatedStorage = value;
    }
    resetAllocatedStorage() {
        this._allocatedStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allocatedStorageInput() {
        return this._allocatedStorage;
    }
    // allow_major_version_upgrade - computed: false, optional: true, required: false
    _allowMajorVersionUpgrade;
    get allowMajorVersionUpgrade() {
        return this.getBooleanAttribute('allow_major_version_upgrade');
    }
    set allowMajorVersionUpgrade(value) {
        this._allowMajorVersionUpgrade = value;
    }
    resetAllowMajorVersionUpgrade() {
        this._allowMajorVersionUpgrade = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowMajorVersionUpgradeInput() {
        return this._allowMajorVersionUpgrade;
    }
    // apply_immediately - computed: true, optional: true, required: false
    _applyImmediately;
    get applyImmediately() {
        return this.getBooleanAttribute('apply_immediately');
    }
    set applyImmediately(value) {
        this._applyImmediately = value;
    }
    resetApplyImmediately() {
        this._applyImmediately = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get applyImmediatelyInput() {
        return this._applyImmediately;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // auto_minor_version_upgrade - computed: false, optional: true, required: false
    _autoMinorVersionUpgrade;
    get autoMinorVersionUpgrade() {
        return this.getBooleanAttribute('auto_minor_version_upgrade');
    }
    set autoMinorVersionUpgrade(value) {
        this._autoMinorVersionUpgrade = value;
    }
    resetAutoMinorVersionUpgrade() {
        this._autoMinorVersionUpgrade = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoMinorVersionUpgradeInput() {
        return this._autoMinorVersionUpgrade;
    }
    // availability_zone - computed: true, optional: true, required: false
    _availabilityZone;
    get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    set availabilityZone(value) {
        this._availabilityZone = value;
    }
    resetAvailabilityZone() {
        this._availabilityZone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get availabilityZoneInput() {
        return this._availabilityZone;
    }
    // backup_retention_period - computed: true, optional: true, required: false
    _backupRetentionPeriod;
    get backupRetentionPeriod() {
        return this.getNumberAttribute('backup_retention_period');
    }
    set backupRetentionPeriod(value) {
        this._backupRetentionPeriod = value;
    }
    resetBackupRetentionPeriod() {
        this._backupRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get backupRetentionPeriodInput() {
        return this._backupRetentionPeriod;
    }
    // backup_window - computed: true, optional: true, required: false
    _backupWindow;
    get backupWindow() {
        return this.getStringAttribute('backup_window');
    }
    set backupWindow(value) {
        this._backupWindow = value;
    }
    resetBackupWindow() {
        this._backupWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get backupWindowInput() {
        return this._backupWindow;
    }
    // ca_cert_identifier - computed: true, optional: true, required: false
    _caCertIdentifier;
    get caCertIdentifier() {
        return this.getStringAttribute('ca_cert_identifier');
    }
    set caCertIdentifier(value) {
        this._caCertIdentifier = value;
    }
    resetCaCertIdentifier() {
        this._caCertIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get caCertIdentifierInput() {
        return this._caCertIdentifier;
    }
    // character_set_name - computed: true, optional: true, required: false
    _characterSetName;
    get characterSetName() {
        return this.getStringAttribute('character_set_name');
    }
    set characterSetName(value) {
        this._characterSetName = value;
    }
    resetCharacterSetName() {
        this._characterSetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get characterSetNameInput() {
        return this._characterSetName;
    }
    // copy_tags_to_snapshot - computed: false, optional: true, required: false
    _copyTagsToSnapshot;
    get copyTagsToSnapshot() {
        return this.getBooleanAttribute('copy_tags_to_snapshot');
    }
    set copyTagsToSnapshot(value) {
        this._copyTagsToSnapshot = value;
    }
    resetCopyTagsToSnapshot() {
        this._copyTagsToSnapshot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get copyTagsToSnapshotInput() {
        return this._copyTagsToSnapshot;
    }
    // customer_owned_ip_enabled - computed: false, optional: true, required: false
    _customerOwnedIpEnabled;
    get customerOwnedIpEnabled() {
        return this.getBooleanAttribute('customer_owned_ip_enabled');
    }
    set customerOwnedIpEnabled(value) {
        this._customerOwnedIpEnabled = value;
    }
    resetCustomerOwnedIpEnabled() {
        this._customerOwnedIpEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customerOwnedIpEnabledInput() {
        return this._customerOwnedIpEnabled;
    }
    // db_subnet_group_name - computed: true, optional: true, required: false
    _dbSubnetGroupName;
    get dbSubnetGroupName() {
        return this.getStringAttribute('db_subnet_group_name');
    }
    set dbSubnetGroupName(value) {
        this._dbSubnetGroupName = value;
    }
    resetDbSubnetGroupName() {
        this._dbSubnetGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dbSubnetGroupNameInput() {
        return this._dbSubnetGroupName;
    }
    // delete_automated_backups - computed: false, optional: true, required: false
    _deleteAutomatedBackups;
    get deleteAutomatedBackups() {
        return this.getBooleanAttribute('delete_automated_backups');
    }
    set deleteAutomatedBackups(value) {
        this._deleteAutomatedBackups = value;
    }
    resetDeleteAutomatedBackups() {
        this._deleteAutomatedBackups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deleteAutomatedBackupsInput() {
        return this._deleteAutomatedBackups;
    }
    // deletion_protection - computed: false, optional: true, required: false
    _deletionProtection;
    get deletionProtection() {
        return this.getBooleanAttribute('deletion_protection');
    }
    set deletionProtection(value) {
        this._deletionProtection = value;
    }
    resetDeletionProtection() {
        this._deletionProtection = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deletionProtectionInput() {
        return this._deletionProtection;
    }
    // domain - computed: false, optional: true, required: false
    _domain;
    get domain() {
        return this.getStringAttribute('domain');
    }
    set domain(value) {
        this._domain = value;
    }
    resetDomain() {
        this._domain = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get domainInput() {
        return this._domain;
    }
    // domain_iam_role_name - computed: false, optional: true, required: false
    _domainIamRoleName;
    get domainIamRoleName() {
        return this.getStringAttribute('domain_iam_role_name');
    }
    set domainIamRoleName(value) {
        this._domainIamRoleName = value;
    }
    resetDomainIamRoleName() {
        this._domainIamRoleName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get domainIamRoleNameInput() {
        return this._domainIamRoleName;
    }
    // enabled_cloudwatch_logs_exports - computed: false, optional: true, required: false
    _enabledCloudwatchLogsExports;
    get enabledCloudwatchLogsExports() {
        return this.getListAttribute('enabled_cloudwatch_logs_exports');
    }
    set enabledCloudwatchLogsExports(value) {
        this._enabledCloudwatchLogsExports = value;
    }
    resetEnabledCloudwatchLogsExports() {
        this._enabledCloudwatchLogsExports = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledCloudwatchLogsExportsInput() {
        return this._enabledCloudwatchLogsExports;
    }
    // endpoint - computed: true, optional: false, required: false
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    // engine - computed: true, optional: true, required: false
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
    // engine_version_actual - computed: true, optional: false, required: false
    get engineVersionActual() {
        return this.getStringAttribute('engine_version_actual');
    }
    // final_snapshot_identifier - computed: false, optional: true, required: false
    _finalSnapshotIdentifier;
    get finalSnapshotIdentifier() {
        return this.getStringAttribute('final_snapshot_identifier');
    }
    set finalSnapshotIdentifier(value) {
        this._finalSnapshotIdentifier = value;
    }
    resetFinalSnapshotIdentifier() {
        this._finalSnapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get finalSnapshotIdentifierInput() {
        return this._finalSnapshotIdentifier;
    }
    // hosted_zone_id - computed: true, optional: false, required: false
    get hostedZoneId() {
        return this.getStringAttribute('hosted_zone_id');
    }
    // iam_database_authentication_enabled - computed: false, optional: true, required: false
    _iamDatabaseAuthenticationEnabled;
    get iamDatabaseAuthenticationEnabled() {
        return this.getBooleanAttribute('iam_database_authentication_enabled');
    }
    set iamDatabaseAuthenticationEnabled(value) {
        this._iamDatabaseAuthenticationEnabled = value;
    }
    resetIamDatabaseAuthenticationEnabled() {
        this._iamDatabaseAuthenticationEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iamDatabaseAuthenticationEnabledInput() {
        return this._iamDatabaseAuthenticationEnabled;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // identifier - computed: true, optional: true, required: false
    _identifier;
    get identifier() {
        return this.getStringAttribute('identifier');
    }
    set identifier(value) {
        this._identifier = value;
    }
    resetIdentifier() {
        this._identifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get identifierInput() {
        return this._identifier;
    }
    // identifier_prefix - computed: true, optional: true, required: false
    _identifierPrefix;
    get identifierPrefix() {
        return this.getStringAttribute('identifier_prefix');
    }
    set identifierPrefix(value) {
        this._identifierPrefix = value;
    }
    resetIdentifierPrefix() {
        this._identifierPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get identifierPrefixInput() {
        return this._identifierPrefix;
    }
    // instance_class - computed: false, optional: false, required: true
    _instanceClass;
    get instanceClass() {
        return this.getStringAttribute('instance_class');
    }
    set instanceClass(value) {
        this._instanceClass = value;
    }
    // Temporarily expose input value. Use with caution.
    get instanceClassInput() {
        return this._instanceClass;
    }
    // iops - computed: false, optional: true, required: false
    _iops;
    get iops() {
        return this.getNumberAttribute('iops');
    }
    set iops(value) {
        this._iops = value;
    }
    resetIops() {
        this._iops = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iopsInput() {
        return this._iops;
    }
    // kms_key_id - computed: true, optional: true, required: false
    _kmsKeyId;
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    set kmsKeyId(value) {
        this._kmsKeyId = value;
    }
    resetKmsKeyId() {
        this._kmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyIdInput() {
        return this._kmsKeyId;
    }
    // latest_restorable_time - computed: true, optional: false, required: false
    get latestRestorableTime() {
        return this.getStringAttribute('latest_restorable_time');
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
    // maintenance_window - computed: true, optional: true, required: false
    _maintenanceWindow;
    get maintenanceWindow() {
        return this.getStringAttribute('maintenance_window');
    }
    set maintenanceWindow(value) {
        this._maintenanceWindow = value;
    }
    resetMaintenanceWindow() {
        this._maintenanceWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maintenanceWindowInput() {
        return this._maintenanceWindow;
    }
    // max_allocated_storage - computed: false, optional: true, required: false
    _maxAllocatedStorage;
    get maxAllocatedStorage() {
        return this.getNumberAttribute('max_allocated_storage');
    }
    set maxAllocatedStorage(value) {
        this._maxAllocatedStorage = value;
    }
    resetMaxAllocatedStorage() {
        this._maxAllocatedStorage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxAllocatedStorageInput() {
        return this._maxAllocatedStorage;
    }
    // monitoring_interval - computed: false, optional: true, required: false
    _monitoringInterval;
    get monitoringInterval() {
        return this.getNumberAttribute('monitoring_interval');
    }
    set monitoringInterval(value) {
        this._monitoringInterval = value;
    }
    resetMonitoringInterval() {
        this._monitoringInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get monitoringIntervalInput() {
        return this._monitoringInterval;
    }
    // monitoring_role_arn - computed: true, optional: true, required: false
    _monitoringRoleArn;
    get monitoringRoleArn() {
        return this.getStringAttribute('monitoring_role_arn');
    }
    set monitoringRoleArn(value) {
        this._monitoringRoleArn = value;
    }
    resetMonitoringRoleArn() {
        this._monitoringRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get monitoringRoleArnInput() {
        return this._monitoringRoleArn;
    }
    // multi_az - computed: true, optional: true, required: false
    _multiAz;
    get multiAz() {
        return this.getBooleanAttribute('multi_az');
    }
    set multiAz(value) {
        this._multiAz = value;
    }
    resetMultiAz() {
        this._multiAz = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get multiAzInput() {
        return this._multiAz;
    }
    // name - computed: true, optional: true, required: false
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    resetName() {
        this._name = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // nchar_character_set_name - computed: true, optional: true, required: false
    _ncharCharacterSetName;
    get ncharCharacterSetName() {
        return this.getStringAttribute('nchar_character_set_name');
    }
    set ncharCharacterSetName(value) {
        this._ncharCharacterSetName = value;
    }
    resetNcharCharacterSetName() {
        this._ncharCharacterSetName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ncharCharacterSetNameInput() {
        return this._ncharCharacterSetName;
    }
    // option_group_name - computed: true, optional: true, required: false
    _optionGroupName;
    get optionGroupName() {
        return this.getStringAttribute('option_group_name');
    }
    set optionGroupName(value) {
        this._optionGroupName = value;
    }
    resetOptionGroupName() {
        this._optionGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get optionGroupNameInput() {
        return this._optionGroupName;
    }
    // parameter_group_name - computed: true, optional: true, required: false
    _parameterGroupName;
    get parameterGroupName() {
        return this.getStringAttribute('parameter_group_name');
    }
    set parameterGroupName(value) {
        this._parameterGroupName = value;
    }
    resetParameterGroupName() {
        this._parameterGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parameterGroupNameInput() {
        return this._parameterGroupName;
    }
    // password - computed: false, optional: true, required: false
    _password;
    get password() {
        return this.getStringAttribute('password');
    }
    set password(value) {
        this._password = value;
    }
    resetPassword() {
        this._password = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passwordInput() {
        return this._password;
    }
    // performance_insights_enabled - computed: false, optional: true, required: false
    _performanceInsightsEnabled;
    get performanceInsightsEnabled() {
        return this.getBooleanAttribute('performance_insights_enabled');
    }
    set performanceInsightsEnabled(value) {
        this._performanceInsightsEnabled = value;
    }
    resetPerformanceInsightsEnabled() {
        this._performanceInsightsEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get performanceInsightsEnabledInput() {
        return this._performanceInsightsEnabled;
    }
    // performance_insights_kms_key_id - computed: true, optional: true, required: false
    _performanceInsightsKmsKeyId;
    get performanceInsightsKmsKeyId() {
        return this.getStringAttribute('performance_insights_kms_key_id');
    }
    set performanceInsightsKmsKeyId(value) {
        this._performanceInsightsKmsKeyId = value;
    }
    resetPerformanceInsightsKmsKeyId() {
        this._performanceInsightsKmsKeyId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get performanceInsightsKmsKeyIdInput() {
        return this._performanceInsightsKmsKeyId;
    }
    // performance_insights_retention_period - computed: true, optional: true, required: false
    _performanceInsightsRetentionPeriod;
    get performanceInsightsRetentionPeriod() {
        return this.getNumberAttribute('performance_insights_retention_period');
    }
    set performanceInsightsRetentionPeriod(value) {
        this._performanceInsightsRetentionPeriod = value;
    }
    resetPerformanceInsightsRetentionPeriod() {
        this._performanceInsightsRetentionPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get performanceInsightsRetentionPeriodInput() {
        return this._performanceInsightsRetentionPeriod;
    }
    // port - computed: true, optional: true, required: false
    _port;
    get port() {
        return this.getNumberAttribute('port');
    }
    set port(value) {
        this._port = value;
    }
    resetPort() {
        this._port = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get portInput() {
        return this._port;
    }
    // publicly_accessible - computed: false, optional: true, required: false
    _publiclyAccessible;
    get publiclyAccessible() {
        return this.getBooleanAttribute('publicly_accessible');
    }
    set publiclyAccessible(value) {
        this._publiclyAccessible = value;
    }
    resetPubliclyAccessible() {
        this._publiclyAccessible = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get publiclyAccessibleInput() {
        return this._publiclyAccessible;
    }
    // replica_mode - computed: false, optional: true, required: false
    _replicaMode;
    get replicaMode() {
        return this.getStringAttribute('replica_mode');
    }
    set replicaMode(value) {
        this._replicaMode = value;
    }
    resetReplicaMode() {
        this._replicaMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replicaModeInput() {
        return this._replicaMode;
    }
    // replicas - computed: true, optional: false, required: false
    get replicas() {
        return this.getListAttribute('replicas');
    }
    // replicate_source_db - computed: false, optional: true, required: false
    _replicateSourceDb;
    get replicateSourceDb() {
        return this.getStringAttribute('replicate_source_db');
    }
    set replicateSourceDb(value) {
        this._replicateSourceDb = value;
    }
    resetReplicateSourceDb() {
        this._replicateSourceDb = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replicateSourceDbInput() {
        return this._replicateSourceDb;
    }
    // resource_id - computed: true, optional: false, required: false
    get resourceId() {
        return this.getStringAttribute('resource_id');
    }
    // security_group_names - computed: false, optional: true, required: false
    _securityGroupNames;
    get securityGroupNames() {
        return this.getListAttribute('security_group_names');
    }
    set securityGroupNames(value) {
        this._securityGroupNames = value;
    }
    resetSecurityGroupNames() {
        this._securityGroupNames = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupNamesInput() {
        return this._securityGroupNames;
    }
    // skip_final_snapshot - computed: false, optional: true, required: false
    _skipFinalSnapshot;
    get skipFinalSnapshot() {
        return this.getBooleanAttribute('skip_final_snapshot');
    }
    set skipFinalSnapshot(value) {
        this._skipFinalSnapshot = value;
    }
    resetSkipFinalSnapshot() {
        this._skipFinalSnapshot = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get skipFinalSnapshotInput() {
        return this._skipFinalSnapshot;
    }
    // snapshot_identifier - computed: true, optional: true, required: false
    _snapshotIdentifier;
    get snapshotIdentifier() {
        return this.getStringAttribute('snapshot_identifier');
    }
    set snapshotIdentifier(value) {
        this._snapshotIdentifier = value;
    }
    resetSnapshotIdentifier() {
        this._snapshotIdentifier = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get snapshotIdentifierInput() {
        return this._snapshotIdentifier;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // storage_encrypted - computed: false, optional: true, required: false
    _storageEncrypted;
    get storageEncrypted() {
        return this.getBooleanAttribute('storage_encrypted');
    }
    set storageEncrypted(value) {
        this._storageEncrypted = value;
    }
    resetStorageEncrypted() {
        this._storageEncrypted = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get storageEncryptedInput() {
        return this._storageEncrypted;
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
    // timezone - computed: true, optional: true, required: false
    _timezone;
    get timezone() {
        return this.getStringAttribute('timezone');
    }
    set timezone(value) {
        this._timezone = value;
    }
    resetTimezone() {
        this._timezone = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timezoneInput() {
        return this._timezone;
    }
    // username - computed: true, optional: true, required: false
    _username;
    get username() {
        return this.getStringAttribute('username');
    }
    set username(value) {
        this._username = value;
    }
    resetUsername() {
        this._username = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get usernameInput() {
        return this._username;
    }
    // vpc_security_group_ids - computed: true, optional: true, required: false
    _vpcSecurityGroupIds;
    get vpcSecurityGroupIds() {
        return this.getListAttribute('vpc_security_group_ids');
    }
    set vpcSecurityGroupIds(value) {
        this._vpcSecurityGroupIds = value;
    }
    resetVpcSecurityGroupIds() {
        this._vpcSecurityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcSecurityGroupIdsInput() {
        return this._vpcSecurityGroupIds;
    }
    // restore_to_point_in_time - computed: false, optional: true, required: false
    _restoreToPointInTime = new DbInstanceRestoreToPointInTimeOutputReference(this, "restore_to_point_in_time", true);
    get restoreToPointInTime() {
        return this._restoreToPointInTime;
    }
    putRestoreToPointInTime(value) {
        this._restoreToPointInTime.internalValue = value;
    }
    resetRestoreToPointInTime() {
        this._restoreToPointInTime.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get restoreToPointInTimeInput() {
        return this._restoreToPointInTime.internalValue;
    }
    // s3_import - computed: false, optional: true, required: false
    _s3Import = new DbInstanceS3ImportOutputReference(this, "s3_import", true);
    get s3Import() {
        return this._s3Import;
    }
    putS3Import(value) {
        this._s3Import.internalValue = value;
    }
    resetS3Import() {
        this._s3Import.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3ImportInput() {
        return this._s3Import.internalValue;
    }
    // timeouts - computed: false, optional: true, required: false
    _timeouts = new DbInstanceTimeoutsOutputReference(this, "timeouts", true);
    get timeouts() {
        return this._timeouts;
    }
    putTimeouts(value) {
        this._timeouts.internalValue = value;
    }
    resetTimeouts() {
        this._timeouts.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timeoutsInput() {
        return this._timeouts.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            allocated_storage: cdktf.numberToTerraform(this._allocatedStorage),
            allow_major_version_upgrade: cdktf.booleanToTerraform(this._allowMajorVersionUpgrade),
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            auto_minor_version_upgrade: cdktf.booleanToTerraform(this._autoMinorVersionUpgrade),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            backup_retention_period: cdktf.numberToTerraform(this._backupRetentionPeriod),
            backup_window: cdktf.stringToTerraform(this._backupWindow),
            ca_cert_identifier: cdktf.stringToTerraform(this._caCertIdentifier),
            character_set_name: cdktf.stringToTerraform(this._characterSetName),
            copy_tags_to_snapshot: cdktf.booleanToTerraform(this._copyTagsToSnapshot),
            customer_owned_ip_enabled: cdktf.booleanToTerraform(this._customerOwnedIpEnabled),
            db_subnet_group_name: cdktf.stringToTerraform(this._dbSubnetGroupName),
            delete_automated_backups: cdktf.booleanToTerraform(this._deleteAutomatedBackups),
            deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
            domain: cdktf.stringToTerraform(this._domain),
            domain_iam_role_name: cdktf.stringToTerraform(this._domainIamRoleName),
            enabled_cloudwatch_logs_exports: cdktf.listMapper(cdktf.stringToTerraform)(this._enabledCloudwatchLogsExports),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
            iam_database_authentication_enabled: cdktf.booleanToTerraform(this._iamDatabaseAuthenticationEnabled),
            identifier: cdktf.stringToTerraform(this._identifier),
            identifier_prefix: cdktf.stringToTerraform(this._identifierPrefix),
            instance_class: cdktf.stringToTerraform(this._instanceClass),
            iops: cdktf.numberToTerraform(this._iops),
            kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
            license_model: cdktf.stringToTerraform(this._licenseModel),
            maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
            max_allocated_storage: cdktf.numberToTerraform(this._maxAllocatedStorage),
            monitoring_interval: cdktf.numberToTerraform(this._monitoringInterval),
            monitoring_role_arn: cdktf.stringToTerraform(this._monitoringRoleArn),
            multi_az: cdktf.booleanToTerraform(this._multiAz),
            name: cdktf.stringToTerraform(this._name),
            nchar_character_set_name: cdktf.stringToTerraform(this._ncharCharacterSetName),
            option_group_name: cdktf.stringToTerraform(this._optionGroupName),
            parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
            password: cdktf.stringToTerraform(this._password),
            performance_insights_enabled: cdktf.booleanToTerraform(this._performanceInsightsEnabled),
            performance_insights_kms_key_id: cdktf.stringToTerraform(this._performanceInsightsKmsKeyId),
            performance_insights_retention_period: cdktf.numberToTerraform(this._performanceInsightsRetentionPeriod),
            port: cdktf.numberToTerraform(this._port),
            publicly_accessible: cdktf.booleanToTerraform(this._publiclyAccessible),
            replica_mode: cdktf.stringToTerraform(this._replicaMode),
            replicate_source_db: cdktf.stringToTerraform(this._replicateSourceDb),
            security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
            skip_final_snapshot: cdktf.booleanToTerraform(this._skipFinalSnapshot),
            snapshot_identifier: cdktf.stringToTerraform(this._snapshotIdentifier),
            storage_encrypted: cdktf.booleanToTerraform(this._storageEncrypted),
            storage_type: cdktf.stringToTerraform(this._storageType),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            timezone: cdktf.stringToTerraform(this._timezone),
            username: cdktf.stringToTerraform(this._username),
            vpc_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._vpcSecurityGroupIds),
            restore_to_point_in_time: dbInstanceRestoreToPointInTimeToTerraform(this._restoreToPointInTime.internalValue),
            s3_import: dbInstanceS3ImportToTerraform(this._s3Import.internalValue),
            timeouts: dbInstanceTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGItaW5zdGFuY2UuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRiLWluc3RhbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQW9RL0IsTUFBTSxVQUFVLHlDQUF5QyxDQUFDLE1BQXVGO0lBQy9JLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsWUFBWSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsV0FBVyxDQUFDO1FBQzFELDZCQUE2QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsMEJBQTBCLENBQUM7UUFDMUYsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxtQkFBbUIsQ0FBQztRQUM1RSwwQkFBMEIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsTUFBTyxDQUFDLHVCQUF1QixDQUFDO0tBQ3RGLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxPQUFPLDZDQUE4QyxTQUFRLEtBQUssQ0FBQyxhQUFhO0lBQzVFLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFOUI7Ozs7TUFJRTtJQUNGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDdEMsTUFBTSxtQkFBbUIs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