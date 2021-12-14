// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html aws_elasticache_global_replication_group}
*/
export class ElasticacheGlobalReplicationGroup extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_elasticache_global_replication_group";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticache_global_replication_group.html aws_elasticache_global_replication_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticacheGlobalReplicationGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_elasticache_global_replication_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._globalReplicationGroupDescription = config.globalReplicationGroupDescription;
        this._globalReplicationGroupIdSuffix = config.globalReplicationGroupIdSuffix;
        this._primaryReplicationGroupId = config.primaryReplicationGroupId;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // actual_engine_version - computed: true, optional: false, required: false
    get actualEngineVersion() {
        return this.getStringAttribute('actual_engine_version');
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // at_rest_encryption_enabled - computed: true, optional: false, required: false
    get atRestEncryptionEnabled() {
        return this.getBooleanAttribute('at_rest_encryption_enabled');
    }
    // auth_token_enabled - computed: true, optional: false, required: false
    get authTokenEnabled() {
        return this.getBooleanAttribute('auth_token_enabled');
    }
    // cache_node_type - computed: true, optional: false, required: false
    get cacheNodeType() {
        return this.getStringAttribute('cache_node_type');
    }
    // cluster_enabled - computed: true, optional: false, required: false
    get clusterEnabled() {
        return this.getBooleanAttribute('cluster_enabled');
    }
    // engine - computed: true, optional: false, required: false
    get engine() {
        return this.getStringAttribute('engine');
    }
    // engine_version_actual - computed: true, optional: false, required: false
    get engineVersionActual() {
        return this.getStringAttribute('engine_version_actual');
    }
    // global_replication_group_description - computed: false, optional: true, required: false
    _globalReplicationGroupDescription;
    get globalReplicationGroupDescription() {
        return this.getStringAttribute('global_replication_group_description');
    }
    set globalReplicationGroupDescription(value) {
        this._globalReplicationGroupDescription = value;
    }
    resetGlobalReplicationGroupDescription() {
        this._globalReplicationGroupDescription = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get globalReplicationGroupDescriptionInput() {
        return this._globalReplicationGroupDescription;
    }
    // global_replication_group_id - computed: true, optional: false, required: false
    get globalReplicationGroupId() {
        return this.getStringAttribute('global_replication_group_id');
    }
    // global_replication_group_id_suffix - computed: false, optional: false, required: true
    _globalReplicationGroupIdSuffix;
    get globalReplicationGroupIdSuffix() {
        return this.getStringAttribute('global_replication_group_id_suffix');
    }
    set globalReplicationGroupIdSuffix(value) {
        this._globalReplicationGroupIdSuffix = value;
    }
    // Temporarily expose input value. Use with caution.
    get globalReplicationGroupIdSuffixInput() {
        return this._globalReplicationGroupIdSuffix;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // primary_replication_group_id - computed: false, optional: false, required: true
    _primaryReplicationGroupId;
    get primaryReplicationGroupId() {
        return this.getStringAttribute('primary_replication_group_id');
    }
    set primaryReplicationGroupId(value) {
        this._primaryReplicationGroupId = value;
    }
    // Temporarily expose input value. Use with caution.
    get primaryReplicationGroupIdInput() {
        return this._primaryReplicationGroupId;
    }
    // transit_encryption_enabled - computed: true, optional: false, required: false
    get transitEncryptionEnabled() {
        return this.getBooleanAttribute('transit_encryption_enabled');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            global_replication_group_description: cdktf.stringToTerraform(this._globalReplicationGroupDescription),
            global_replication_group_id_suffix: cdktf.stringToTerraform(this._globalReplicationGroupIdSuffix),
            primary_replication_group_id: cdktf.stringToTerraform(this._primaryReplicationGroupId),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxhc3RpY2FjaGUtZ2xvYmFsLXJlcGxpY2F0aW9uLWdyb3VwLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJlbGFzdGljYWNoZS1nbG9iYWwtcmVwbGljYXRpb24tZ3JvdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBb0IvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyxpQ0FBa0MsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRTVFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVywwQ0FBMEMsQ0FBQztJQUUzRixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUErQztRQUM5RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLDBDQUEwQztZQUNqRSwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGtDQUFrQyxHQUFHLE1BQU0sQ0FBQyxpQ0FBaUMsQ0FBQztRQUNuRixJQUFJLENBQUMsK0JBQStCLEdBQUcsTUFBTSxDQUFDLDhCQUE4QixDQUFDO1FBQzdFLElBQUksQ0FBQywwQkFBMEIsR0FBRyxNQUFNLENBQUMseUJBQXlCLENBQUM7SUFDckUsQ0FBQztJQUVELGFBQWE7SUFDYixhQUFhO0lBQ2IsYUFBYTtJQUViLDJFQUEyRTtJQUMzRSxJQUFXLG1CQUFtQjtRQUM1QixPQUFPLElB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