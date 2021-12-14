// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class ElasticacheClusterCacheNodes extends cdktf.ComplexComputedList {
    // address - computed: true, optional: false, required: false
    get address() {
        return this.getStringAttribute('address');
    }
    // availability_zone - computed: true, optional: false, required: false
    get availabilityZone() {
        return this.getStringAttribute('availability_zone');
    }
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // port - computed: true, optional: false, required: false
    get port() {
        return this.getNumberAttribute('port');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html aws_elasticache_cluster}
*/
export class ElasticacheCluster extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_elasticache_cluster";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_cluster.html aws_elasticache_cluster} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheClusterConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_elasticache_cluster',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._applyImmediately = config.applyImmediately;
        this._availabilityZone = config.availabilityZone;
        this._azMode = config.azMode;
        this._clusterId = config.clusterId;
        this._engine = config.engine;
        this._engineVersion = config.engineVersion;
        this._finalSnapshotIdentifier = config.finalSnapshotIdentifier;
        this._maintenanceWindow = config.maintenanceWindow;
        this._nodeType = config.nodeType;
        this._notificationTopicArn = config.notificationTopicArn;
        this._numCacheNodes = config.numCacheNodes;
        this._parameterGroupName = config.parameterGroupName;
        this._port = config.port;
        this._preferredAvailabilityZones = config.preferredAvailabilityZones;
        this._replicationGroupId = config.replicationGroupId;
        this._securityGroupIds = config.securityGroupIds;
        this._securityGroupNames = config.securityGroupNames;
        this._snapshotArns = config.snapshotArns;
        this._snapshotName = config.snapshotName;
        this._snapshotRetentionLimit = config.snapshotRetentionLimit;
        this._snapshotWindow = config.snapshotWindow;
        this._subnetGroupName = config.subnetGroupName;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
    }
    // ==========
    // ATTRIBUTES
    // ==========
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
    // az_mode - computed: true, optional: true, required: false
    _azMode;
    get azMode() {
        return this.getStringAttribute('az_mode');
    }
    set azMode(value) {
        this._azMode = value;
    }
    resetAzMode() {
        this._azMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get azModeInput() {
        return this._azMode;
    }
    // cache_nodes - computed: true, optional: false, required: false
    cacheNodes(index) {
        return new ElasticacheClusterCacheNodes(this, 'cache_nodes', index);
    }
    // cluster_address - computed: true, optional: false, required: false
    get clusterAddress() {
        return this.getStringAttribute('cluster_address');
    }
    // cluster_id - computed: false, optional: false, required: true
    _clusterId;
    get clusterId() {
        return this.getStringAttribute('cluster_id');
    }
    set clusterId(value) {
        this._clusterId = value;
    }
    // Temporarily expose input value. Use with caution.
    get clusterIdInput() {
        return this._clusterId;
    }
    // configuration_endpoint - computed: true, optional: false, required: false
    get configurationEndpoint() {
        return this.getStringAttribute('configuration_endpoint');
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
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // node_type - computed: true, optional: true, required: false
    _nodeType;
    get nodeType() {
        return this.getStringAttribute('node_type');
    }
    set nodeType(value) {
        this._nodeType = value;
    }
    resetNodeType() {
        this._nodeType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get nodeTypeInput() {
        return this._nodeType;
    }
    // notification_topic_arn - computed: false, optional: true, required: false
    _notificationTopicArn;
    get notificationTopicArn() {
        return this.getStringAttribute('notification_topic_arn');
    }
    set notificationTopicArn(value) {
        this._notificationTopicArn = value;
    }
    resetNotificationTopicArn() {
        this._notificationTopicArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get notificationTopicArnInput() {
        return this._notificationTopicArn;
    }
    // num_cache_nodes - computed: true, optional: true, required: false
    _numCacheNodes;
    get numCacheNodes() {
        return this.getNumberAttribute('num_cache_nodes');
    }
    set numCacheNodes(value) {
        this._numCacheNodes = value;
    }
    resetNumCacheNodes() {
        this._numCacheNodes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get numCacheNodesInput() {
        return this._numCacheNodes;
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
    // preferred_availability_zones - computed: false, optional: true, required: false
    _preferredAvailabilityZones;
    get preferredAvailabilityZones() {
        return this.getListAttribute('preferred_availability_zones');
    }
    set preferredAvailabilityZones(value) {
        this._preferredAvailabilityZones = value;
    }
    resetPreferredAvailabilityZones() {
        this._preferredAvailabilityZones = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get preferredAvailabilityZonesInput() {
        return this._preferredAvailabilityZones;
    }
    // replication_group_id - computed: true, optional: true, required: false
    _replicationGroupId;
    get replicationGroupId() {
        return this.getStringAttribute('replication_group_id');
    }
    set replicationGroupId(value) {
        this._replicationGroupId = value;
    }
    resetReplicationGroupId() {
        this._replicationGroupId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get replicationGroupIdInput() {
        return this._replicationGroupId;
    }
    // security_group_ids - computed: true, optional: true, required: false
    _securityGroupIds;
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    set securityGroupIds(value) {
        this._securityGroupIds = value;
    }
    resetSecurityGroupIds() {
        this._securityGroupIds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupIdsInput() {
        return this._securityGroupIds;
    }
    // security_group_names - computed: true, optional: true, required: false
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
    // snapshot_arns - computed: false, optional: true, required: false
    _snapshotArns;
    get snapshotArns() {
        return this.getListAttribute('snapshot_arns');
    }
    set snapshotArns(value) {
        this._snapshotArns = value;
    }
    resetSnapshotArns() {
        this._snapshotArns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get snapshotArnsInput() {
        return this._snapshotArns;
    }
    // snapshot_name - computed: false, optional: true, required: false
    _snapshotName;
    get snapshotName() {
        return this.getStringAttribute('snapshot_name');
    }
    set snapshotName(value) {
        this._snapshotName = value;
    }
    resetSnapshotName() {
        this._snapshotName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get snapshotNameInput() {
        return this._snapshotName;
    }
    // snapshot_retention_limit - computed: false, optional: true, required: false
    _snapshotRetentionLimit;
    get snapshotRetentionLimit() {
        return this.getNumberAttribute('snapshot_retention_limit');
    }
    set snapshotRetentionLimit(value) {
        this._snapshotRetentionLimit = value;
    }
    resetSnapshotRetentionLimit() {
        this._snapshotRetentionLimit = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get snapshotRetentionLimitInput() {
        return this._snapshotRetentionLimit;
    }
    // snapshot_window - computed: true, optional: true, required: false
    _snapshotWindow;
    get snapshotWindow() {
        return this.getStringAttribute('snapshot_window');
    }
    set snapshotWindow(value) {
        this._snapshotWindow = value;
    }
    resetSnapshotWindow() {
        this._snapshotWindow = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get snapshotWindowInput() {
        return this._snapshotWindow;
    }
    // subnet_group_name - computed: true, optional: true, required: false
    _subnetGroupName;
    get subnetGroupName() {
        return this.getStringAttribute('subnet_group_name');
    }
    set subnetGroupName(value) {
        this._subnetGroupName = value;
    }
    resetSubnetGroupName() {
        this._subnetGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get subnetGroupNameInput() {
        return this._subnetGroupName;
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
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            apply_immediately: cdktf.booleanToTerraform(this._applyImmediately),
            availability_zone: cdktf.stringToTerraform(this._availabilityZone),
            az_mode: cdktf.stringToTerraform(this._azMode),
            cluster_id: cdktf.stringToTerraform(this._clusterId),
            engine: cdktf.stringToTerraform(this._engine),
            engine_version: cdktf.stringToTerraform(this._engineVersion),
            final_snapshot_identifier: cdktf.stringToTerraform(this._finalSnapshotIdentifier),
            maintenance_window: cdktf.stringToTerraform(this._maintenanceWindow),
            node_type: cdktf.stringToTerraform(this._nodeType),
            notification_topic_arn: cdktf.stringToTerraform(this._notificationTopicArn),
            num_cache_nodes: cdktf.numberToTerraform(this._numCacheNodes),
            parameter_group_name: cdktf.stringToTerraform(this._parameterGroupName),
            port: cdktf.numberToTerraform(this._port),
            preferred_availability_zones: cdktf.listMapper(cdktf.stringToTerraform)(this._preferredAvailabilityZones),
            replication_group_id: cdktf.stringToTerraform(this._replicationGroupId),
            security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupIds),
            security_group_names: cdktf.listMapper(cdktf.stringToTerraform)(this._securityGroupNames),
            snapshot_arns: cdktf.listMapper(cdktf.stringToTerraform)(this._snapshotArns),
            snapshot_name: cdktf.stringToTerraform(this._snapshotName),
            snapshot_retention_limit: cdktf.numberToTerraform(this._snapshotRetentionLimit),
            snapshot_window: cdktf.stringToTerraform(this._snapshotWindow),
            subnet_group_name: cdktf.stringToTerraform(this._subnetGroupName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxhc3RpY2FjaGUtY2x1c3Rlci5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsiZWxhc3RpY2FjaGUtY2x1c3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUF1Ry9CLE1BQU0sT0FBTyw0QkFBNkIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXpFLDZEQUE2RDtJQUM3RCxJQUFXLE9BQU87UUFDaEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELHVFQUF1RTtJQUN2RSxJQUFXLGdCQUFnQjtRQUN6QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx3REFBd0Q7SUFDeEQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDBEQUEwRDtJQUMxRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBQ0Y7QUFFRDs7RUFFRTtBQUNGLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRTdELG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyx5QkFBeUIsQ0FBQztJQUUxRSxjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUFnQztRQUMvRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLHlCQUF5QjtZQUNoRCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxR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