// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // log_group_name - computed: false, optional: true, required: false
    _logGroupName;
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    set logGroupName(value) {
        this._logGroupName = value;
    }
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logGroupNameInput() {
        return this._logGroupName;
    }
    // log_stream_name - computed: false, optional: true, required: false
    _logStreamName;
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    set logStreamName(value) {
        this._logStreamName = value;
    }
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters),
    };
}
export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors),
    };
}
export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._processors) {
            hasAnyValues = true;
            internalValueResult.processors = this._processors;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._processors = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._processors = value.processors;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // processors - computed: false, optional: true, required: false
    _processors;
    get processors() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('processors');
    }
    set processors(value) {
        this._processors = value;
    }
    resetProcessors() {
        this._processors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processorsInput() {
        return this._processors;
    }
}
export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        security_group_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.securityGroupIds),
        subnet_ids: cdktf.listMapper(cdktf.stringToTerraform)(struct.subnetIds),
    };
}
export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
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
            this._roleArn = undefined;
            this._securityGroupIds = undefined;
            this._subnetIds = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._roleArn = value.roleArn;
            this._securityGroupIds = value.securityGroupIds;
            this._subnetIds = value.subnetIds;
        }
    }
    // role_arn - computed: false, optional: false, required: true
    _roleArn;
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
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
export function kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        buffering_interval: cdktf.numberToTerraform(struct.bufferingInterval),
        buffering_size: cdktf.numberToTerraform(struct.bufferingSize),
        cluster_endpoint: cdktf.stringToTerraform(struct.clusterEndpoint),
        domain_arn: cdktf.stringToTerraform(struct.domainArn),
        index_name: cdktf.stringToTerraform(struct.indexName),
        index_rotation_period: cdktf.stringToTerraform(struct.indexRotationPeriod),
        retry_duration: cdktf.numberToTerraform(struct.retryDuration),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        type_name: cdktf.stringToTerraform(struct.typeName),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        processing_configuration: kinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationToTerraform(struct.processingConfiguration),
        vpc_config: kinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigToTerraform(struct.vpcConfig),
    };
}
export class KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._bufferingInterval) {
            hasAnyValues = true;
            internalValueResult.bufferingInterval = this._bufferingInterval;
        }
        if (this._bufferingSize) {
            hasAnyValues = true;
            internalValueResult.bufferingSize = this._bufferingSize;
        }
        if (this._clusterEndpoint) {
            hasAnyValues = true;
            internalValueResult.clusterEndpoint = this._clusterEndpoint;
        }
        if (this._domainArn) {
            hasAnyValues = true;
            internalValueResult.domainArn = this._domainArn;
        }
        if (this._indexName) {
            hasAnyValues = true;
            internalValueResult.indexName = this._indexName;
        }
        if (this._indexRotationPeriod) {
            hasAnyValues = true;
            internalValueResult.indexRotationPeriod = this._indexRotationPeriod;
        }
        if (this._retryDuration) {
            hasAnyValues = true;
            internalValueResult.retryDuration = this._retryDuration;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._s3BackupMode) {
            hasAnyValues = true;
            internalValueResult.s3BackupMode = this._s3BackupMode;
        }
        if (this._typeName) {
            hasAnyValues = true;
            internalValueResult.typeName = this._typeName;
        }
        if (this._cloudwatchLoggingOptions?.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
        }
        if (this._processingConfiguration?.internalValue) {
            hasAnyValues = true;
            internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
        }
        if (this._vpcConfig?.internalValue) {
            hasAnyValues = true;
            internalValueResult.vpcConfig = this._vpcConfig?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bufferingInterval = undefined;
            this._bufferingSize = undefined;
            this._clusterEndpoint = undefined;
            this._domainArn = undefined;
            this._indexName = undefined;
            this._indexRotationPeriod = undefined;
            this._retryDuration = undefined;
            this._roleArn = undefined;
            this._s3BackupMode = undefined;
            this._typeName = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
            this._processingConfiguration.internalValue = undefined;
            this._vpcConfig.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bufferingInterval = value.bufferingInterval;
            this._bufferingSize = value.bufferingSize;
            this._clusterEndpoint = value.clusterEndpoint;
            this._domainArn = value.domainArn;
            this._indexName = value.indexName;
            this._indexRotationPeriod = value.indexRotationPeriod;
            this._retryDuration = value.retryDuration;
            this._roleArn = value.roleArn;
            this._s3BackupMode = value.s3BackupMode;
            this._typeName = value.typeName;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
            this._processingConfiguration.internalValue = value.processingConfiguration;
            this._vpcConfig.internalValue = value.vpcConfig;
        }
    }
    // buffering_interval - computed: false, optional: true, required: false
    _bufferingInterval;
    get bufferingInterval() {
        return this.getNumberAttribute('buffering_interval');
    }
    set bufferingInterval(value) {
        this._bufferingInterval = value;
    }
    resetBufferingInterval() {
        this._bufferingInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bufferingIntervalInput() {
        return this._bufferingInterval;
    }
    // buffering_size - computed: false, optional: true, required: false
    _bufferingSize;
    get bufferingSize() {
        return this.getNumberAttribute('buffering_size');
    }
    set bufferingSize(value) {
        this._bufferingSize = value;
    }
    resetBufferingSize() {
        this._bufferingSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bufferingSizeInput() {
        return this._bufferingSize;
    }
    // cluster_endpoint - computed: false, optional: true, required: false
    _clusterEndpoint;
    get clusterEndpoint() {
        return this.getStringAttribute('cluster_endpoint');
    }
    set clusterEndpoint(value) {
        this._clusterEndpoint = value;
    }
    resetClusterEndpoint() {
        this._clusterEndpoint = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clusterEndpointInput() {
        return this._clusterEndpoint;
    }
    // domain_arn - computed: false, optional: true, required: false
    _domainArn;
    get domainArn() {
        return this.getStringAttribute('domain_arn');
    }
    set domainArn(value) {
        this._domainArn = value;
    }
    resetDomainArn() {
        this._domainArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get domainArnInput() {
        return this._domainArn;
    }
    // index_name - computed: false, optional: false, required: true
    _indexName;
    get indexName() {
        return this.getStringAttribute('index_name');
    }
    set indexName(value) {
        this._indexName = value;
    }
    // Temporarily expose input value. Use with caution.
    get indexNameInput() {
        return this._indexName;
    }
    // index_rotation_period - computed: false, optional: true, required: false
    _indexRotationPeriod;
    get indexRotationPeriod() {
        return this.getStringAttribute('index_rotation_period');
    }
    set indexRotationPeriod(value) {
        this._indexRotationPeriod = value;
    }
    resetIndexRotationPeriod() {
        this._indexRotationPeriod = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get indexRotationPeriodInput() {
        return this._indexRotationPeriod;
    }
    // retry_duration - computed: false, optional: true, required: false
    _retryDuration;
    get retryDuration() {
        return this.getNumberAttribute('retry_duration');
    }
    set retryDuration(value) {
        this._retryDuration = value;
    }
    resetRetryDuration() {
        this._retryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retryDurationInput() {
        return this._retryDuration;
    }
    // role_arn - computed: false, optional: false, required: true
    _roleArn;
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
    // s3_backup_mode - computed: false, optional: true, required: false
    _s3BackupMode;
    get s3BackupMode() {
        return this.getStringAttribute('s3_backup_mode');
    }
    set s3BackupMode(value) {
        this._s3BackupMode = value;
    }
    resetS3BackupMode() {
        this._s3BackupMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3BackupModeInput() {
        return this._s3BackupMode;
    }
    // type_name - computed: false, optional: true, required: false
    _typeName;
    get typeName() {
        return this.getStringAttribute('type_name');
    }
    set typeName(value) {
        this._typeName = value;
    }
    resetTypeName() {
        this._typeName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get typeNameInput() {
        return this._typeName;
    }
    // cloudwatch_logging_options - computed: false, optional: true, required: false
    _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
    // processing_configuration - computed: false, optional: true, required: false
    _processingConfiguration = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationProcessingConfigurationOutputReference(this, "processing_configuration", true);
    get processingConfiguration() {
        return this._processingConfiguration;
    }
    putProcessingConfiguration(value) {
        this._processingConfiguration.internalValue = value;
    }
    resetProcessingConfiguration() {
        this._processingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processingConfigurationInput() {
        return this._processingConfiguration.internalValue;
    }
    // vpc_config - computed: false, optional: true, required: false
    _vpcConfig = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationVpcConfigOutputReference(this, "vpc_config", true);
    get vpcConfig() {
        return this._vpcConfig;
    }
    putVpcConfig(value) {
        this._vpcConfig.internalValue = value;
    }
    resetVpcConfig() {
        this._vpcConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get vpcConfigInput() {
        return this._vpcConfig.internalValue;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // log_group_name - computed: false, optional: true, required: false
    _logGroupName;
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    set logGroupName(value) {
        this._logGroupName = value;
    }
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logGroupNameInput() {
        return this._logGroupName;
    }
    // log_stream_name - computed: false, optional: true, required: false
    _logStreamName;
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    set logStreamName(value) {
        this._logStreamName = value;
    }
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        timestamp_formats: cdktf.listMapper(cdktf.stringToTerraform)(struct.timestampFormats),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference extends cdktf.ComplexObject {
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
        if (this._timestampFormats) {
            hasAnyValues = true;
            internalValueResult.timestampFormats = this._timestampFormats;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._timestampFormats = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._timestampFormats = value.timestampFormats;
        }
    }
    // timestamp_formats - computed: false, optional: true, required: false
    _timestampFormats;
    get timestampFormats() {
        return this.getListAttribute('timestamp_formats');
    }
    set timestampFormats(value) {
        this._timestampFormats = value;
    }
    resetTimestampFormats() {
        this._timestampFormats = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get timestampFormatsInput() {
        return this._timestampFormats;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        case_insensitive: cdktf.booleanToTerraform(struct.caseInsensitive),
        column_to_json_key_mappings: cdktf.hashMapper(cdktf.anyToTerraform)(struct.columnToJsonKeyMappings),
        convert_dots_in_json_keys_to_underscores: cdktf.booleanToTerraform(struct.convertDotsInJsonKeysToUnderscores),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference extends cdktf.ComplexObject {
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
        if (this._caseInsensitive) {
            hasAnyValues = true;
            internalValueResult.caseInsensitive = this._caseInsensitive;
        }
        if (this._columnToJsonKeyMappings) {
            hasAnyValues = true;
            internalValueResult.columnToJsonKeyMappings = this._columnToJsonKeyMappings;
        }
        if (this._convertDotsInJsonKeysToUnderscores) {
            hasAnyValues = true;
            internalValueResult.convertDotsInJsonKeysToUnderscores = this._convertDotsInJsonKeysToUnderscores;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._caseInsensitive = undefined;
            this._columnToJsonKeyMappings = undefined;
            this._convertDotsInJsonKeysToUnderscores = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._caseInsensitive = value.caseInsensitive;
            this._columnToJsonKeyMappings = value.columnToJsonKeyMappings;
            this._convertDotsInJsonKeysToUnderscores = value.convertDotsInJsonKeysToUnderscores;
        }
    }
    // case_insensitive - computed: false, optional: true, required: false
    _caseInsensitive;
    get caseInsensitive() {
        return this.getBooleanAttribute('case_insensitive');
    }
    set caseInsensitive(value) {
        this._caseInsensitive = value;
    }
    resetCaseInsensitive() {
        this._caseInsensitive = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get caseInsensitiveInput() {
        return this._caseInsensitive;
    }
    // column_to_json_key_mappings - computed: false, optional: true, required: false
    _columnToJsonKeyMappings;
    get columnToJsonKeyMappings() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('column_to_json_key_mappings');
    }
    set columnToJsonKeyMappings(value) {
        this._columnToJsonKeyMappings = value;
    }
    resetColumnToJsonKeyMappings() {
        this._columnToJsonKeyMappings = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get columnToJsonKeyMappingsInput() {
        return this._columnToJsonKeyMappings;
    }
    // convert_dots_in_json_keys_to_underscores - computed: false, optional: true, required: false
    _convertDotsInJsonKeysToUnderscores;
    get convertDotsInJsonKeysToUnderscores() {
        return this.getBooleanAttribute('convert_dots_in_json_keys_to_underscores');
    }
    set convertDotsInJsonKeysToUnderscores(value) {
        this._convertDotsInJsonKeysToUnderscores = value;
    }
    resetConvertDotsInJsonKeysToUnderscores() {
        this._convertDotsInJsonKeysToUnderscores = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get convertDotsInJsonKeysToUnderscoresInput() {
        return this._convertDotsInJsonKeysToUnderscores;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        hive_json_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeToTerraform(struct.hiveJsonSerDe),
        open_x_json_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeToTerraform(struct.openXJsonSerDe),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference extends cdktf.ComplexObject {
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
        if (this._hiveJsonSerDe?.internalValue) {
            hasAnyValues = true;
            internalValueResult.hiveJsonSerDe = this._hiveJsonSerDe?.internalValue;
        }
        if (this._openXJsonSerDe?.internalValue) {
            hasAnyValues = true;
            internalValueResult.openXJsonSerDe = this._openXJsonSerDe?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._hiveJsonSerDe.internalValue = undefined;
            this._openXJsonSerDe.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._hiveJsonSerDe.internalValue = value.hiveJsonSerDe;
            this._openXJsonSerDe.internalValue = value.openXJsonSerDe;
        }
    }
    // hive_json_ser_de - computed: false, optional: true, required: false
    _hiveJsonSerDe = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerHiveJsonSerDeOutputReference(this, "hive_json_ser_de", true);
    get hiveJsonSerDe() {
        return this._hiveJsonSerDe;
    }
    putHiveJsonSerDe(value) {
        this._hiveJsonSerDe.internalValue = value;
    }
    resetHiveJsonSerDe() {
        this._hiveJsonSerDe.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hiveJsonSerDeInput() {
        return this._hiveJsonSerDe.internalValue;
    }
    // open_x_json_ser_de - computed: false, optional: true, required: false
    _openXJsonSerDe = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOpenXJsonSerDeOutputReference(this, "open_x_json_ser_de", true);
    get openXJsonSerDe() {
        return this._openXJsonSerDe;
    }
    putOpenXJsonSerDe(value) {
        this._openXJsonSerDe.internalValue = value;
    }
    resetOpenXJsonSerDe() {
        this._openXJsonSerDe.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get openXJsonSerDeInput() {
        return this._openXJsonSerDe.internalValue;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        deserializer: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerToTerraform(struct.deserializer),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._deserializer?.internalValue) {
            hasAnyValues = true;
            internalValueResult.deserializer = this._deserializer?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._deserializer.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._deserializer.internalValue = value.deserializer;
        }
    }
    // deserializer - computed: false, optional: false, required: true
    _deserializer = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationDeserializerOutputReference(this, "deserializer", true);
    get deserializer() {
        return this._deserializer;
    }
    putDeserializer(value) {
        this._deserializer.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get deserializerInput() {
        return this._deserializer.internalValue;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        block_size_bytes: cdktf.numberToTerraform(struct.blockSizeBytes),
        bloom_filter_columns: cdktf.listMapper(cdktf.stringToTerraform)(struct.bloomFilterColumns),
        bloom_filter_false_positive_probability: cdktf.numberToTerraform(struct.bloomFilterFalsePositiveProbability),
        compression: cdktf.stringToTerraform(struct.compression),
        dictionary_key_threshold: cdktf.numberToTerraform(struct.dictionaryKeyThreshold),
        enable_padding: cdktf.booleanToTerraform(struct.enablePadding),
        format_version: cdktf.stringToTerraform(struct.formatVersion),
        padding_tolerance: cdktf.numberToTerraform(struct.paddingTolerance),
        row_index_stride: cdktf.numberToTerraform(struct.rowIndexStride),
        stripe_size_bytes: cdktf.numberToTerraform(struct.stripeSizeBytes),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference extends cdktf.ComplexObject {
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
        if (this._blockSizeBytes) {
            hasAnyValues = true;
            internalValueResult.blockSizeBytes = this._blockSizeBytes;
        }
        if (this._bloomFilterColumns) {
            hasAnyValues = true;
            internalValueResult.bloomFilterColumns = this._bloomFilterColumns;
        }
        if (this._bloomFilterFalsePositiveProbability) {
            hasAnyValues = true;
            internalValueResult.bloomFilterFalsePositiveProbability = this._bloomFilterFalsePositiveProbability;
        }
        if (this._compression) {
            hasAnyValues = true;
            internalValueResult.compression = this._compression;
        }
        if (this._dictionaryKeyThreshold) {
            hasAnyValues = true;
            internalValueResult.dictionaryKeyThreshold = this._dictionaryKeyThreshold;
        }
        if (this._enablePadding) {
            hasAnyValues = true;
            internalValueResult.enablePadding = this._enablePadding;
        }
        if (this._formatVersion) {
            hasAnyValues = true;
            internalValueResult.formatVersion = this._formatVersion;
        }
        if (this._paddingTolerance) {
            hasAnyValues = true;
            internalValueResult.paddingTolerance = this._paddingTolerance;
        }
        if (this._rowIndexStride) {
            hasAnyValues = true;
            internalValueResult.rowIndexStride = this._rowIndexStride;
        }
        if (this._stripeSizeBytes) {
            hasAnyValues = true;
            internalValueResult.stripeSizeBytes = this._stripeSizeBytes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._blockSizeBytes = undefined;
            this._bloomFilterColumns = undefined;
            this._bloomFilterFalsePositiveProbability = undefined;
            this._compression = undefined;
            this._dictionaryKeyThreshold = undefined;
            this._enablePadding = undefined;
            this._formatVersion = undefined;
            this._paddingTolerance = undefined;
            this._rowIndexStride = undefined;
            this._stripeSizeBytes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._blockSizeBytes = value.blockSizeBytes;
            this._bloomFilterColumns = value.bloomFilterColumns;
            this._bloomFilterFalsePositiveProbability = value.bloomFilterFalsePositiveProbability;
            this._compression = value.compression;
            this._dictionaryKeyThreshold = value.dictionaryKeyThreshold;
            this._enablePadding = value.enablePadding;
            this._formatVersion = value.formatVersion;
            this._paddingTolerance = value.paddingTolerance;
            this._rowIndexStride = value.rowIndexStride;
            this._stripeSizeBytes = value.stripeSizeBytes;
        }
    }
    // block_size_bytes - computed: false, optional: true, required: false
    _blockSizeBytes;
    get blockSizeBytes() {
        return this.getNumberAttribute('block_size_bytes');
    }
    set blockSizeBytes(value) {
        this._blockSizeBytes = value;
    }
    resetBlockSizeBytes() {
        this._blockSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blockSizeBytesInput() {
        return this._blockSizeBytes;
    }
    // bloom_filter_columns - computed: false, optional: true, required: false
    _bloomFilterColumns;
    get bloomFilterColumns() {
        return this.getListAttribute('bloom_filter_columns');
    }
    set bloomFilterColumns(value) {
        this._bloomFilterColumns = value;
    }
    resetBloomFilterColumns() {
        this._bloomFilterColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bloomFilterColumnsInput() {
        return this._bloomFilterColumns;
    }
    // bloom_filter_false_positive_probability - computed: false, optional: true, required: false
    _bloomFilterFalsePositiveProbability;
    get bloomFilterFalsePositiveProbability() {
        return this.getNumberAttribute('bloom_filter_false_positive_probability');
    }
    set bloomFilterFalsePositiveProbability(value) {
        this._bloomFilterFalsePositiveProbability = value;
    }
    resetBloomFilterFalsePositiveProbability() {
        this._bloomFilterFalsePositiveProbability = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bloomFilterFalsePositiveProbabilityInput() {
        return this._bloomFilterFalsePositiveProbability;
    }
    // compression - computed: false, optional: true, required: false
    _compression;
    get compression() {
        return this.getStringAttribute('compression');
    }
    set compression(value) {
        this._compression = value;
    }
    resetCompression() {
        this._compression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compressionInput() {
        return this._compression;
    }
    // dictionary_key_threshold - computed: false, optional: true, required: false
    _dictionaryKeyThreshold;
    get dictionaryKeyThreshold() {
        return this.getNumberAttribute('dictionary_key_threshold');
    }
    set dictionaryKeyThreshold(value) {
        this._dictionaryKeyThreshold = value;
    }
    resetDictionaryKeyThreshold() {
        this._dictionaryKeyThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dictionaryKeyThresholdInput() {
        return this._dictionaryKeyThreshold;
    }
    // enable_padding - computed: false, optional: true, required: false
    _enablePadding;
    get enablePadding() {
        return this.getBooleanAttribute('enable_padding');
    }
    set enablePadding(value) {
        this._enablePadding = value;
    }
    resetEnablePadding() {
        this._enablePadding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enablePaddingInput() {
        return this._enablePadding;
    }
    // format_version - computed: false, optional: true, required: false
    _formatVersion;
    get formatVersion() {
        return this.getStringAttribute('format_version');
    }
    set formatVersion(value) {
        this._formatVersion = value;
    }
    resetFormatVersion() {
        this._formatVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get formatVersionInput() {
        return this._formatVersion;
    }
    // padding_tolerance - computed: false, optional: true, required: false
    _paddingTolerance;
    get paddingTolerance() {
        return this.getNumberAttribute('padding_tolerance');
    }
    set paddingTolerance(value) {
        this._paddingTolerance = value;
    }
    resetPaddingTolerance() {
        this._paddingTolerance = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get paddingToleranceInput() {
        return this._paddingTolerance;
    }
    // row_index_stride - computed: false, optional: true, required: false
    _rowIndexStride;
    get rowIndexStride() {
        return this.getNumberAttribute('row_index_stride');
    }
    set rowIndexStride(value) {
        this._rowIndexStride = value;
    }
    resetRowIndexStride() {
        this._rowIndexStride = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get rowIndexStrideInput() {
        return this._rowIndexStride;
    }
    // stripe_size_bytes - computed: false, optional: true, required: false
    _stripeSizeBytes;
    get stripeSizeBytes() {
        return this.getNumberAttribute('stripe_size_bytes');
    }
    set stripeSizeBytes(value) {
        this._stripeSizeBytes = value;
    }
    resetStripeSizeBytes() {
        this._stripeSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stripeSizeBytesInput() {
        return this._stripeSizeBytes;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        block_size_bytes: cdktf.numberToTerraform(struct.blockSizeBytes),
        compression: cdktf.stringToTerraform(struct.compression),
        enable_dictionary_compression: cdktf.booleanToTerraform(struct.enableDictionaryCompression),
        max_padding_bytes: cdktf.numberToTerraform(struct.maxPaddingBytes),
        page_size_bytes: cdktf.numberToTerraform(struct.pageSizeBytes),
        writer_version: cdktf.stringToTerraform(struct.writerVersion),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference extends cdktf.ComplexObject {
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
        if (this._blockSizeBytes) {
            hasAnyValues = true;
            internalValueResult.blockSizeBytes = this._blockSizeBytes;
        }
        if (this._compression) {
            hasAnyValues = true;
            internalValueResult.compression = this._compression;
        }
        if (this._enableDictionaryCompression) {
            hasAnyValues = true;
            internalValueResult.enableDictionaryCompression = this._enableDictionaryCompression;
        }
        if (this._maxPaddingBytes) {
            hasAnyValues = true;
            internalValueResult.maxPaddingBytes = this._maxPaddingBytes;
        }
        if (this._pageSizeBytes) {
            hasAnyValues = true;
            internalValueResult.pageSizeBytes = this._pageSizeBytes;
        }
        if (this._writerVersion) {
            hasAnyValues = true;
            internalValueResult.writerVersion = this._writerVersion;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._blockSizeBytes = undefined;
            this._compression = undefined;
            this._enableDictionaryCompression = undefined;
            this._maxPaddingBytes = undefined;
            this._pageSizeBytes = undefined;
            this._writerVersion = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._blockSizeBytes = value.blockSizeBytes;
            this._compression = value.compression;
            this._enableDictionaryCompression = value.enableDictionaryCompression;
            this._maxPaddingBytes = value.maxPaddingBytes;
            this._pageSizeBytes = value.pageSizeBytes;
            this._writerVersion = value.writerVersion;
        }
    }
    // block_size_bytes - computed: false, optional: true, required: false
    _blockSizeBytes;
    get blockSizeBytes() {
        return this.getNumberAttribute('block_size_bytes');
    }
    set blockSizeBytes(value) {
        this._blockSizeBytes = value;
    }
    resetBlockSizeBytes() {
        this._blockSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get blockSizeBytesInput() {
        return this._blockSizeBytes;
    }
    // compression - computed: false, optional: true, required: false
    _compression;
    get compression() {
        return this.getStringAttribute('compression');
    }
    set compression(value) {
        this._compression = value;
    }
    resetCompression() {
        this._compression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compressionInput() {
        return this._compression;
    }
    // enable_dictionary_compression - computed: false, optional: true, required: false
    _enableDictionaryCompression;
    get enableDictionaryCompression() {
        return this.getBooleanAttribute('enable_dictionary_compression');
    }
    set enableDictionaryCompression(value) {
        this._enableDictionaryCompression = value;
    }
    resetEnableDictionaryCompression() {
        this._enableDictionaryCompression = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableDictionaryCompressionInput() {
        return this._enableDictionaryCompression;
    }
    // max_padding_bytes - computed: false, optional: true, required: false
    _maxPaddingBytes;
    get maxPaddingBytes() {
        return this.getNumberAttribute('max_padding_bytes');
    }
    set maxPaddingBytes(value) {
        this._maxPaddingBytes = value;
    }
    resetMaxPaddingBytes() {
        this._maxPaddingBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxPaddingBytesInput() {
        return this._maxPaddingBytes;
    }
    // page_size_bytes - computed: false, optional: true, required: false
    _pageSizeBytes;
    get pageSizeBytes() {
        return this.getNumberAttribute('page_size_bytes');
    }
    set pageSizeBytes(value) {
        this._pageSizeBytes = value;
    }
    resetPageSizeBytes() {
        this._pageSizeBytes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pageSizeBytesInput() {
        return this._pageSizeBytes;
    }
    // writer_version - computed: false, optional: true, required: false
    _writerVersion;
    get writerVersion() {
        return this.getStringAttribute('writer_version');
    }
    set writerVersion(value) {
        this._writerVersion = value;
    }
    resetWriterVersion() {
        this._writerVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get writerVersionInput() {
        return this._writerVersion;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        orc_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeToTerraform(struct.orcSerDe),
        parquet_ser_de: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeToTerraform(struct.parquetSerDe),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference extends cdktf.ComplexObject {
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
        if (this._orcSerDe?.internalValue) {
            hasAnyValues = true;
            internalValueResult.orcSerDe = this._orcSerDe?.internalValue;
        }
        if (this._parquetSerDe?.internalValue) {
            hasAnyValues = true;
            internalValueResult.parquetSerDe = this._parquetSerDe?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._orcSerDe.internalValue = undefined;
            this._parquetSerDe.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._orcSerDe.internalValue = value.orcSerDe;
            this._parquetSerDe.internalValue = value.parquetSerDe;
        }
    }
    // orc_ser_de - computed: false, optional: true, required: false
    _orcSerDe = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOrcSerDeOutputReference(this, "orc_ser_de", true);
    get orcSerDe() {
        return this._orcSerDe;
    }
    putOrcSerDe(value) {
        this._orcSerDe.internalValue = value;
    }
    resetOrcSerDe() {
        this._orcSerDe.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get orcSerDeInput() {
        return this._orcSerDe.internalValue;
    }
    // parquet_ser_de - computed: false, optional: true, required: false
    _parquetSerDe = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerParquetSerDeOutputReference(this, "parquet_ser_de", true);
    get parquetSerDe() {
        return this._parquetSerDe;
    }
    putParquetSerDe(value) {
        this._parquetSerDe.internalValue = value;
    }
    resetParquetSerDe() {
        this._parquetSerDe.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get parquetSerDeInput() {
        return this._parquetSerDe.internalValue;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        serializer: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerToTerraform(struct.serializer),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._serializer?.internalValue) {
            hasAnyValues = true;
            internalValueResult.serializer = this._serializer?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._serializer.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._serializer.internalValue = value.serializer;
        }
    }
    // serializer - computed: false, optional: false, required: true
    _serializer = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationSerializerOutputReference(this, "serializer", true);
    get serializer() {
        return this._serializer;
    }
    putSerializer(value) {
        this._serializer.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get serializerInput() {
        return this._serializer.internalValue;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        catalog_id: cdktf.stringToTerraform(struct.catalogId),
        database_name: cdktf.stringToTerraform(struct.databaseName),
        region: cdktf.stringToTerraform(struct.region),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        table_name: cdktf.stringToTerraform(struct.tableName),
        version_id: cdktf.stringToTerraform(struct.versionId),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._catalogId) {
            hasAnyValues = true;
            internalValueResult.catalogId = this._catalogId;
        }
        if (this._databaseName) {
            hasAnyValues = true;
            internalValueResult.databaseName = this._databaseName;
        }
        if (this._region) {
            hasAnyValues = true;
            internalValueResult.region = this._region;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._tableName) {
            hasAnyValues = true;
            internalValueResult.tableName = this._tableName;
        }
        if (this._versionId) {
            hasAnyValues = true;
            internalValueResult.versionId = this._versionId;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._catalogId = undefined;
            this._databaseName = undefined;
            this._region = undefined;
            this._roleArn = undefined;
            this._tableName = undefined;
            this._versionId = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._catalogId = value.catalogId;
            this._databaseName = value.databaseName;
            this._region = value.region;
            this._roleArn = value.roleArn;
            this._tableName = value.tableName;
            this._versionId = value.versionId;
        }
    }
    // catalog_id - computed: true, optional: true, required: false
    _catalogId;
    get catalogId() {
        return this.getStringAttribute('catalog_id');
    }
    set catalogId(value) {
        this._catalogId = value;
    }
    resetCatalogId() {
        this._catalogId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get catalogIdInput() {
        return this._catalogId;
    }
    // database_name - computed: false, optional: false, required: true
    _databaseName;
    get databaseName() {
        return this.getStringAttribute('database_name');
    }
    set databaseName(value) {
        this._databaseName = value;
    }
    // Temporarily expose input value. Use with caution.
    get databaseNameInput() {
        return this._databaseName;
    }
    // region - computed: true, optional: true, required: false
    _region;
    get region() {
        return this.getStringAttribute('region');
    }
    set region(value) {
        this._region = value;
    }
    resetRegion() {
        this._region = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regionInput() {
        return this._region;
    }
    // role_arn - computed: false, optional: false, required: true
    _roleArn;
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
    // table_name - computed: false, optional: false, required: true
    _tableName;
    get tableName() {
        return this.getStringAttribute('table_name');
    }
    set tableName(value) {
        this._tableName = value;
    }
    // Temporarily expose input value. Use with caution.
    get tableNameInput() {
        return this._tableName;
    }
    // version_id - computed: false, optional: true, required: false
    _versionId;
    get versionId() {
        return this.getStringAttribute('version_id');
    }
    set versionId(value) {
        this._versionId = value;
    }
    resetVersionId() {
        this._versionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionIdInput() {
        return this._versionId;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        input_format_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationToTerraform(struct.inputFormatConfiguration),
        output_format_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationToTerraform(struct.outputFormatConfiguration),
        schema_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationToTerraform(struct.schemaConfiguration),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._inputFormatConfiguration?.internalValue) {
            hasAnyValues = true;
            internalValueResult.inputFormatConfiguration = this._inputFormatConfiguration?.internalValue;
        }
        if (this._outputFormatConfiguration?.internalValue) {
            hasAnyValues = true;
            internalValueResult.outputFormatConfiguration = this._outputFormatConfiguration?.internalValue;
        }
        if (this._schemaConfiguration?.internalValue) {
            hasAnyValues = true;
            internalValueResult.schemaConfiguration = this._schemaConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._inputFormatConfiguration.internalValue = undefined;
            this._outputFormatConfiguration.internalValue = undefined;
            this._schemaConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._inputFormatConfiguration.internalValue = value.inputFormatConfiguration;
            this._outputFormatConfiguration.internalValue = value.outputFormatConfiguration;
            this._schemaConfiguration.internalValue = value.schemaConfiguration;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // input_format_configuration - computed: false, optional: false, required: true
    _inputFormatConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationInputFormatConfigurationOutputReference(this, "input_format_configuration", true);
    get inputFormatConfiguration() {
        return this._inputFormatConfiguration;
    }
    putInputFormatConfiguration(value) {
        this._inputFormatConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get inputFormatConfigurationInput() {
        return this._inputFormatConfiguration.internalValue;
    }
    // output_format_configuration - computed: false, optional: false, required: true
    _outputFormatConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputFormatConfigurationOutputReference(this, "output_format_configuration", true);
    get outputFormatConfiguration() {
        return this._outputFormatConfiguration;
    }
    putOutputFormatConfiguration(value) {
        this._outputFormatConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get outputFormatConfigurationInput() {
        return this._outputFormatConfiguration.internalValue;
    }
    // schema_configuration - computed: false, optional: false, required: true
    _schemaConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationSchemaConfigurationOutputReference(this, "schema_configuration", true);
    get schemaConfiguration() {
        return this._schemaConfiguration;
    }
    putSchemaConfiguration(value) {
        this._schemaConfiguration.internalValue = value;
    }
    // Temporarily expose input value. Use with caution.
    get schemaConfigurationInput() {
        return this._schemaConfiguration.internalValue;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        retry_duration: cdktf.numberToTerraform(struct.retryDuration),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._retryDuration) {
            hasAnyValues = true;
            internalValueResult.retryDuration = this._retryDuration;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._retryDuration = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._retryDuration = value.retryDuration;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // retry_duration - computed: false, optional: true, required: false
    _retryDuration;
    get retryDuration() {
        return this.getNumberAttribute('retry_duration');
    }
    set retryDuration(value) {
        this._retryDuration = value;
    }
    resetRetryDuration() {
        this._retryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retryDurationInput() {
        return this._retryDuration;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters),
    };
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._processors) {
            hasAnyValues = true;
            internalValueResult.processors = this._processors;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._processors = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._processors = value.processors;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // processors - computed: false, optional: true, required: false
    _processors;
    get processors() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('processors');
    }
    set processors(value) {
        this._processors = value;
    }
    resetProcessors() {
        this._processors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processorsInput() {
        return this._processors;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // log_group_name - computed: false, optional: true, required: false
    _logGroupName;
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    set logGroupName(value) {
        this._logGroupName = value;
    }
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logGroupNameInput() {
        return this._logGroupName;
    }
    // log_stream_name - computed: false, optional: true, required: false
    _logStreamName;
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    set logStreamName(value) {
        this._logStreamName = value;
    }
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffer_interval: cdktf.numberToTerraform(struct.bufferInterval),
        buffer_size: cdktf.numberToTerraform(struct.bufferSize),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._bucketArn) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._bufferInterval) {
            hasAnyValues = true;
            internalValueResult.bufferInterval = this._bufferInterval;
        }
        if (this._bufferSize) {
            hasAnyValues = true;
            internalValueResult.bufferSize = this._bufferSize;
        }
        if (this._compressionFormat) {
            hasAnyValues = true;
            internalValueResult.compressionFormat = this._compressionFormat;
        }
        if (this._kmsKeyArn) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._cloudwatchLoggingOptions?.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketArn = undefined;
            this._bufferInterval = undefined;
            this._bufferSize = undefined;
            this._compressionFormat = undefined;
            this._kmsKeyArn = undefined;
            this._prefix = undefined;
            this._roleArn = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketArn = value.bucketArn;
            this._bufferInterval = value.bufferInterval;
            this._bufferSize = value.bufferSize;
            this._compressionFormat = value.compressionFormat;
            this._kmsKeyArn = value.kmsKeyArn;
            this._prefix = value.prefix;
            this._roleArn = value.roleArn;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
        }
    }
    // bucket_arn - computed: false, optional: false, required: true
    _bucketArn;
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    set bucketArn(value) {
        this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketArnInput() {
        return this._bucketArn;
    }
    // buffer_interval - computed: false, optional: true, required: false
    _bufferInterval;
    get bufferInterval() {
        return this.getNumberAttribute('buffer_interval');
    }
    set bufferInterval(value) {
        this._bufferInterval = value;
    }
    resetBufferInterval() {
        this._bufferInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bufferIntervalInput() {
        return this._bufferInterval;
    }
    // buffer_size - computed: false, optional: true, required: false
    _bufferSize;
    get bufferSize() {
        return this.getNumberAttribute('buffer_size');
    }
    set bufferSize(value) {
        this._bufferSize = value;
    }
    resetBufferSize() {
        this._bufferSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bufferSizeInput() {
        return this._bufferSize;
    }
    // compression_format - computed: false, optional: true, required: false
    _compressionFormat;
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    set compressionFormat(value) {
        this._compressionFormat = value;
    }
    resetCompressionFormat() {
        this._compressionFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compressionFormatInput() {
        return this._compressionFormat;
    }
    // kms_key_arn - computed: false, optional: true, required: false
    _kmsKeyArn;
    get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    set kmsKeyArn(value) {
        this._kmsKeyArn = value;
    }
    resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
    // prefix - computed: false, optional: true, required: false
    _prefix;
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    set prefix(value) {
        this._prefix = value;
    }
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prefixInput() {
        return this._prefix;
    }
    // role_arn - computed: false, optional: false, required: true
    _roleArn;
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
    // cloudwatch_logging_options - computed: false, optional: true, required: false
    _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
}
export function kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffer_interval: cdktf.numberToTerraform(struct.bufferInterval),
        buffer_size: cdktf.numberToTerraform(struct.bufferSize),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        error_output_prefix: cdktf.stringToTerraform(struct.errorOutputPrefix),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        data_format_conversion_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationToTerraform(struct.dataFormatConversionConfiguration),
        dynamic_partitioning_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationToTerraform(struct.dynamicPartitioningConfiguration),
        processing_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationToTerraform(struct.processingConfiguration),
        s3_backup_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationToTerraform(struct.s3BackupConfiguration),
    };
}
export class KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._bucketArn) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._bufferInterval) {
            hasAnyValues = true;
            internalValueResult.bufferInterval = this._bufferInterval;
        }
        if (this._bufferSize) {
            hasAnyValues = true;
            internalValueResult.bufferSize = this._bufferSize;
        }
        if (this._compressionFormat) {
            hasAnyValues = true;
            internalValueResult.compressionFormat = this._compressionFormat;
        }
        if (this._errorOutputPrefix) {
            hasAnyValues = true;
            internalValueResult.errorOutputPrefix = this._errorOutputPrefix;
        }
        if (this._kmsKeyArn) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._s3BackupMode) {
            hasAnyValues = true;
            internalValueResult.s3BackupMode = this._s3BackupMode;
        }
        if (this._cloudwatchLoggingOptions?.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
        }
        if (this._dataFormatConversionConfiguration?.internalValue) {
            hasAnyValues = true;
            internalValueResult.dataFormatConversionConfiguration = this._dataFormatConversionConfiguration?.internalValue;
        }
        if (this._dynamicPartitioningConfiguration?.internalValue) {
            hasAnyValues = true;
            internalValueResult.dynamicPartitioningConfiguration = this._dynamicPartitioningConfiguration?.internalValue;
        }
        if (this._processingConfiguration?.internalValue) {
            hasAnyValues = true;
            internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
        }
        if (this._s3BackupConfiguration?.internalValue) {
            hasAnyValues = true;
            internalValueResult.s3BackupConfiguration = this._s3BackupConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketArn = undefined;
            this._bufferInterval = undefined;
            this._bufferSize = undefined;
            this._compressionFormat = undefined;
            this._errorOutputPrefix = undefined;
            this._kmsKeyArn = undefined;
            this._prefix = undefined;
            this._roleArn = undefined;
            this._s3BackupMode = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
            this._dataFormatConversionConfiguration.internalValue = undefined;
            this._dynamicPartitioningConfiguration.internalValue = undefined;
            this._processingConfiguration.internalValue = undefined;
            this._s3BackupConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketArn = value.bucketArn;
            this._bufferInterval = value.bufferInterval;
            this._bufferSize = value.bufferSize;
            this._compressionFormat = value.compressionFormat;
            this._errorOutputPrefix = value.errorOutputPrefix;
            this._kmsKeyArn = value.kmsKeyArn;
            this._prefix = value.prefix;
            this._roleArn = value.roleArn;
            this._s3BackupMode = value.s3BackupMode;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
            this._dataFormatConversionConfiguration.internalValue = value.dataFormatConversionConfiguration;
            this._dynamicPartitioningConfiguration.internalValue = value.dynamicPartitioningConfiguration;
            this._processingConfiguration.internalValue = value.processingConfiguration;
            this._s3BackupConfiguration.internalValue = value.s3BackupConfiguration;
        }
    }
    // bucket_arn - computed: false, optional: false, required: true
    _bucketArn;
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    set bucketArn(value) {
        this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketArnInput() {
        return this._bucketArn;
    }
    // buffer_interval - computed: false, optional: true, required: false
    _bufferInterval;
    get bufferInterval() {
        return this.getNumberAttribute('buffer_interval');
    }
    set bufferInterval(value) {
        this._bufferInterval = value;
    }
    resetBufferInterval() {
        this._bufferInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bufferIntervalInput() {
        return this._bufferInterval;
    }
    // buffer_size - computed: false, optional: true, required: false
    _bufferSize;
    get bufferSize() {
        return this.getNumberAttribute('buffer_size');
    }
    set bufferSize(value) {
        this._bufferSize = value;
    }
    resetBufferSize() {
        this._bufferSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bufferSizeInput() {
        return this._bufferSize;
    }
    // compression_format - computed: false, optional: true, required: false
    _compressionFormat;
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    set compressionFormat(value) {
        this._compressionFormat = value;
    }
    resetCompressionFormat() {
        this._compressionFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compressionFormatInput() {
        return this._compressionFormat;
    }
    // error_output_prefix - computed: false, optional: true, required: false
    _errorOutputPrefix;
    get errorOutputPrefix() {
        return this.getStringAttribute('error_output_prefix');
    }
    set errorOutputPrefix(value) {
        this._errorOutputPrefix = value;
    }
    resetErrorOutputPrefix() {
        this._errorOutputPrefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get errorOutputPrefixInput() {
        return this._errorOutputPrefix;
    }
    // kms_key_arn - computed: false, optional: true, required: false
    _kmsKeyArn;
    get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    set kmsKeyArn(value) {
        this._kmsKeyArn = value;
    }
    resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
    // prefix - computed: false, optional: true, required: false
    _prefix;
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    set prefix(value) {
        this._prefix = value;
    }
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prefixInput() {
        return this._prefix;
    }
    // role_arn - computed: false, optional: false, required: true
    _roleArn;
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
    // s3_backup_mode - computed: false, optional: true, required: false
    _s3BackupMode;
    get s3BackupMode() {
        return this.getStringAttribute('s3_backup_mode');
    }
    set s3BackupMode(value) {
        this._s3BackupMode = value;
    }
    resetS3BackupMode() {
        this._s3BackupMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3BackupModeInput() {
        return this._s3BackupMode;
    }
    // cloudwatch_logging_options - computed: false, optional: true, required: false
    _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
    // data_format_conversion_configuration - computed: false, optional: true, required: false
    _dataFormatConversionConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDataFormatConversionConfigurationOutputReference(this, "data_format_conversion_configuration", true);
    get dataFormatConversionConfiguration() {
        return this._dataFormatConversionConfiguration;
    }
    putDataFormatConversionConfiguration(value) {
        this._dataFormatConversionConfiguration.internalValue = value;
    }
    resetDataFormatConversionConfiguration() {
        this._dataFormatConversionConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dataFormatConversionConfigurationInput() {
        return this._dataFormatConversionConfiguration.internalValue;
    }
    // dynamic_partitioning_configuration - computed: false, optional: true, required: false
    _dynamicPartitioningConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationDynamicPartitioningConfigurationOutputReference(this, "dynamic_partitioning_configuration", true);
    get dynamicPartitioningConfiguration() {
        return this._dynamicPartitioningConfiguration;
    }
    putDynamicPartitioningConfiguration(value) {
        this._dynamicPartitioningConfiguration.internalValue = value;
    }
    resetDynamicPartitioningConfiguration() {
        this._dynamicPartitioningConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dynamicPartitioningConfigurationInput() {
        return this._dynamicPartitioningConfiguration.internalValue;
    }
    // processing_configuration - computed: false, optional: true, required: false
    _processingConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationProcessingConfigurationOutputReference(this, "processing_configuration", true);
    get processingConfiguration() {
        return this._processingConfiguration;
    }
    putProcessingConfiguration(value) {
        this._processingConfiguration.internalValue = value;
    }
    resetProcessingConfiguration() {
        this._processingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processingConfigurationInput() {
        return this._processingConfiguration.internalValue;
    }
    // s3_backup_configuration - computed: false, optional: true, required: false
    _s3BackupConfiguration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationS3BackupConfigurationOutputReference(this, "s3_backup_configuration", true);
    get s3BackupConfiguration() {
        return this._s3BackupConfiguration;
    }
    putS3BackupConfiguration(value) {
        this._s3BackupConfiguration.internalValue = value;
    }
    resetS3BackupConfiguration() {
        this._s3BackupConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3BackupConfigurationInput() {
        return this._s3BackupConfiguration.internalValue;
    }
}
export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // log_group_name - computed: false, optional: true, required: false
    _logGroupName;
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    set logGroupName(value) {
        this._logGroupName = value;
    }
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logGroupNameInput() {
        return this._logGroupName;
    }
    // log_stream_name - computed: false, optional: true, required: false
    _logStreamName;
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    set logStreamName(value) {
        this._logStreamName = value;
    }
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters),
    };
}
export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors),
    };
}
export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._processors) {
            hasAnyValues = true;
            internalValueResult.processors = this._processors;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._processors = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._processors = value.processors;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // processors - computed: false, optional: true, required: false
    _processors;
    get processors() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('processors');
    }
    set processors(value) {
        this._processors = value;
    }
    resetProcessors() {
        this._processors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processorsInput() {
        return this._processors;
    }
}
export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        name: cdktf.stringToTerraform(struct.name),
        value: cdktf.stringToTerraform(struct.value),
    };
}
export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        content_encoding: cdktf.stringToTerraform(struct.contentEncoding),
        common_attributes: cdktf.listMapper(kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationCommonAttributesToTerraform)(struct.commonAttributes),
    };
}
export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._contentEncoding) {
            hasAnyValues = true;
            internalValueResult.contentEncoding = this._contentEncoding;
        }
        if (this._commonAttributes) {
            hasAnyValues = true;
            internalValueResult.commonAttributes = this._commonAttributes;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._contentEncoding = undefined;
            this._commonAttributes = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._contentEncoding = value.contentEncoding;
            this._commonAttributes = value.commonAttributes;
        }
    }
    // content_encoding - computed: false, optional: true, required: false
    _contentEncoding;
    get contentEncoding() {
        return this.getStringAttribute('content_encoding');
    }
    set contentEncoding(value) {
        this._contentEncoding = value;
    }
    resetContentEncoding() {
        this._contentEncoding = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get contentEncodingInput() {
        return this._contentEncoding;
    }
    // common_attributes - computed: false, optional: true, required: false
    _commonAttributes;
    get commonAttributes() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('common_attributes');
    }
    set commonAttributes(value) {
        this._commonAttributes = value;
    }
    resetCommonAttributes() {
        this._commonAttributes = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get commonAttributesInput() {
        return this._commonAttributes;
    }
}
export function kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        access_key: cdktf.stringToTerraform(struct.accessKey),
        buffering_interval: cdktf.numberToTerraform(struct.bufferingInterval),
        buffering_size: cdktf.numberToTerraform(struct.bufferingSize),
        name: cdktf.stringToTerraform(struct.name),
        retry_duration: cdktf.numberToTerraform(struct.retryDuration),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        url: cdktf.stringToTerraform(struct.url),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        processing_configuration: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationToTerraform(struct.processingConfiguration),
        request_configuration: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationToTerraform(struct.requestConfiguration),
    };
}
export class KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._accessKey) {
            hasAnyValues = true;
            internalValueResult.accessKey = this._accessKey;
        }
        if (this._bufferingInterval) {
            hasAnyValues = true;
            internalValueResult.bufferingInterval = this._bufferingInterval;
        }
        if (this._bufferingSize) {
            hasAnyValues = true;
            internalValueResult.bufferingSize = this._bufferingSize;
        }
        if (this._name) {
            hasAnyValues = true;
            internalValueResult.name = this._name;
        }
        if (this._retryDuration) {
            hasAnyValues = true;
            internalValueResult.retryDuration = this._retryDuration;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._s3BackupMode) {
            hasAnyValues = true;
            internalValueResult.s3BackupMode = this._s3BackupMode;
        }
        if (this._url) {
            hasAnyValues = true;
            internalValueResult.url = this._url;
        }
        if (this._cloudwatchLoggingOptions?.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
        }
        if (this._processingConfiguration?.internalValue) {
            hasAnyValues = true;
            internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
        }
        if (this._requestConfiguration?.internalValue) {
            hasAnyValues = true;
            internalValueResult.requestConfiguration = this._requestConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._accessKey = undefined;
            this._bufferingInterval = undefined;
            this._bufferingSize = undefined;
            this._name = undefined;
            this._retryDuration = undefined;
            this._roleArn = undefined;
            this._s3BackupMode = undefined;
            this._url = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
            this._processingConfiguration.internalValue = undefined;
            this._requestConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._accessKey = value.accessKey;
            this._bufferingInterval = value.bufferingInterval;
            this._bufferingSize = value.bufferingSize;
            this._name = value.name;
            this._retryDuration = value.retryDuration;
            this._roleArn = value.roleArn;
            this._s3BackupMode = value.s3BackupMode;
            this._url = value.url;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
            this._processingConfiguration.internalValue = value.processingConfiguration;
            this._requestConfiguration.internalValue = value.requestConfiguration;
        }
    }
    // access_key - computed: false, optional: true, required: false
    _accessKey;
    get accessKey() {
        return this.getStringAttribute('access_key');
    }
    set accessKey(value) {
        this._accessKey = value;
    }
    resetAccessKey() {
        this._accessKey = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessKeyInput() {
        return this._accessKey;
    }
    // buffering_interval - computed: false, optional: true, required: false
    _bufferingInterval;
    get bufferingInterval() {
        return this.getNumberAttribute('buffering_interval');
    }
    set bufferingInterval(value) {
        this._bufferingInterval = value;
    }
    resetBufferingInterval() {
        this._bufferingInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bufferingIntervalInput() {
        return this._bufferingInterval;
    }
    // buffering_size - computed: false, optional: true, required: false
    _bufferingSize;
    get bufferingSize() {
        return this.getNumberAttribute('buffering_size');
    }
    set bufferingSize(value) {
        this._bufferingSize = value;
    }
    resetBufferingSize() {
        this._bufferingSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bufferingSizeInput() {
        return this._bufferingSize;
    }
    // name - computed: false, optional: true, required: false
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
    // retry_duration - computed: false, optional: true, required: false
    _retryDuration;
    get retryDuration() {
        return this.getNumberAttribute('retry_duration');
    }
    set retryDuration(value) {
        this._retryDuration = value;
    }
    resetRetryDuration() {
        this._retryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retryDurationInput() {
        return this._retryDuration;
    }
    // role_arn - computed: false, optional: true, required: false
    _roleArn;
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    resetRoleArn() {
        this._roleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
    // s3_backup_mode - computed: false, optional: true, required: false
    _s3BackupMode;
    get s3BackupMode() {
        return this.getStringAttribute('s3_backup_mode');
    }
    set s3BackupMode(value) {
        this._s3BackupMode = value;
    }
    resetS3BackupMode() {
        this._s3BackupMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3BackupModeInput() {
        return this._s3BackupMode;
    }
    // url - computed: false, optional: false, required: true
    _url;
    get url() {
        return this.getStringAttribute('url');
    }
    set url(value) {
        this._url = value;
    }
    // Temporarily expose input value. Use with caution.
    get urlInput() {
        return this._url;
    }
    // cloudwatch_logging_options - computed: false, optional: true, required: false
    _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
    // processing_configuration - computed: false, optional: true, required: false
    _processingConfiguration = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationProcessingConfigurationOutputReference(this, "processing_configuration", true);
    get processingConfiguration() {
        return this._processingConfiguration;
    }
    putProcessingConfiguration(value) {
        this._processingConfiguration.internalValue = value;
    }
    resetProcessingConfiguration() {
        this._processingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processingConfigurationInput() {
        return this._processingConfiguration.internalValue;
    }
    // request_configuration - computed: false, optional: true, required: false
    _requestConfiguration = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationRequestConfigurationOutputReference(this, "request_configuration", true);
    get requestConfiguration() {
        return this._requestConfiguration;
    }
    putRequestConfiguration(value) {
        this._requestConfiguration.internalValue = value;
    }
    resetRequestConfiguration() {
        this._requestConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestConfigurationInput() {
        return this._requestConfiguration.internalValue;
    }
}
export function kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        kinesis_stream_arn: cdktf.stringToTerraform(struct.kinesisStreamArn),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
    };
}
export class KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._kinesisStreamArn) {
            hasAnyValues = true;
            internalValueResult.kinesisStreamArn = this._kinesisStreamArn;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._kinesisStreamArn = undefined;
            this._roleArn = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._kinesisStreamArn = value.kinesisStreamArn;
            this._roleArn = value.roleArn;
        }
    }
    // kinesis_stream_arn - computed: false, optional: false, required: true
    _kinesisStreamArn;
    get kinesisStreamArn() {
        return this.getStringAttribute('kinesis_stream_arn');
    }
    set kinesisStreamArn(value) {
        this._kinesisStreamArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get kinesisStreamArnInput() {
        return this._kinesisStreamArn;
    }
    // role_arn - computed: false, optional: false, required: true
    _roleArn;
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
}
export function kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
export class KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // log_group_name - computed: false, optional: true, required: false
    _logGroupName;
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    set logGroupName(value) {
        this._logGroupName = value;
    }
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logGroupNameInput() {
        return this._logGroupName;
    }
    // log_stream_name - computed: false, optional: true, required: false
    _logStreamName;
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    set logStreamName(value) {
        this._logStreamName = value;
    }
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
export function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
export function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters),
    };
}
export function kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors),
    };
}
export class KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._processors) {
            hasAnyValues = true;
            internalValueResult.processors = this._processors;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._processors = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._processors = value.processors;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // processors - computed: false, optional: true, required: false
    _processors;
    get processors() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('processors');
    }
    set processors(value) {
        this._processors = value;
    }
    resetProcessors() {
        this._processors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processorsInput() {
        return this._processors;
    }
}
export function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
export class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // log_group_name - computed: false, optional: true, required: false
    _logGroupName;
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    set logGroupName(value) {
        this._logGroupName = value;
    }
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logGroupNameInput() {
        return this._logGroupName;
    }
    // log_stream_name - computed: false, optional: true, required: false
    _logStreamName;
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    set logStreamName(value) {
        this._logStreamName = value;
    }
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
export function kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffer_interval: cdktf.numberToTerraform(struct.bufferInterval),
        buffer_size: cdktf.numberToTerraform(struct.bufferSize),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
    };
}
export class KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._bucketArn) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._bufferInterval) {
            hasAnyValues = true;
            internalValueResult.bufferInterval = this._bufferInterval;
        }
        if (this._bufferSize) {
            hasAnyValues = true;
            internalValueResult.bufferSize = this._bufferSize;
        }
        if (this._compressionFormat) {
            hasAnyValues = true;
            internalValueResult.compressionFormat = this._compressionFormat;
        }
        if (this._kmsKeyArn) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._cloudwatchLoggingOptions?.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketArn = undefined;
            this._bufferInterval = undefined;
            this._bufferSize = undefined;
            this._compressionFormat = undefined;
            this._kmsKeyArn = undefined;
            this._prefix = undefined;
            this._roleArn = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketArn = value.bucketArn;
            this._bufferInterval = value.bufferInterval;
            this._bufferSize = value.bufferSize;
            this._compressionFormat = value.compressionFormat;
            this._kmsKeyArn = value.kmsKeyArn;
            this._prefix = value.prefix;
            this._roleArn = value.roleArn;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
        }
    }
    // bucket_arn - computed: false, optional: false, required: true
    _bucketArn;
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    set bucketArn(value) {
        this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketArnInput() {
        return this._bucketArn;
    }
    // buffer_interval - computed: false, optional: true, required: false
    _bufferInterval;
    get bufferInterval() {
        return this.getNumberAttribute('buffer_interval');
    }
    set bufferInterval(value) {
        this._bufferInterval = value;
    }
    resetBufferInterval() {
        this._bufferInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bufferIntervalInput() {
        return this._bufferInterval;
    }
    // buffer_size - computed: false, optional: true, required: false
    _bufferSize;
    get bufferSize() {
        return this.getNumberAttribute('buffer_size');
    }
    set bufferSize(value) {
        this._bufferSize = value;
    }
    resetBufferSize() {
        this._bufferSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bufferSizeInput() {
        return this._bufferSize;
    }
    // compression_format - computed: false, optional: true, required: false
    _compressionFormat;
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    set compressionFormat(value) {
        this._compressionFormat = value;
    }
    resetCompressionFormat() {
        this._compressionFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compressionFormatInput() {
        return this._compressionFormat;
    }
    // kms_key_arn - computed: false, optional: true, required: false
    _kmsKeyArn;
    get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    set kmsKeyArn(value) {
        this._kmsKeyArn = value;
    }
    resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
    // prefix - computed: false, optional: true, required: false
    _prefix;
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    set prefix(value) {
        this._prefix = value;
    }
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prefixInput() {
        return this._prefix;
    }
    // role_arn - computed: false, optional: false, required: true
    _roleArn;
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
    // cloudwatch_logging_options - computed: false, optional: true, required: false
    _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
}
export function kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        cluster_jdbcurl: cdktf.stringToTerraform(struct.clusterJdbcurl),
        copy_options: cdktf.stringToTerraform(struct.copyOptions),
        data_table_columns: cdktf.stringToTerraform(struct.dataTableColumns),
        data_table_name: cdktf.stringToTerraform(struct.dataTableName),
        password: cdktf.stringToTerraform(struct.password),
        retry_duration: cdktf.numberToTerraform(struct.retryDuration),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        username: cdktf.stringToTerraform(struct.username),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        processing_configuration: kinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationToTerraform(struct.processingConfiguration),
        s3_backup_configuration: kinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationToTerraform(struct.s3BackupConfiguration),
    };
}
export class KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._clusterJdbcurl) {
            hasAnyValues = true;
            internalValueResult.clusterJdbcurl = this._clusterJdbcurl;
        }
        if (this._copyOptions) {
            hasAnyValues = true;
            internalValueResult.copyOptions = this._copyOptions;
        }
        if (this._dataTableColumns) {
            hasAnyValues = true;
            internalValueResult.dataTableColumns = this._dataTableColumns;
        }
        if (this._dataTableName) {
            hasAnyValues = true;
            internalValueResult.dataTableName = this._dataTableName;
        }
        if (this._password) {
            hasAnyValues = true;
            internalValueResult.password = this._password;
        }
        if (this._retryDuration) {
            hasAnyValues = true;
            internalValueResult.retryDuration = this._retryDuration;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._s3BackupMode) {
            hasAnyValues = true;
            internalValueResult.s3BackupMode = this._s3BackupMode;
        }
        if (this._username) {
            hasAnyValues = true;
            internalValueResult.username = this._username;
        }
        if (this._cloudwatchLoggingOptions?.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
        }
        if (this._processingConfiguration?.internalValue) {
            hasAnyValues = true;
            internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
        }
        if (this._s3BackupConfiguration?.internalValue) {
            hasAnyValues = true;
            internalValueResult.s3BackupConfiguration = this._s3BackupConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._clusterJdbcurl = undefined;
            this._copyOptions = undefined;
            this._dataTableColumns = undefined;
            this._dataTableName = undefined;
            this._password = undefined;
            this._retryDuration = undefined;
            this._roleArn = undefined;
            this._s3BackupMode = undefined;
            this._username = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
            this._processingConfiguration.internalValue = undefined;
            this._s3BackupConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._clusterJdbcurl = value.clusterJdbcurl;
            this._copyOptions = value.copyOptions;
            this._dataTableColumns = value.dataTableColumns;
            this._dataTableName = value.dataTableName;
            this._password = value.password;
            this._retryDuration = value.retryDuration;
            this._roleArn = value.roleArn;
            this._s3BackupMode = value.s3BackupMode;
            this._username = value.username;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
            this._processingConfiguration.internalValue = value.processingConfiguration;
            this._s3BackupConfiguration.internalValue = value.s3BackupConfiguration;
        }
    }
    // cluster_jdbcurl - computed: false, optional: false, required: true
    _clusterJdbcurl;
    get clusterJdbcurl() {
        return this.getStringAttribute('cluster_jdbcurl');
    }
    set clusterJdbcurl(value) {
        this._clusterJdbcurl = value;
    }
    // Temporarily expose input value. Use with caution.
    get clusterJdbcurlInput() {
        return this._clusterJdbcurl;
    }
    // copy_options - computed: false, optional: true, required: false
    _copyOptions;
    get copyOptions() {
        return this.getStringAttribute('copy_options');
    }
    set copyOptions(value) {
        this._copyOptions = value;
    }
    resetCopyOptions() {
        this._copyOptions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get copyOptionsInput() {
        return this._copyOptions;
    }
    // data_table_columns - computed: false, optional: true, required: false
    _dataTableColumns;
    get dataTableColumns() {
        return this.getStringAttribute('data_table_columns');
    }
    set dataTableColumns(value) {
        this._dataTableColumns = value;
    }
    resetDataTableColumns() {
        this._dataTableColumns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get dataTableColumnsInput() {
        return this._dataTableColumns;
    }
    // data_table_name - computed: false, optional: false, required: true
    _dataTableName;
    get dataTableName() {
        return this.getStringAttribute('data_table_name');
    }
    set dataTableName(value) {
        this._dataTableName = value;
    }
    // Temporarily expose input value. Use with caution.
    get dataTableNameInput() {
        return this._dataTableName;
    }
    // password - computed: false, optional: false, required: true
    _password;
    get password() {
        return this.getStringAttribute('password');
    }
    set password(value) {
        this._password = value;
    }
    // Temporarily expose input value. Use with caution.
    get passwordInput() {
        return this._password;
    }
    // retry_duration - computed: false, optional: true, required: false
    _retryDuration;
    get retryDuration() {
        return this.getNumberAttribute('retry_duration');
    }
    set retryDuration(value) {
        this._retryDuration = value;
    }
    resetRetryDuration() {
        this._retryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retryDurationInput() {
        return this._retryDuration;
    }
    // role_arn - computed: false, optional: false, required: true
    _roleArn;
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
    // s3_backup_mode - computed: false, optional: true, required: false
    _s3BackupMode;
    get s3BackupMode() {
        return this.getStringAttribute('s3_backup_mode');
    }
    set s3BackupMode(value) {
        this._s3BackupMode = value;
    }
    resetS3BackupMode() {
        this._s3BackupMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3BackupModeInput() {
        return this._s3BackupMode;
    }
    // username - computed: false, optional: false, required: true
    _username;
    get username() {
        return this.getStringAttribute('username');
    }
    set username(value) {
        this._username = value;
    }
    // Temporarily expose input value. Use with caution.
    get usernameInput() {
        return this._username;
    }
    // cloudwatch_logging_options - computed: false, optional: true, required: false
    _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamRedshiftConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
    // processing_configuration - computed: false, optional: true, required: false
    _processingConfiguration = new KinesisFirehoseDeliveryStreamRedshiftConfigurationProcessingConfigurationOutputReference(this, "processing_configuration", true);
    get processingConfiguration() {
        return this._processingConfiguration;
    }
    putProcessingConfiguration(value) {
        this._processingConfiguration.internalValue = value;
    }
    resetProcessingConfiguration() {
        this._processingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processingConfigurationInput() {
        return this._processingConfiguration.internalValue;
    }
    // s3_backup_configuration - computed: false, optional: true, required: false
    _s3BackupConfiguration = new KinesisFirehoseDeliveryStreamRedshiftConfigurationS3BackupConfigurationOutputReference(this, "s3_backup_configuration", true);
    get s3BackupConfiguration() {
        return this._s3BackupConfiguration;
    }
    putS3BackupConfiguration(value) {
        this._s3BackupConfiguration.internalValue = value;
    }
    resetS3BackupConfiguration() {
        this._s3BackupConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3BackupConfigurationInput() {
        return this._s3BackupConfiguration.internalValue;
    }
}
export function kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
export class KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // log_group_name - computed: false, optional: true, required: false
    _logGroupName;
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    set logGroupName(value) {
        this._logGroupName = value;
    }
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logGroupNameInput() {
        return this._logGroupName;
    }
    // log_stream_name - computed: false, optional: true, required: false
    _logStreamName;
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    set logStreamName(value) {
        this._logStreamName = value;
    }
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
export function kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        bucket_arn: cdktf.stringToTerraform(struct.bucketArn),
        buffer_interval: cdktf.numberToTerraform(struct.bufferInterval),
        buffer_size: cdktf.numberToTerraform(struct.bufferSize),
        compression_format: cdktf.stringToTerraform(struct.compressionFormat),
        kms_key_arn: cdktf.stringToTerraform(struct.kmsKeyArn),
        prefix: cdktf.stringToTerraform(struct.prefix),
        role_arn: cdktf.stringToTerraform(struct.roleArn),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
    };
}
export class KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._bucketArn) {
            hasAnyValues = true;
            internalValueResult.bucketArn = this._bucketArn;
        }
        if (this._bufferInterval) {
            hasAnyValues = true;
            internalValueResult.bufferInterval = this._bufferInterval;
        }
        if (this._bufferSize) {
            hasAnyValues = true;
            internalValueResult.bufferSize = this._bufferSize;
        }
        if (this._compressionFormat) {
            hasAnyValues = true;
            internalValueResult.compressionFormat = this._compressionFormat;
        }
        if (this._kmsKeyArn) {
            hasAnyValues = true;
            internalValueResult.kmsKeyArn = this._kmsKeyArn;
        }
        if (this._prefix) {
            hasAnyValues = true;
            internalValueResult.prefix = this._prefix;
        }
        if (this._roleArn) {
            hasAnyValues = true;
            internalValueResult.roleArn = this._roleArn;
        }
        if (this._cloudwatchLoggingOptions?.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._bucketArn = undefined;
            this._bufferInterval = undefined;
            this._bufferSize = undefined;
            this._compressionFormat = undefined;
            this._kmsKeyArn = undefined;
            this._prefix = undefined;
            this._roleArn = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._bucketArn = value.bucketArn;
            this._bufferInterval = value.bufferInterval;
            this._bufferSize = value.bufferSize;
            this._compressionFormat = value.compressionFormat;
            this._kmsKeyArn = value.kmsKeyArn;
            this._prefix = value.prefix;
            this._roleArn = value.roleArn;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
        }
    }
    // bucket_arn - computed: false, optional: false, required: true
    _bucketArn;
    get bucketArn() {
        return this.getStringAttribute('bucket_arn');
    }
    set bucketArn(value) {
        this._bucketArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get bucketArnInput() {
        return this._bucketArn;
    }
    // buffer_interval - computed: false, optional: true, required: false
    _bufferInterval;
    get bufferInterval() {
        return this.getNumberAttribute('buffer_interval');
    }
    set bufferInterval(value) {
        this._bufferInterval = value;
    }
    resetBufferInterval() {
        this._bufferInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bufferIntervalInput() {
        return this._bufferInterval;
    }
    // buffer_size - computed: false, optional: true, required: false
    _bufferSize;
    get bufferSize() {
        return this.getNumberAttribute('buffer_size');
    }
    set bufferSize(value) {
        this._bufferSize = value;
    }
    resetBufferSize() {
        this._bufferSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get bufferSizeInput() {
        return this._bufferSize;
    }
    // compression_format - computed: false, optional: true, required: false
    _compressionFormat;
    get compressionFormat() {
        return this.getStringAttribute('compression_format');
    }
    set compressionFormat(value) {
        this._compressionFormat = value;
    }
    resetCompressionFormat() {
        this._compressionFormat = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get compressionFormatInput() {
        return this._compressionFormat;
    }
    // kms_key_arn - computed: false, optional: true, required: false
    _kmsKeyArn;
    get kmsKeyArn() {
        return this.getStringAttribute('kms_key_arn');
    }
    set kmsKeyArn(value) {
        this._kmsKeyArn = value;
    }
    resetKmsKeyArn() {
        this._kmsKeyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kmsKeyArnInput() {
        return this._kmsKeyArn;
    }
    // prefix - computed: false, optional: true, required: false
    _prefix;
    get prefix() {
        return this.getStringAttribute('prefix');
    }
    set prefix(value) {
        this._prefix = value;
    }
    resetPrefix() {
        this._prefix = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get prefixInput() {
        return this._prefix;
    }
    // role_arn - computed: false, optional: false, required: true
    _roleArn;
    get roleArn() {
        return this.getStringAttribute('role_arn');
    }
    set roleArn(value) {
        this._roleArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get roleArnInput() {
        return this._roleArn;
    }
    // cloudwatch_logging_options - computed: false, optional: true, required: false
    _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamS3ConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
}
export function kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        key_arn: cdktf.stringToTerraform(struct.keyArn),
        key_type: cdktf.stringToTerraform(struct.keyType),
    };
}
export class KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference extends cdktf.ComplexObject {
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
        if (this._keyArn) {
            hasAnyValues = true;
            internalValueResult.keyArn = this._keyArn;
        }
        if (this._keyType) {
            hasAnyValues = true;
            internalValueResult.keyType = this._keyType;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._keyArn = undefined;
            this._keyType = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._keyArn = value.keyArn;
            this._keyType = value.keyType;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // key_arn - computed: false, optional: true, required: false
    _keyArn;
    get keyArn() {
        return this.getStringAttribute('key_arn');
    }
    set keyArn(value) {
        this._keyArn = value;
    }
    resetKeyArn() {
        this._keyArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyArnInput() {
        return this._keyArn;
    }
    // key_type - computed: false, optional: true, required: false
    _keyType;
    get keyType() {
        return this.getStringAttribute('key_type');
    }
    set keyType(value) {
        this._keyType = value;
    }
    resetKeyType() {
        this._keyType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get keyTypeInput() {
        return this._keyType;
    }
}
export function kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        log_group_name: cdktf.stringToTerraform(struct.logGroupName),
        log_stream_name: cdktf.stringToTerraform(struct.logStreamName),
    };
}
export class KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference extends cdktf.ComplexObject {
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
        if (this._logGroupName) {
            hasAnyValues = true;
            internalValueResult.logGroupName = this._logGroupName;
        }
        if (this._logStreamName) {
            hasAnyValues = true;
            internalValueResult.logStreamName = this._logStreamName;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._logGroupName = undefined;
            this._logStreamName = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._logGroupName = value.logGroupName;
            this._logStreamName = value.logStreamName;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // log_group_name - computed: false, optional: true, required: false
    _logGroupName;
    get logGroupName() {
        return this.getStringAttribute('log_group_name');
    }
    set logGroupName(value) {
        this._logGroupName = value;
    }
    resetLogGroupName() {
        this._logGroupName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logGroupNameInput() {
        return this._logGroupName;
    }
    // log_stream_name - computed: false, optional: true, required: false
    _logStreamName;
    get logStreamName() {
        return this.getStringAttribute('log_stream_name');
    }
    set logStreamName(value) {
        this._logStreamName = value;
    }
    resetLogStreamName() {
        this._logStreamName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get logStreamNameInput() {
        return this._logStreamName;
    }
}
export function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        parameter_name: cdktf.stringToTerraform(struct.parameterName),
        parameter_value: cdktf.stringToTerraform(struct.parameterValue),
    };
}
export function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        type: cdktf.stringToTerraform(struct.type),
        parameters: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsParametersToTerraform)(struct.parameters),
    };
}
export function kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        enabled: cdktf.booleanToTerraform(struct.enabled),
        processors: cdktf.listMapper(kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationProcessorsToTerraform)(struct.processors),
    };
}
export class KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._processors) {
            hasAnyValues = true;
            internalValueResult.processors = this._processors;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._enabled = undefined;
            this._processors = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._enabled = value.enabled;
            this._processors = value.processors;
        }
    }
    // enabled - computed: false, optional: true, required: false
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
    // processors - computed: false, optional: true, required: false
    _processors;
    get processors() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('processors');
    }
    set processors(value) {
        this._processors = value;
    }
    resetProcessors() {
        this._processors = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processorsInput() {
        return this._processors;
    }
}
export function kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        hec_acknowledgment_timeout: cdktf.numberToTerraform(struct.hecAcknowledgmentTimeout),
        hec_endpoint: cdktf.stringToTerraform(struct.hecEndpoint),
        hec_endpoint_type: cdktf.stringToTerraform(struct.hecEndpointType),
        hec_token: cdktf.stringToTerraform(struct.hecToken),
        retry_duration: cdktf.numberToTerraform(struct.retryDuration),
        s3_backup_mode: cdktf.stringToTerraform(struct.s3BackupMode),
        cloudwatch_logging_options: kinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsToTerraform(struct.cloudwatchLoggingOptions),
        processing_configuration: kinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationToTerraform(struct.processingConfiguration),
    };
}
export class KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference extends cdktf.ComplexObject {
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
        if (this._hecAcknowledgmentTimeout) {
            hasAnyValues = true;
            internalValueResult.hecAcknowledgmentTimeout = this._hecAcknowledgmentTimeout;
        }
        if (this._hecEndpoint) {
            hasAnyValues = true;
            internalValueResult.hecEndpoint = this._hecEndpoint;
        }
        if (this._hecEndpointType) {
            hasAnyValues = true;
            internalValueResult.hecEndpointType = this._hecEndpointType;
        }
        if (this._hecToken) {
            hasAnyValues = true;
            internalValueResult.hecToken = this._hecToken;
        }
        if (this._retryDuration) {
            hasAnyValues = true;
            internalValueResult.retryDuration = this._retryDuration;
        }
        if (this._s3BackupMode) {
            hasAnyValues = true;
            internalValueResult.s3BackupMode = this._s3BackupMode;
        }
        if (this._cloudwatchLoggingOptions?.internalValue) {
            hasAnyValues = true;
            internalValueResult.cloudwatchLoggingOptions = this._cloudwatchLoggingOptions?.internalValue;
        }
        if (this._processingConfiguration?.internalValue) {
            hasAnyValues = true;
            internalValueResult.processingConfiguration = this._processingConfiguration?.internalValue;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._hecAcknowledgmentTimeout = undefined;
            this._hecEndpoint = undefined;
            this._hecEndpointType = undefined;
            this._hecToken = undefined;
            this._retryDuration = undefined;
            this._s3BackupMode = undefined;
            this._cloudwatchLoggingOptions.internalValue = undefined;
            this._processingConfiguration.internalValue = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._hecAcknowledgmentTimeout = value.hecAcknowledgmentTimeout;
            this._hecEndpoint = value.hecEndpoint;
            this._hecEndpointType = value.hecEndpointType;
            this._hecToken = value.hecToken;
            this._retryDuration = value.retryDuration;
            this._s3BackupMode = value.s3BackupMode;
            this._cloudwatchLoggingOptions.internalValue = value.cloudwatchLoggingOptions;
            this._processingConfiguration.internalValue = value.processingConfiguration;
        }
    }
    // hec_acknowledgment_timeout - computed: false, optional: true, required: false
    _hecAcknowledgmentTimeout;
    get hecAcknowledgmentTimeout() {
        return this.getNumberAttribute('hec_acknowledgment_timeout');
    }
    set hecAcknowledgmentTimeout(value) {
        this._hecAcknowledgmentTimeout = value;
    }
    resetHecAcknowledgmentTimeout() {
        this._hecAcknowledgmentTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hecAcknowledgmentTimeoutInput() {
        return this._hecAcknowledgmentTimeout;
    }
    // hec_endpoint - computed: false, optional: false, required: true
    _hecEndpoint;
    get hecEndpoint() {
        return this.getStringAttribute('hec_endpoint');
    }
    set hecEndpoint(value) {
        this._hecEndpoint = value;
    }
    // Temporarily expose input value. Use with caution.
    get hecEndpointInput() {
        return this._hecEndpoint;
    }
    // hec_endpoint_type - computed: false, optional: true, required: false
    _hecEndpointType;
    get hecEndpointType() {
        return this.getStringAttribute('hec_endpoint_type');
    }
    set hecEndpointType(value) {
        this._hecEndpointType = value;
    }
    resetHecEndpointType() {
        this._hecEndpointType = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hecEndpointTypeInput() {
        return this._hecEndpointType;
    }
    // hec_token - computed: false, optional: false, required: true
    _hecToken;
    get hecToken() {
        return this.getStringAttribute('hec_token');
    }
    set hecToken(value) {
        this._hecToken = value;
    }
    // Temporarily expose input value. Use with caution.
    get hecTokenInput() {
        return this._hecToken;
    }
    // retry_duration - computed: false, optional: true, required: false
    _retryDuration;
    get retryDuration() {
        return this.getNumberAttribute('retry_duration');
    }
    set retryDuration(value) {
        this._retryDuration = value;
    }
    resetRetryDuration() {
        this._retryDuration = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get retryDurationInput() {
        return this._retryDuration;
    }
    // s3_backup_mode - computed: false, optional: true, required: false
    _s3BackupMode;
    get s3BackupMode() {
        return this.getStringAttribute('s3_backup_mode');
    }
    set s3BackupMode(value) {
        this._s3BackupMode = value;
    }
    resetS3BackupMode() {
        this._s3BackupMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3BackupModeInput() {
        return this._s3BackupMode;
    }
    // cloudwatch_logging_options - computed: false, optional: true, required: false
    _cloudwatchLoggingOptions = new KinesisFirehoseDeliveryStreamSplunkConfigurationCloudwatchLoggingOptionsOutputReference(this, "cloudwatch_logging_options", true);
    get cloudwatchLoggingOptions() {
        return this._cloudwatchLoggingOptions;
    }
    putCloudwatchLoggingOptions(value) {
        this._cloudwatchLoggingOptions.internalValue = value;
    }
    resetCloudwatchLoggingOptions() {
        this._cloudwatchLoggingOptions.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchLoggingOptionsInput() {
        return this._cloudwatchLoggingOptions.internalValue;
    }
    // processing_configuration - computed: false, optional: true, required: false
    _processingConfiguration = new KinesisFirehoseDeliveryStreamSplunkConfigurationProcessingConfigurationOutputReference(this, "processing_configuration", true);
    get processingConfiguration() {
        return this._processingConfiguration;
    }
    putProcessingConfiguration(value) {
        this._processingConfiguration.internalValue = value;
    }
    resetProcessingConfiguration() {
        this._processingConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get processingConfigurationInput() {
        return this._processingConfiguration.internalValue;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream}
*/
export class KinesisFirehoseDeliveryStream extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_kinesis_firehose_delivery_stream";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisFirehoseDeliveryStreamConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_kinesis_firehose_delivery_stream',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._destination = config.destination;
        this._destinationId = config.destinationId;
        this._name = config.name;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._versionId = config.versionId;
        this._elasticsearchConfiguration.internalValue = config.elasticsearchConfiguration;
        this._extendedS3Configuration.internalValue = config.extendedS3Configuration;
        this._httpEndpointConfiguration.internalValue = config.httpEndpointConfiguration;
        this._kinesisSourceConfiguration.internalValue = config.kinesisSourceConfiguration;
        this._redshiftConfiguration.internalValue = config.redshiftConfiguration;
        this._s3Configuration.internalValue = config.s3Configuration;
        this._serverSideEncryption.internalValue = config.serverSideEncryption;
        this._splunkConfiguration.internalValue = config.splunkConfiguration;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: true, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // destination - computed: false, optional: false, required: true
    _destination;
    get destination() {
        return this.getStringAttribute('destination');
    }
    set destination(value) {
        this._destination = value;
    }
    // Temporarily expose input value. Use with caution.
    get destinationInput() {
        return this._destination;
    }
    // destination_id - computed: true, optional: true, required: false
    _destinationId;
    get destinationId() {
        return this.getStringAttribute('destination_id');
    }
    set destinationId(value) {
        this._destinationId = value;
    }
    resetDestinationId() {
        this._destinationId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get destinationIdInput() {
        return this._destinationId;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
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
    // version_id - computed: true, optional: true, required: false
    _versionId;
    get versionId() {
        return this.getStringAttribute('version_id');
    }
    set versionId(value) {
        this._versionId = value;
    }
    resetVersionId() {
        this._versionId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get versionIdInput() {
        return this._versionId;
    }
    // elasticsearch_configuration - computed: false, optional: true, required: false
    _elasticsearchConfiguration = new KinesisFirehoseDeliveryStreamElasticsearchConfigurationOutputReference(this, "elasticsearch_configuration", true);
    get elasticsearchConfiguration() {
        return this._elasticsearchConfiguration;
    }
    putElasticsearchConfiguration(value) {
        this._elasticsearchConfiguration.internalValue = value;
    }
    resetElasticsearchConfiguration() {
        this._elasticsearchConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get elasticsearchConfigurationInput() {
        return this._elasticsearchConfiguration.internalValue;
    }
    // extended_s3_configuration - computed: false, optional: true, required: false
    _extendedS3Configuration = new KinesisFirehoseDeliveryStreamExtendedS3ConfigurationOutputReference(this, "extended_s3_configuration", true);
    get extendedS3Configuration() {
        return this._extendedS3Configuration;
    }
    putExtendedS3Configuration(value) {
        this._extendedS3Configuration.internalValue = value;
    }
    resetExtendedS3Configuration() {
        this._extendedS3Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get extendedS3ConfigurationInput() {
        return this._extendedS3Configuration.internalValue;
    }
    // http_endpoint_configuration - computed: false, optional: true, required: false
    _httpEndpointConfiguration = new KinesisFirehoseDeliveryStreamHttpEndpointConfigurationOutputReference(this, "http_endpoint_configuration", true);
    get httpEndpointConfiguration() {
        return this._httpEndpointConfiguration;
    }
    putHttpEndpointConfiguration(value) {
        this._httpEndpointConfiguration.internalValue = value;
    }
    resetHttpEndpointConfiguration() {
        this._httpEndpointConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get httpEndpointConfigurationInput() {
        return this._httpEndpointConfiguration.internalValue;
    }
    // kinesis_source_configuration - computed: false, optional: true, required: false
    _kinesisSourceConfiguration = new KinesisFirehoseDeliveryStreamKinesisSourceConfigurationOutputReference(this, "kinesis_source_configuration", true);
    get kinesisSourceConfiguration() {
        return this._kinesisSourceConfiguration;
    }
    putKinesisSourceConfiguration(value) {
        this._kinesisSourceConfiguration.internalValue = value;
    }
    resetKinesisSourceConfiguration() {
        this._kinesisSourceConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get kinesisSourceConfigurationInput() {
        return this._kinesisSourceConfiguration.internalValue;
    }
    // redshift_configuration - computed: false, optional: true, required: false
    _redshiftConfiguration = new KinesisFirehoseDeliveryStreamRedshiftConfigurationOutputReference(this, "redshift_configuration", true);
    get redshiftConfiguration() {
        return this._redshiftConfiguration;
    }
    putRedshiftConfiguration(value) {
        this._redshiftConfiguration.internalValue = value;
    }
    resetRedshiftConfiguration() {
        this._redshiftConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get redshiftConfigurationInput() {
        return this._redshiftConfiguration.internalValue;
    }
    // s3_configuration - computed: false, optional: true, required: false
    _s3Configuration = new KinesisFirehoseDeliveryStreamS3ConfigurationOutputReference(this, "s3_configuration", true);
    get s3Configuration() {
        return this._s3Configuration;
    }
    putS3Configuration(value) {
        this._s3Configuration.internalValue = value;
    }
    resetS3Configuration() {
        this._s3Configuration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get s3ConfigurationInput() {
        return this._s3Configuration.internalValue;
    }
    // server_side_encryption - computed: false, optional: true, required: false
    _serverSideEncryption = new KinesisFirehoseDeliveryStreamServerSideEncryptionOutputReference(this, "server_side_encryption", true);
    get serverSideEncryption() {
        return this._serverSideEncryption;
    }
    putServerSideEncryption(value) {
        this._serverSideEncryption.internalValue = value;
    }
    resetServerSideEncryption() {
        this._serverSideEncryption.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get serverSideEncryptionInput() {
        return this._serverSideEncryption.internalValue;
    }
    // splunk_configuration - computed: false, optional: true, required: false
    _splunkConfiguration = new KinesisFirehoseDeliveryStreamSplunkConfigurationOutputReference(this, "splunk_configuration", true);
    get splunkConfiguration() {
        return this._splunkConfiguration;
    }
    putSplunkConfiguration(value) {
        this._splunkConfiguration.internalValue = value;
    }
    resetSplunkConfiguration() {
        this._splunkConfiguration.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get splunkConfigurationInput() {
        return this._splunkConfiguration.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            destination: cdktf.stringToTerraform(this._destination),
            destination_id: cdktf.stringToTerraform(this._destinationId),
            name: cdktf.stringToTerraform(this._name),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            version_id: cdktf.stringToTerraform(this._versionId),
            elasticsearch_configuration: kinesisFirehoseDeliveryStreamElasticsearchConfigurationToTerraform(this._elasticsearchConfiguration.internalValue),
            extended_s3_configuration: kinesisFirehoseDeliveryStreamExtendedS3ConfigurationToTerraform(this._extendedS3Configuration.internalValue),
            http_endpoint_configuration: kinesisFirehoseDeliveryStreamHttpEndpointConfigurationToTerraform(this._httpEndpointConfiguration.internalValue),
            kinesis_source_configuration: kinesisFirehoseDeliveryStreamKinesisSourceConfigurationToTerraform(this._kinesisSourceConfiguration.internalValue),
            redshift_configuration: kinesisFirehoseDeliveryStreamRedshiftConfigurationToTerraform(this._redshiftConfiguration.internalValue),
            s3_configuration: kinesisFirehoseDeliveryStreamS3ConfigurationToTerraform(this._s3Configuration.internalValue),
            server_side_encryption: kinesisFirehoseDeliveryStreamServerSideEncryptionToTerraform(this._serverSideEncryption.internalValue),
            splunk_configuration: kinesisFirehoseDeliveryStreamSplunkConfigurationToTerraform(this._splunkConfiguration.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2luZXNpcy1maXJlaG9zZS1kZWxpdmVyeS1zdHJlYW0uanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImtpbmVzaXMtZmlyZWhvc2UtZGVsaXZlcnktc3RyZWFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQThGL0IsTUFBTSxVQUFVLDBGQUEwRixDQUFDLE1BQXlMO0lBQ2xTLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsT0FBTyxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxNQUFPLENBQUMsT0FBTyxDQUFDO1FBQ2xELGNBQWMsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLFlBQVksQ0FBQztRQUM3RCxlQUFlLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxhQUFhLENBQUM7S0FDaEUsQ0FBQTtBQUNILENBQUM7QUFFRCxNQUFNLE9BQU8sOEZBQStGLFNBQVEsS0FBSyxDQUFDLGFBQWE7SUFDN0gsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUU5Qjs7OztNQUlFO0lBQ0YsWUFBbUIsaUJBQTJDLEVBQUUsa0JBQTBCLEVBQUUsWUFBcUI7UUFDL0csS0FBSyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxJQUFXLGFBQWE7UUFDdEIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxNQUFNLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztRQUNwQyxJQUFJLElB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