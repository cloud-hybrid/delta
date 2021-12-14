// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class DataAwsMqBrokerConfiguration extends cdktf.ComplexComputedList {
    // id - computed: true, optional: false, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // revision - computed: true, optional: false, required: false
    get revision() {
        return this.getNumberAttribute('revision');
    }
}
export class DataAwsMqBrokerEncryptionOptions extends cdktf.ComplexComputedList {
    // kms_key_id - computed: true, optional: false, required: false
    get kmsKeyId() {
        return this.getStringAttribute('kms_key_id');
    }
    // use_aws_owned_key - computed: true, optional: false, required: false
    get useAwsOwnedKey() {
        return this.getBooleanAttribute('use_aws_owned_key');
    }
}
export class DataAwsMqBrokerInstances extends cdktf.ComplexComputedList {
    // console_url - computed: true, optional: false, required: false
    get consoleUrl() {
        return this.getStringAttribute('console_url');
    }
    // endpoints - computed: true, optional: false, required: false
    get endpoints() {
        return this.getListAttribute('endpoints');
    }
    // ip_address - computed: true, optional: false, required: false
    get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
}
export class DataAwsMqBrokerLdapServerMetadata extends cdktf.ComplexComputedList {
    // hosts - computed: true, optional: false, required: false
    get hosts() {
        return this.getListAttribute('hosts');
    }
    // role_base - computed: true, optional: false, required: false
    get roleBase() {
        return this.getStringAttribute('role_base');
    }
    // role_name - computed: true, optional: false, required: false
    get roleName() {
        return this.getStringAttribute('role_name');
    }
    // role_search_matching - computed: true, optional: false, required: false
    get roleSearchMatching() {
        return this.getStringAttribute('role_search_matching');
    }
    // role_search_subtree - computed: true, optional: false, required: false
    get roleSearchSubtree() {
        return this.getBooleanAttribute('role_search_subtree');
    }
    // service_account_password - computed: true, optional: false, required: false
    get serviceAccountPassword() {
        return this.getStringAttribute('service_account_password');
    }
    // service_account_username - computed: true, optional: false, required: false
    get serviceAccountUsername() {
        return this.getStringAttribute('service_account_username');
    }
    // user_base - computed: true, optional: false, required: false
    get userBase() {
        return this.getStringAttribute('user_base');
    }
    // user_role_name - computed: true, optional: false, required: false
    get userRoleName() {
        return this.getStringAttribute('user_role_name');
    }
    // user_search_matching - computed: true, optional: false, required: false
    get userSearchMatching() {
        return this.getStringAttribute('user_search_matching');
    }
    // user_search_subtree - computed: true, optional: false, required: false
    get userSearchSubtree() {
        return this.getBooleanAttribute('user_search_subtree');
    }
}
export class DataAwsMqBrokerLogs extends cdktf.ComplexComputedList {
    // audit - computed: true, optional: false, required: false
    get audit() {
        return this.getStringAttribute('audit');
    }
    // general - computed: true, optional: false, required: false
    get general() {
        return this.getBooleanAttribute('general');
    }
}
export class DataAwsMqBrokerMaintenanceWindowStartTime extends cdktf.ComplexComputedList {
    // day_of_week - computed: true, optional: false, required: false
    get dayOfWeek() {
        return this.getStringAttribute('day_of_week');
    }
    // time_of_day - computed: true, optional: false, required: false
    get timeOfDay() {
        return this.getStringAttribute('time_of_day');
    }
    // time_zone - computed: true, optional: false, required: false
    get timeZone() {
        return this.getStringAttribute('time_zone');
    }
}
export class DataAwsMqBrokerUser extends cdktf.ComplexComputedList {
    // console_access - computed: true, optional: false, required: false
    get consoleAccess() {
        return this.getBooleanAttribute('console_access');
    }
    // groups - computed: true, optional: false, required: false
    get groups() {
        return this.getListAttribute('groups');
    }
    // username - computed: true, optional: false, required: false
    get username() {
        return this.getStringAttribute('username');
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html aws_mq_broker}
*/
export class DataAwsMqBroker extends cdktf.TerraformDataSource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_mq_broker";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/mq_broker.html aws_mq_broker} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsMqBrokerConfig = {}
    */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_mq_broker',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._brokerId = config.brokerId;
        this._brokerName = config.brokerName;
        this._tags = config.tags;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // authentication_strategy - computed: true, optional: false, required: false
    get authenticationStrategy() {
        return this.getStringAttribute('authentication_strategy');
    }
    // auto_minor_version_upgrade - computed: true, optional: false, required: false
    get autoMinorVersionUpgrade() {
        return this.getBooleanAttribute('auto_minor_version_upgrade');
    }
    // broker_id - computed: true, optional: true, required: false
    _brokerId;
    get brokerId() {
        return this.getStringAttribute('broker_id');
    }
    set brokerId(value) {
        this._brokerId = value;
    }
    resetBrokerId() {
        this._brokerId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get brokerIdInput() {
        return this._brokerId;
    }
    // broker_name - computed: true, optional: true, required: false
    _brokerName;
    get brokerName() {
        return this.getStringAttribute('broker_name');
    }
    set brokerName(value) {
        this._brokerName = value;
    }
    resetBrokerName() {
        this._brokerName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get brokerNameInput() {
        return this._brokerName;
    }
    // configuration - computed: true, optional: false, required: false
    configuration(index) {
        return new DataAwsMqBrokerConfiguration(this, 'configuration', index);
    }
    // deployment_mode - computed: true, optional: false, required: false
    get deploymentMode() {
        return this.getStringAttribute('deployment_mode');
    }
    // encryption_options - computed: true, optional: false, required: false
    encryptionOptions(index) {
        return new DataAwsMqBrokerEncryptionOptions(this, 'encryption_options', index);
    }
    // engine_type - computed: true, optional: false, required: false
    get engineType() {
        return this.getStringAttribute('engine_type');
    }
    // engine_version - computed: true, optional: false, required: false
    get engineVersion() {
        return this.getStringAttribute('engine_version');
    }
    // host_instance_type - computed: true, optional: false, required: false
    get hostInstanceType() {
        return this.getStringAttribute('host_instance_type');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // instances - computed: true, optional: false, required: false
    instances(index) {
        return new DataAwsMqBrokerInstances(this, 'instances', index);
    }
    // ldap_server_metadata - computed: true, optional: false, required: false
    ldapServerMetadata(index) {
        return new DataAwsMqBrokerLdapServerMetadata(this, 'ldap_server_metadata', index);
    }
    // logs - computed: true, optional: false, required: false
    logs(index) {
        return new DataAwsMqBrokerLogs(this, 'logs', index);
    }
    // maintenance_window_start_time - computed: true, optional: false, required: false
    maintenanceWindowStartTime(index) {
        return new DataAwsMqBrokerMaintenanceWindowStartTime(this, 'maintenance_window_start_time', index);
    }
    // publicly_accessible - computed: true, optional: false, required: false
    get publiclyAccessible() {
        return this.getBooleanAttribute('publicly_accessible');
    }
    // security_groups - computed: true, optional: false, required: false
    get securityGroups() {
        return this.getListAttribute('security_groups');
    }
    // storage_type - computed: true, optional: false, required: false
    get storageType() {
        return this.getStringAttribute('storage_type');
    }
    // subnet_ids - computed: true, optional: false, required: false
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
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
    // user - computed: true, optional: false, required: false
    user(index) {
        return new DataAwsMqBrokerUser(this, 'user', index);
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            broker_id: cdktf.stringToTerraform(this._brokerId),
            broker_name: cdktf.stringToTerraform(this._brokerName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1hd3MtbXEtYnJva2VyLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJkYXRhLWF3cy1tcS1icm9rZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBbUIvQixNQUFNLE9BQU8sNEJBQTZCLFNBQVEsS0FBSyxDQUFDLG1CQUFtQjtJQUV6RSx3REFBd0Q7SUFDeEQsSUFBVyxFQUFFO1FBQ1gsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDhEQUE4RDtJQUM5RCxJQUFXLFFBQVE7UUFDakIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLGdDQUFpQyxTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFN0UsZ0VBQWdFO0lBQ2hFLElBQVcsUUFBUTtRQUNqQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsdUVBQXVFO0lBQ3ZFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBUSxDQUFDO0lBQzlELENBQUM7Q0FDRjtBQUNELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRXJFLGlFQUFpRTtJQUNqRSxJQUFXLFVBQVU7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELCtEQUErRDtJQUMvRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELGdFQUFnRTtJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMs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