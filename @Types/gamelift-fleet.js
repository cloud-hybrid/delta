// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function gameliftFleetEc2InboundPermissionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        from_port: cdktf.numberToTerraform(struct.fromPort),
        ip_range: cdktf.stringToTerraform(struct.ipRange),
        protocol: cdktf.stringToTerraform(struct.protocol),
        to_port: cdktf.numberToTerraform(struct.toPort),
    };
}
export function gameliftFleetResourceCreationLimitPolicyToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        new_game_sessions_per_creator: cdktf.numberToTerraform(struct.newGameSessionsPerCreator),
        policy_period_in_minutes: cdktf.numberToTerraform(struct.policyPeriodInMinutes),
    };
}
export class GameliftFleetResourceCreationLimitPolicyOutputReference extends cdktf.ComplexObject {
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
        if (this._newGameSessionsPerCreator) {
            hasAnyValues = true;
            internalValueResult.newGameSessionsPerCreator = this._newGameSessionsPerCreator;
        }
        if (this._policyPeriodInMinutes) {
            hasAnyValues = true;
            internalValueResult.policyPeriodInMinutes = this._policyPeriodInMinutes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._newGameSessionsPerCreator = undefined;
            this._policyPeriodInMinutes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._newGameSessionsPerCreator = value.newGameSessionsPerCreator;
            this._policyPeriodInMinutes = value.policyPeriodInMinutes;
        }
    }
    // new_game_sessions_per_creator - computed: false, optional: true, required: false
    _newGameSessionsPerCreator;
    get newGameSessionsPerCreator() {
        return this.getNumberAttribute('new_game_sessions_per_creator');
    }
    set newGameSessionsPerCreator(value) {
        this._newGameSessionsPerCreator = value;
    }
    resetNewGameSessionsPerCreator() {
        this._newGameSessionsPerCreator = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get newGameSessionsPerCreatorInput() {
        return this._newGameSessionsPerCreator;
    }
    // policy_period_in_minutes - computed: false, optional: true, required: false
    _policyPeriodInMinutes;
    get policyPeriodInMinutes() {
        return this.getNumberAttribute('policy_period_in_minutes');
    }
    set policyPeriodInMinutes(value) {
        this._policyPeriodInMinutes = value;
    }
    resetPolicyPeriodInMinutes() {
        this._policyPeriodInMinutes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get policyPeriodInMinutesInput() {
        return this._policyPeriodInMinutes;
    }
}
export function gameliftFleetRuntimeConfigurationServerProcessToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        concurrent_executions: cdktf.numberToTerraform(struct.concurrentExecutions),
        launch_path: cdktf.stringToTerraform(struct.launchPath),
        parameters: cdktf.stringToTerraform(struct.parameters),
    };
}
export function gameliftFleetRuntimeConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        game_session_activation_timeout_seconds: cdktf.numberToTerraform(struct.gameSessionActivationTimeoutSeconds),
        max_concurrent_game_session_activations: cdktf.numberToTerraform(struct.maxConcurrentGameSessionActivations),
        server_process: cdktf.listMapper(gameliftFleetRuntimeConfigurationServerProcessToTerraform)(struct.serverProcess),
    };
}
export class GameliftFleetRuntimeConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._gameSessionActivationTimeoutSeconds) {
            hasAnyValues = true;
            internalValueResult.gameSessionActivationTimeoutSeconds = this._gameSessionActivationTimeoutSeconds;
        }
        if (this._maxConcurrentGameSessionActivations) {
            hasAnyValues = true;
            internalValueResult.maxConcurrentGameSessionActivations = this._maxConcurrentGameSessionActivations;
        }
        if (this._serverProcess) {
            hasAnyValues = true;
            internalValueResult.serverProcess = this._serverProcess;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._gameSessionActivationTimeoutSeconds = undefined;
            this._maxConcurrentGameSessionActivations = undefined;
            this._serverProcess = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._gameSessionActivationTimeoutSeconds = value.gameSessionActivationTimeoutSeconds;
            this._maxConcurrentGameSessionActivations = value.maxConcurrentGameSessionActivations;
            this._serverProcess = value.serverProcess;
        }
    }
    // game_session_activation_timeout_seconds - computed: false, optional: true, required: false
    _gameSessionActivationTimeoutSeconds;
    get gameSessionActivationTimeoutSeconds() {
        return this.getNumberAttribute('game_session_activation_timeout_seconds');
    }
    set gameSessionActivationTimeoutSeconds(value) {
        this._gameSessionActivationTimeoutSeconds = value;
    }
    resetGameSessionActivationTimeoutSeconds() {
        this._gameSessionActivationTimeoutSeconds = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get gameSessionActivationTimeoutSecondsInput() {
        return this._gameSessionActivationTimeoutSeconds;
    }
    // max_concurrent_game_session_activations - computed: false, optional: true, required: false
    _maxConcurrentGameSessionActivations;
    get maxConcurrentGameSessionActivations() {
        return this.getNumberAttribute('max_concurrent_game_session_activations');
    }
    set maxConcurrentGameSessionActivations(value) {
        this._maxConcurrentGameSessionActivations = value;
    }
    resetMaxConcurrentGameSessionActivations() {
        this._maxConcurrentGameSessionActivations = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxConcurrentGameSessionActivationsInput() {
        return this._maxConcurrentGameSessionActivations;
    }
    // server_process - computed: false, optional: true, required: false
    _serverProcess;
    get serverProcess() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('server_process');
    }
    set serverProcess(value) {
        this._serverProcess = value;
    }
    resetServerProcess() {
        this._serverProcess = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serverProcessInput() {
        return this._serverProcess;
    }
}
export function gameliftFleetTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        delete: cdktf.stringToTerraform(struct.delete),
    };
}
export class GameliftFleetTimeoutsOutputReference extends cdktf.ComplexObject {
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
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._create = undefined;
            this._delete = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._create = value.create;
            this._delete = value.delete;
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
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html aws_gamelift_fleet}
*/
export class GameliftFleet extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_gamelift_fleet";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html aws_gamelift_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftFleetConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_gamelift_fleet',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._buildId = config.buildId;
        this._description = config.description;
        this._ec2InstanceType = config.ec2InstanceType;
        this._fleetType = config.fleetType;
        this._instanceRoleArn = config.instanceRoleArn;
        this._metricGroups = config.metricGroups;
        this._name = config.name;
        this._newGameSessionProtectionPolicy = config.newGameSessionProtectionPolicy;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._ec2InboundPermission = config.ec2InboundPermission;
        this._resourceCreationLimitPolicy.internalValue = config.resourceCreationLimitPolicy;
        this._runtimeConfiguration.internalValue = config.runtimeConfiguration;
        this._timeouts.internalValue = config.timeouts;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // build_id - computed: false, optional: false, required: true
    _buildId;
    get buildId() {
        return this.getStringAttribute('build_id');
    }
    set buildId(value) {
        this._buildId = value;
    }
    // Temporarily expose input value. Use with caution.
    get buildIdInput() {
        return this._buildId;
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // ec2_instance_type - computed: false, optional: false, required: true
    _ec2InstanceType;
    get ec2InstanceType() {
        return this.getStringAttribute('ec2_instance_type');
    }
    set ec2InstanceType(value) {
        this._ec2InstanceType = value;
    }
    // Temporarily expose input value. Use with caution.
    get ec2InstanceTypeInput() {
        return this._ec2InstanceType;
    }
    // fleet_type - computed: false, optional: true, required: false
    _fleetType;
    get fleetType() {
        return this.getStringAttribute('fleet_type');
    }
    set fleetType(value) {
        this._fleetType = value;
    }
    resetFleetType() {
        this._fleetType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fleetTypeInput() {
        return this._fleetType;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // instance_role_arn - computed: false, optional: true, required: false
    _instanceRoleArn;
    get instanceRoleArn() {
        return this.getStringAttribute('instance_role_arn');
    }
    set instanceRoleArn(value) {
        this._instanceRoleArn = value;
    }
    resetInstanceRoleArn() {
        this._instanceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get instanceRoleArnInput() {
        return this._instanceRoleArn;
    }
    // log_paths - computed: true, optional: false, required: false
    get logPaths() {
        return this.getListAttribute('log_paths');
    }
    // metric_groups - computed: true, optional: true, required: false
    _metricGroups;
    get metricGroups() {
        return this.getListAttribute('metric_groups');
    }
    set metricGroups(value) {
        this._metricGroups = value;
    }
    resetMetricGroups() {
        this._metricGroups = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get metricGroupsInput() {
        return this._metricGroups;
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // new_game_session_protection_policy - computed: false, optional: true, required: false
    _newGameSessionProtectionPolicy;
    get newGameSessionProtectionPolicy() {
        return this.getStringAttribute('new_game_session_protection_policy');
    }
    set newGameSessionProtectionPolicy(value) {
        this._newGameSessionProtectionPolicy = value;
    }
    resetNewGameSessionProtectionPolicy() {
        this._newGameSessionProtectionPolicy = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get newGameSessionProtectionPolicyInput() {
        return this._newGameSessionProtectionPolicy;
    }
    // operating_system - computed: true, optional: false, required: false
    get operatingSystem() {
        return this.getStringAttribute('operating_system');
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
    // ec2_inbound_permission - computed: false, optional: true, required: false
    _ec2InboundPermission;
    get ec2InboundPermission() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('ec2_inbound_permission');
    }
    set ec2InboundPermission(value) {
        this._ec2InboundPermission = value;
    }
    resetEc2InboundPermission() {
        this._ec2InboundPermission = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ec2InboundPermissionInput() {
        return this._ec2InboundPermission;
    }
    // resource_creation_limit_policy - computed: false, optional: true, required: false
    _resourceCreationLimitPolicy = new GameliftFleetResourceCreationLimitPolicyOutputReference(this, "resource_creation_limit_policy", true);
    get resourceCreationLimitPolicy() {
        return this._resourceCreationLimitPolicy;
    }
    putResourceCreationLimitPolicy(value) {
        this._resourceCreationLimitPolicy.internalValue = value;
    }
    resetResourceCreationLimitPolicy() {
        this._resourceCreationLimitPolicy.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourceCreationLimitPolicyInput() {
        return this._resourceCreationLimitPolicy.internalValue;
    }
    // runtime_configuration - computed: false, optional: true, required: false
    _runtimeConfiguration = new GameliftFleetRuntimeConfigurationOutputReference(this, "runtime_configuration", true);
    get runtimeConfiguration() {
        return this._runtimeConfiguration;
    }
    putRuntimeConfiguration(value) {
        this._runtimeConfiguration.internalValue = value;
    }
    resetRuntimeConfiguration() {
        this._runtimeConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get runtimeConfigurationInput() {
        return this._runtimeConfiguration.internalValue;
    }
    // timeouts - computed: false, optional: true, required: false
    _timeouts = new GameliftFleetTimeoutsOutputReference(this, "timeouts", true);
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
            build_id: cdktf.stringToTerraform(this._buildId),
            description: cdktf.stringToTerraform(this._description),
            ec2_instance_type: cdktf.stringToTerraform(this._ec2InstanceType),
            fleet_type: cdktf.stringToTerraform(this._fleetType),
            instance_role_arn: cdktf.stringToTerraform(this._instanceRoleArn),
            metric_groups: cdktf.listMapper(cdktf.stringToTerraform)(this._metricGroups),
            name: cdktf.stringToTerraform(this._name),
            new_game_session_protection_policy: cdktf.stringToTerraform(this._newGameSessionProtectionPolicy),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            ec2_inbound_permission: cdktf.listMapper(gameliftFleetEc2InboundPermissionToTerraform)(this._ec2InboundPermission),
            resource_creation_limit_policy: gameliftFleetResourceCreationLimitPolicyToTerraform(this._resourceCreationLimitPolicy.internalValue),
            runtime_configuration: gameliftFleetRuntimeConfigurationToTerraform(this._runtimeConfiguration.internalValue),
            timeouts: gameliftFleetTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWxpZnQtZmxlZXQuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImdhbWVsaWZ0LWZsZWV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQTBGL0IsTUFBTSxVQUFVLDRDQUE0QyxDQUFDLE1BQTBDO0lBQ3JHLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsU0FBUyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3BELFFBQVEsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQztRQUNsRCxRQUFRLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxRQUFRLENBQUM7UUFDbkQsT0FBTyxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsTUFBTSxDQUFDO0tBQ2pELENBQUE7QUFDSCxDQUFDO0FBYUQsTUFBTSxVQUFVLG1EQUFtRCxDQUFDLE1BQTJHO0lBQzdLLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsNkJBQTZCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyx5QkFB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