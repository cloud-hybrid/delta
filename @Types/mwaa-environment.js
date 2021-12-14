// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class MwaaEnvironmentLastUpdatedError extends cdktf.ComplexComputedList {
    // error_code - computed: true, optional: false, required: false
    get errorCode() {
        return this.getStringAttribute('error_code');
    }
    // error_message - computed: true, optional: false, required: false
    get errorMessage() {
        return this.getStringAttribute('error_message');
    }
}
export class MwaaEnvironmentLastUpdated extends cdktf.ComplexComputedList {
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // error - computed: true, optional: false, required: false
    get error() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('error');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
}
export function mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
export class MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logLevel) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logLevel = value.logLevel;
        }
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // log_level - computed: true, optional: true, required: false
    _logLevel;
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
    set logLevel(value) {
        this._logLevel = value;
    }
    resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logLevelInput() {
        return this._logLevel;
    }
}
export function mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
export class MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logLevel) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logLevel = value.logLevel;
        }
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // log_level - computed: true, optional: true, required: false
    _logLevel;
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
    set logLevel(value) {
        this._logLevel = value;
    }
    resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logLevelInput() {
        return this._logLevel;
    }
}
export function mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
export class MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logLevel) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logLevel = value.logLevel;
        }
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // log_level - computed: true, optional: true, required: false
    _logLevel;
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
    set logLevel(value) {
        this._logLevel = value;
    }
    resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logLevelInput() {
        return this._logLevel;
    }
}
export function mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
export class MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logLevel) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logLevel = value.logLevel;
        }
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // log_level - computed: true, optional: true, required: false
    _logLevel;
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
    set logLevel(value) {
        this._logLevel = value;
    }
    resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logLevelInput() {
        return this._logLevel;
    }
}
export function mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_level: cdktf.stringToTerraform(struct.logLevel),
    };
}
export class MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference extends cdktf.ComplexObject {
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
        if (this._enabled) {
            hasAnyValues = true;
            internalValueResult.enabled = this._enabled;
        }
        if (this._logLevel) {
            hasAnyValues = true;
            internalValueResult.logLevel = this._logLevel;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logLevel = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logLevel = value.logLevel;
        }
    }
    // enabled - computed: true, optional: true, required: false
    _enabled;
    get enabled() {
        return this.getBooleanAttribute('enabled');
    }
    set enabled(value) {
        this._enabled = value;
    }
    resetEnabled() {
        this._enabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enabledInput() {
        return this._enabled;
    }
    // log_level - computed: true, optional: true, required: false
    _logLevel;
    get logLevel() {
        return this.getStringAttribute('log_level');
    }
    set logLevel(value) {
        this._logLevel = value;
    }
    resetLogLevel() {
        this._logLevel = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logLevelInput() {
        return this._logLevel;
    }
}
export function mwaaEnvironmentLoggingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        dag_processing_logs: mwaaEnvironmentLoggingConfigurationDagProcessingLogsToTerraform(struct.dagProcessingLogs),
        scheduler_logs: mwaaEnvironmentLoggingConfigurationSchedulerLogsToTerraform(struct.schedulerLogs),
        task_logs: mwaaEnvironmentLoggingConfigurationTaskLogsToTerraform(struct.taskLogs),
        webserver_logs: mwaaEnvironmentLoggingConfigurationWebserverLogsToTerraform(struct.webserverLogs),
        worker_logs: mwaaEnvironmentLoggingConfigurationWorkerLogsToTerraform(struct.workerLogs),
    };
}
export class MwaaEnvironmentLoggingConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._dagProcessingLogs?.internalValue) {
            hasAnyValues = true;
            internalValueResult.dagProcessingLogs = this._dagProcessingLogs?.internalValue;
        }
        if (this._schedulerLogs?.internalValue) {
            hasAnyValues = true;
            internalValueResult.schedulerLogs = this._schedulerLogs?.internalValue;
        }
        if (this._taskLogs?.internalValue) {
            hasAnyValues = true;
            internalValueResult.taskLogs = this._taskLogs?.internalValue;
        }
        if (this._webserverLogs?.internalValue) {
            hasAnyValues = true;
            internalValueResult.webserverLogs = this._webserverLogs?.internalValue;
        }
        if (this._workerLogs?.internalValue) {
            hasAnyValues = true;
            internalValueResult.workerLogs = this._workerLogs?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._dagProcessingLogs.internalValue = undefined;
            this._schedulerLogs.internalValue = undefined;
            this._taskLogs.internalValue = undefined;
            this._webserverLogs.internalValue = undefined;
            this._workerLogs.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._dagProcessingLogs.internalValue = value.dagProcessingLogs;
            this._schedulerLogs.internalValue = value.schedulerLogs;
            this._taskLogs.internalValue = value.taskLogs;
            this._webserverLogs.internalValue = value.webserverLogs;
            this._workerLogs.internalValue = value.workerLogs;
        }
    }
    // dag_processing_logs - computed: false, optional: true, required: false
    _dagProcessingLogs = new MwaaEnvironmentLoggingConfigurationDagProcessingLogsOutputReference(this, "dag_processing_logs", true);
    get dagProcessingLogs() {
        return this._dagProcessingLogs;
    }
    putDagProcessingLogs(value) {
        this._dagProcessingLogs.internalValue = value;
    }
    resetDagProcessingLogs() {
        this._dagProcessingLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dagProcessingLogsInput() {
        return this._dagProcessingLogs.internalValue;
    }
    // scheduler_logs - computed: false, optional: true, required: false
    _schedulerLogs = new MwaaEnvironmentLoggingConfigurationSchedulerLogsOutputReference(this, "scheduler_logs", true);
    get schedulerLogs() {
        return this._schedulerLogs;
    }
    putSchedulerLogs(value) {
        this._schedulerLogs.internalValue = value;
    }
    resetSchedulerLogs() {
        this._schedulerLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get schedulerLogsInput() {
        return this._schedulerLogs.internalValue;
    }
    // task_logs - computed: false, optional: true, required: false
    _taskLogs = new MwaaEnvironmentLoggingConfigurationTaskLogsOutputReference(this, "task_logs", true);
    get taskLogs() {
        return this._taskLogs;
    }
    putTaskLogs(value) {
        this._taskLogs.internalValue = value;
    }
    resetTaskLogs() {
        this._taskLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get taskLogsInput() {
        return this._taskLogs.internalValue;
    }
    // webserver_logs - computed: false, optional: true, required: false
    _webserverLogs = new MwaaEnvironmentLoggingConfigurationWebserverLogsOutputReference(this, "webserver_logs", true);
    get webserverLogs() {
        return this._webserverLogs;
    }
    putWebserverLogs(value) {
        this._webserverLogs.internalValue = value;
    }
    resetWebserverLogs() {
        this._webserverLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get webserverLogsInput() {
        return this._webserverLogs.internalValue;
    }
    // worker_logs - computed: false, optional: true, required: false
    _workerLogs = new MwaaEnvironmentLoggingConfigurationWorkerLogsOutputReference(this, "worker_logs", true);
    get workerLogs() {
        return this._workerLogs;
    }
    putWorkerLogs(value) {
        this._workerLogs.internalValue = value;
    }
    resetWorkerLogs() {
        this._workerLogs.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get workerLogsInput() {
        return this._workerLogs.internalValue;
    }
}
export function mwaaEnvironmentNetworkConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
export class MwaaEnvironmentNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._securityGroupIds) {
            hasAnyValues = true;
            internalValueResult.securityGroupIds = this._securityGroupIds;
        }
        if (this._subnetIds) {
            hasAnyValues = true;
            internalValueResult.subnetIds = this._subnetIds;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }
    // security_group_ids - computed: false, optional: false, required: true
    _securityGroupIds;
    get securityGroupIds() {
        return this.getListAttribute('security_group_ids');
    }
    set securityGroupIds(value) {
        this._securityGroupIds = value;
    }
    // Temporarily expose input value. Use with caution.
    get securityGroupIdsInput() {
        return this._securityGroupIds;
    }
    // subnet_ids - computed: false, optional: false, required: true
    _subnetIds;
    get subnetIds() {
        return this.getListAttribute('subnet_ids');
    }
    set subnetIds(value) {
        this._subnetIds = value;
    }
    // Temporarily expose input value. Use with caution.
    get subnetIdsInput() {
        return this._subnetIds;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html aws_mwaa_environment}
*/
export class MwaaEnvironment extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_mwaa_environment";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/mwaa_environment.html aws_mwaa_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MwaaEnvironmentConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_mwaa_environment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._airflowConfigurationOptions = config.airflowConfigurationOptions;
        this._airflowVersion = config.airflowVersion;
        this._dagS3Path = config.dagS3Path;
        this._environmentClass = config.environmentClass;
        this._executionRoleArn = config.executionRoleArn;
        this._kmsKey = config.kmsKey;
        this._maxWorkers = config.maxWorkers;
        this._minWorkers = config.minWorkers;
        this._name = config.name;
        this._pluginsS3ObjectVersion = config.pluginsS3ObjectVersion;
        this._pluginsS3Path = config.pluginsS3Path;
        this._requirementsS3ObjectVersion = config.requirementsS3ObjectVersion;
        this._requirementsS3Path = config.requirementsS3Path;
        this._sourceBucketArn = config.sourceBucketArn;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._webserverAccessMode = config.webserverAccessMode;
        this._weeklyMaintenanceWindowStart = config.weeklyMaintenanceWindowStart;
        this._loggingConfiguration.internalValue = config.loggingConfiguration;
        this._networkConfiguration.internalValue = config.networkConfiguration;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // airflow_configuration_options - computed: false, optional: true, required: false
    _airflowConfigurationOptions;
    get airflowConfigurationOptions() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('airflow_configuration_options');
    }
    set airflowConfigurationOptions(value) {
        this._airflowConfigurationOptions = value;
    }
    resetAirflowConfigurationOptions() {
        this._airflowConfigurationOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get airflowConfigurationOptionsInput() {
        return this._airflowConfigurationOptions;
    }
    // airflow_version - computed: true, optional: true, required: false
    _airflowVersion;
    get airflowVersion() {
        return this.getStringAttribute('airflow_version');
    }
    set airflowVersion(value) {
        this._airflowVersion = value;
    }
    resetAirflowVersion() {
        this._airflowVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get airflowVersionInput() {
        return this._airflowVersion;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    // dag_s3_path - computed: false, optional: false, required: true
    _dagS3Path;
    get dagS3Path() {
        return this.getStringAttribute('dag_s3_path');
    }
    set dagS3Path(value) {
        this._dagS3Path = value;
    }
    // Temporarily expose input value. Use with caution.
    get dagS3PathInput() {
        return this._dagS3Path;
    }
    // environment_class - computed: true, optional: true, required: false
    _environmentClass;
    get environmentClass() {
        return this.getStringAttribute('environment_class');
    }
    set environmentClass(value) {
        this._environmentClass = value;
    }
    resetEnvironmentClass() {
        this._environmentClass = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentClassInput() {
        return this._environmentClass;
    }
    // execution_role_arn - computed: false, optional: false, required: true
    _executionRoleArn;
    get executionRoleArn() {
        return this.getStringAttribute('execution_role_arn');
    }
    set executionRoleArn(value) {
        this._executionRoleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get executionRoleArnInput() {
        return this._executionRoleArn;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // kms_key - computed: false, optional: true, required: false
    _kmsKey;
    get kmsKey() {
        return this.getStringAttribute('kms_key');
    }
    set kmsKey(value) {
        this._kmsKey = value;
    }
    resetKmsKey() {
        this._kmsKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyInput() {
        return this._kmsKey;
    }
    // last_updated - computed: true, optional: false, required: false
    lastUpdated(index) {
        return new MwaaEnvironmentLastUpdated(this, 'last_updated', index);
    }
    // max_workers - computed: true, optional: true, required: false
    _maxWorkers;
    get maxWorkers() {
        return this.getNumberAttribute('max_workers');
    }
    set maxWorkers(value) {
        this._maxWorkers = value;
    }
    resetMaxWorkers() {
        this._maxWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxWorkersInput() {
        return this._maxWorkers;
    }
    // min_workers - computed: true, optional: true, required: false
    _minWorkers;
    get minWorkers() {
        return this.getNumberAttribute('min_workers');
    }
    set minWorkers(value) {
        this._minWorkers = value;
    }
    resetMinWorkers() {
        this._minWorkers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minWorkersInput() {
        return this._minWorkers;
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
    // plugins_s3_object_version - computed: true, optional: true, required: false
    _pluginsS3ObjectVersion;
    get pluginsS3ObjectVersion() {
        return this.getStringAttribute('plugins_s3_object_version');
    }
    set pluginsS3ObjectVersion(value) {
        this._pluginsS3ObjectVersion = value;
    }
    resetPluginsS3ObjectVersion() {
        this._pluginsS3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pluginsS3ObjectVersionInput() {
        return this._pluginsS3ObjectVersion;
    }
    // plugins_s3_path - computed: false, optional: true, required: false
    _pluginsS3Path;
    get pluginsS3Path() {
        return this.getStringAttribute('plugins_s3_path');
    }
    set pluginsS3Path(value) {
        this._pluginsS3Path = value;
    }
    resetPluginsS3Path() {
        this._pluginsS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pluginsS3PathInput() {
        return this._pluginsS3Path;
    }
    // requirements_s3_object_version - computed: true, optional: true, required: false
    _requirementsS3ObjectVersion;
    get requirementsS3ObjectVersion() {
        return this.getStringAttribute('requirements_s3_object_version');
    }
    set requirementsS3ObjectVersion(value) {
        this._requirementsS3ObjectVersion = value;
    }
    resetRequirementsS3ObjectVersion() {
        this._requirementsS3ObjectVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requirementsS3ObjectVersionInput() {
        return this._requirementsS3ObjectVersion;
    }
    // requirements_s3_path - computed: false, optional: true, required: false
    _requirementsS3Path;
    get requirementsS3Path() {
        return this.getStringAttribute('requirements_s3_path');
    }
    set requirementsS3Path(value) {
        this._requirementsS3Path = value;
    }
    resetRequirementsS3Path() {
        this._requirementsS3Path = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requirementsS3PathInput() {
        return this._requirementsS3Path;
    }
    // service_role_arn - computed: true, optional: false, required: false
    get serviceRoleArn() {
        return this.getStringAttribute('service_role_arn');
    }
    // source_bucket_arn - computed: false, optional: false, required: true
    _sourceBucketArn;
    get sourceBucketArn() {
        return this.getStringAttribute('source_bucket_arn');
    }
    set sourceBucketArn(value) {
        this._sourceBucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get sourceBucketArnInput() {
        return this._sourceBucketArn;
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
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
    // webserver_access_mode - computed: true, optional: true, required: false
    _webserverAccessMode;
    get webserverAccessMode() {
        return this.getStringAttribute('webserver_access_mode');
    }
    set webserverAccessMode(value) {
        this._webserverAccessMode = value;
    }
    resetWebserverAccessMode() {
        this._webserverAccessMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get webserverAccessModeInput() {
        return this._webserverAccessMode;
    }
    // webserver_url - computed: true, optional: false, required: false
    get webserverUrl() {
        return this.getStringAttribute('webserver_url');
    }
    // weekly_maintenance_window_start - computed: true, optional: true, required: false
    _weeklyMaintenanceWindowStart;
    get weeklyMaintenanceWindowStart() {
        return this.getStringAttribute('weekly_maintenance_window_start');
    }
    set weeklyMaintenanceWindowStart(value) {
        this._weeklyMaintenanceWindowStart = value;
    }
    resetWeeklyMaintenanceWindowStart() {
        this._weeklyMaintenanceWindowStart = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get weeklyMaintenanceWindowStartInput() {
        return this._weeklyMaintenanceWindowStart;
    }
    // logging_configuration - computed: false, optional: true, required: false
    _loggingConfiguration = new MwaaEnvironmentLoggingConfigurationOutputReference(this, "logging_configuration", true);
    get loggingConfiguration() {
        return this._loggingConfiguration;
    }
    putLoggingConfiguration(value) {
        this._loggingConfiguration.internalValue = value;
    }
    resetLoggingConfiguration() {
        this._loggingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get loggingConfigurationInput() {
        return this._loggingConfiguration.internalValue;
    }
    // network_configuration - computed: false, optional: false, required: true
    _networkConfiguration = new MwaaEnvironmentNetworkConfigurationOutputReference(this, "network_configuration", true);
    get networkConfiguration() {
        return this._networkConfiguration;
    }
    putNetworkConfiguration(value) {
        this._networkConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get networkConfigurationInput() {
        return this._networkConfiguration.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            airflow_configuration_options: cdktf.hashMapper(cdktf.anyToTerraform)(this._airflowConfigurationOptions),
            airflow_version: cdktf.stringToTerraform(this._airflowVersion),
            dag_s3_path: cdktf.stringToTerraform(this._dagS3Path),
            environment_class: cdktf.stringToTerraform(this._environmentClass),
            execution_role_arn: cdktf.stringToTerraform(this._executionRoleArn),
            kms_key: cdktf.stringToTerraform(this._kmsKey),
            max_workers: cdktf.numberToTerraform(this._maxWorkers),
            min_workers: cdktf.numberToTerraform(this._minWorkers),
            name: cdktf.stringToTerraform(this._name),
            plugins_s3_object_version: cdktf.stringToTerraform(this._pluginsS3ObjectVersion),
            plugins_s3_path: cdktf.stringToTerraform(this._pluginsS3Path),
            requirements_s3_object_version: cdktf.stringToTerraform(this._requirementsS3ObjectVersion),
            requirements_s3_path: cdktf.stringToTerraform(this._requirementsS3Path),
            source_bucket_arn: cdktf.stringToTerraform(this._sourceBucketArn),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            webserver_access_mode: cdktf.stringToTerraform(this._webserverAccessMode),
            weekly_maintenance_window_start: cdktf.stringToTerraform(this._weeklyMaintenanceWindowStart),
            logging_configuration: mwaaEnvironmentLoggingConfigurationToTerraform(this._loggingConfiguration.internalValue),
            network_configuration: mwaaEnvironmentNetworkConfigurationToTerraform(this._networkConfiguration.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXdhYS1lbnZpcm9ubWVudC5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsibXdhYS1lbnZpcm9ubWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyQ0FBMkM7QUFHM0MsT0FBTyxLQUFLLEtBQUssTUFBTSxPQUFPLENBQUM7QUEyRi9CLE1BQU0sT0FBTywrQkFBZ0MsU0FBUSxLQUFLLENBQUMsbUJBQW1CO0lBRTVFLGdFQUFnRTtJQUNoRSxJQUFXLFNBQVM7UUFDbEIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPLDBCQUEyQixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdkUsZ0VBQWdFO0lBQ2hFLElBQVcsU0FBUztRQUNsQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsMkRBQTJEO0lBQzNELElBQVcsS0FBSztRQUNkLG9EQUFvRDtRQUNwRCxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxPQUFPLENBQVEsQ0FBQztJQUN4RCxDQUFDO0lBRUQsNERBQTREO0lBQzVELElBQVcsTUFBTTtRQUNmLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjtBQVlELE1BQU0sVUFBVSwrREFBK0QsQ0FBQyxNQUFtSTtJQUNqTixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFB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