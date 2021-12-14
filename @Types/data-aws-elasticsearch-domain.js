// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsElasticsearchDomainAdvancedSecurityOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // internal_user_database_enabled - computed: true, optional: false, required: false
    get internalUserDatabaseEnabled() {
        return this.getBooleanAttribute('internal_user_database_enabled');
    }
}
export class DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceScheduleDuration extends cdktf.ComplexComputedList {
    // unit - computed: true, optional: false, required: false
    get unit() {
        return this.getStringAttribute('unit');
    }
    // value - computed: true, optional: false, required: false
    get value() {
        return this.getNumberAttribute('value');
    }
}
export class DataAwsElasticsearchDomainAutoTuneOptionsMaintenanceSchedule extends cdktf.ComplexComputedList {
    // cron_expression_for_recurrence - computed: true, optional: false, required: false
    get cronExpressionForRecurrence() {
        return this.getStringAttribute('cron_expression_for_recurrence');
    }
    // duration - computed: true, optional: false, required: false
    get duration() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('duration');
    }
    // start_at - computed: true, optional: false, required: false
    get startAt() {
        return this.getStringAttribute('start_at');
    }
}
export class DataAwsElasticsearchDomainAutoTuneOptions extends cdktf.ComplexComputedList {
    // desired_state - computed: true, optional: false, required: false
    get desiredState() {
        return this.getStringAttribute('desired_state');
    }
    // maintenance_schedule - computed: true, optional: false, required: false
    get maintenanceSchedule() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('maintenance_schedule');
    }
    // rollback_on_disable - computed: true, optional: false, required: false
    get rollbackOnDisable() {
        return this.getStringAttribute('rollback_on_disable');
    }
}
export class DataAwsElasticsearchDomainClusterConfigZoneAwarenessConfig extends cdktf.ComplexComputedList {
    // availability_zone_count - computed: true, optional: false, required: false
    get availabilityZoneCount() {
        return this.getNumberAttribute('availability_zone_count');
    }
}
export class DataAwsElasticsearchDomainClusterConfig extends cdktf.ComplexComputedList {
    // dedicated_master_count - computed: true, optional: false, required: false
    get dedicatedMasterCount() {
        return this.getNumberAttribute('dedicated_master_count');
    }
    // dedicated_master_enabled - computed: true, optional: false, required: false
    get dedicatedMasterEnabled() {
        return this.getBooleanAttribute('dedicated_master_enabled');
    }
    // dedicated_master_type - computed: true, optional: false, required: false
    get dedicatedMasterType() {
        return this.getStringAttribute('dedicated_master_type');
    }
    // instance_count - computed: true, optional: false, required: false
    get instanceCount() {
        return this.getNumberAttribute('instance_count');
    }
    // instance_type - computed: true, optional: false, required: false
    get instanceType() {
        return this.getStringAttribute('instance_type');
    }
    // warm_count - computed: true, optional: false, required: false
    get warmCount() {
        return this.getNumberAttribute('warm_count');
    }
    // warm_enabled - computed: true, optional: false, required: false
    get warmEnabled() {
        return this.getBooleanAttribute('warm_enabled');
    }
    // warm_type - computed: true, optional: false, required: false
    get warmType() {
        return this.getStringAttribute('warm_type');
    }
    // zone_awareness_config - computed: true, optional: false, required: false
    get zoneAwarenessConfig() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('zone_awareness_config');
    }
    // zone_awareness_enabled - computed: true, optional: false, required: false
    get zoneAwarenessEnabled() {
        return this.getBooleanAttribute('zone_awareness_enabled');
    }
}
export class DataAwsElasticsearchDomainCognitoOptions extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // identity_pool_id - computed: true, optional: false, required: false
    get identityPoolId() {
        return this.getStringAttribute('identity_pool_id');
    }
    // role_arn - computed: true, optional: false, required: false
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    // user_pool_id - computed: true, optional: false, required: false
    get userPoolId() {
        return this.getStringAttribute('user_pool_id');
    }
}
export class DataAwsElasticsearchDomainEbsOptions extends cdktf.ComplexComputedList {
    // ebs_enabled - computed: true, optional: false, required: false
    get ebsEnabled() {
        return this.getBooleanAttribute('ebs_enabled');
    }
    // iops - computed: true, optional: false, required: false
    get iops() {
        return this.getNumberAttribute('iops');
    }
    // volume_size - computed: true, optional: false, required: false
    get volumeSize() {
        return this.getNumberAttribute('volume_size');
    }
    // volume_type - computed: true, optional: false, required: false
    get volumeType() {
        return this.getStringAttribute('volume_type');
    }
}
export class DataAwsElasticsearchDomainEncryptionAtRest extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // kms_key_id - computed: true, optional: false, required: false
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
}
export class DataAwsElasticsearchDomainLogPublishingOptions extends cdktf.ComplexComputedList {
    // cloudwatch_log_group_arn - computed: true, optional: false, required: false
    get cloudwatchLogGroupArn() {
        return this.getStringAttribute('cloudwatch_log_group_arn');
    }
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    // log_type - computed: true, optional: false, required: false
    get logType() {
        return this.getStringAttribute('log_type');
    }
}
export class DataAwsElasticsearchDomainNodeToNodeEncryption extends cdktf.ComplexComputedList {
    // enabled - computed: true, optional: false, required: false
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
}
export class DataAwsElasticsearchDomainSnapshotOptions extends cdktf.ComplexComputedList {
    // automated_snapshot_start_hour - computed: true, optional: false, required: false
    get automatedSnapshotStartHour() {
        return this.getNumberAttribute('automated_snapshot_start_hour');
    }
}
export class DataAwsElasticsearchDomainVpcOptions extends cdktf.ComplexComputedList {
    // availability_zones - computed: true, optional: false, required: false
    get availabilityZones() {
        return this.getListAttribute('availability_zones');
    }
    // security_group_ids - computed: true, optional: false, required: false
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    // subnet_ids - computed: true, optional: false, required: false
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    // vpc_id - computed: true, optional: false, required: false
    get vpcId() {
        return this.getStringAttribute('vpc_id');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html aws_elasticsearch_domain}
*/
export class DataAwsElasticsearchDomain extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_elasticsearch_domain";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elasticsearch_domain.html aws_elasticsearch_domain} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticsearchDomainConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_elasticsearch_domain',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._domainName = config.domainName;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // access_policies - computed: true, optional: false, required: false
    get accessPolicies() {
        return this.getStringAttribute('access_policies');
    }
    // advanced_options - computed: true, optional: false, required: false
    advancedOptions(key) {
        return new cdktf.StringMap(this, 'advanced_options').lookup(key);
    }
    // advanced_security_options - computed: true, optional: false, required: false
    advancedSecurityOptions(index) {
        return new DataAwsElasticsearchDomainAdvancedSecurityOptions(this, 'advanced_security_options', index);
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // auto_tune_options - computed: true, optional: false, required: false
    autoTuneOptions(index) {
        return new DataAwsElasticsearchDomainAutoTuneOptions(this, 'auto_tune_options', index);
    }
    // cluster_config - computed: true, optional: false, required: false
    clusterConfig(index) {
        return new DataAwsElasticsearchDomainClusterConfig(this, 'cluster_config', index);
    }
    // cognito_options - computed: true, optional: false, required: false
    cognitoOptions(index) {
        return new DataAwsElasticsearchDomainCognitoOptions(this, 'cognito_options', index);
    }
    // created - computed: true, optional: false, required: false
    get created() {
        return this.getBooleanAttribute('created');
    }
    // deleted - computed: true, optional: false, required: false
    get deleted() {
        return this.getBooleanAttribute('deleted');
    }
    // domain_id - computed: true, optional: false, required: false
    get domainId() {
        return this.getStringAttribute('domain_id');
    }
    // domain_name - computed: false, optional: false, required: true
    _domainName;
    get domainName() {
        return this.getStringAttribute('domain_name');
    }
    set domainName(value) {
        this._domainName = value;
    }
    // Temporarily expose input value. Use with caution.
    get domainNameInput() {
        return this._domainName;
    }
    // ebs_options - computed: true, optional: false, required: false
    ebsOptions(index) {
        return new DataAwsElasticsearchDomainEbsOptions(this, 'ebs_options', index);
    }
    // elasticsearch_version - computed: true, optional: false, required: false
    get elasticsearchVersion() {
        return this.getStringAttribute('elasticsearch_version');
    }
    // encryption_at_rest - computed: true, optional: false, required: false
    encryptionAtRest(index) {
        return new DataAwsElasticsearchDomainEncryptionAtRest(this, 'encryption_at_rest', index);
    }
    // endpoint - computed: true, optional: false, required: false
    get endpoint() {
        return this.getStringAttribute('endpoint');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // kibana_endpoint - computed: true, optional: false, required: false
    get kibanaEndpoint() {
        return this.getStringAttribute('kibana_endpoint');
    }
    // log_publishing_options - computed: true, optional: false, required: false
    logPublishingOptions(index) {
        return new DataAwsElasticsearchDomainLogPublishingOptions(this, 'log_publishing_options', index);
    }
    // node_to_node_encryption - computed: true, optional: false, required: false
    nodeToNodeEncryption(index) {
        return new DataAwsElasticsearchDomainNodeToNodeEncryption(this, 'node_to_node_encryption', index);
    }
    // processing - computed: true, optional: false, required: false
    get processing() {
        return this.getBooleanAttribute('processing');
    }
    // snapshot_options - computed: true, optional: false, required: false
    snapshotOptions(index) {
        return new DataAwsElasticsearchDomainSnapshotOptions(this, 'snapshot_options', index);
    }
    // tags - computed: true, optional: true, required: false
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
    // vpc_options - computed: true, optional: false, required: false
    vpcOptions(index) {
        return new DataAwsElasticsearchDomainVpcOptions(this, 'vpc_options', index);
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            domain_name: cdktf.stringToTerraform(this._domainName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtZWxhc3RpY3NlYXJjaC1kb21haW4uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRhdGEtYXdzLWVsYXN0aWNzZWFyY2gtZG9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQWUvQixNQUFNLE9BQU8saURBQWtELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUU5Riw2REFBNkQ7SUFDN0QsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBUSxDQUFDO0lBQ3BELENBQUM7SUFFRCxvRkFBb0Y7SUFDcEYsSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0NBQWdDLENBQVEsQ0FBQztJQUMzRSxDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8sb0VBQXFFLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUVqSCwwREFBMEQ7SUFDMUQsSUFBVyxJQUFJO1FBQ2IsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELDJEQUEyRDtJQUMzRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0Y7QUFDRCxNQUFNLE9BQU8sNERBQTZELFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV6RyxvRkFBb0Y7SUFDcEYsSUFBVywyQkFBMkI7UUFDcEMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsOERBQThEO0lBQzlELElBQVcsUUFBUTtRQUNqQixvREFBb0Q7UUFDcEQsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFRLENBQUM7SUFDM0QsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxJQUFX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