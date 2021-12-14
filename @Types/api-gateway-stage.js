// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function apiGatewayStageAccessLogSettingsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        destination_arn: cdktf.stringToTerraform(struct.destinationArn),
        format: cdktf.stringToTerraform(struct.format),
    };
}
export class ApiGatewayStageAccessLogSettingsOutputReference extends cdktf.ComplexObject {
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
        if (this._destinationArn) {
            hasAnyValues = true;
            internalValueResult.destinationArn = this._destinationArn;
        }
        if (this._format) {
            hasAnyValues = true;
            internalValueResult.format = this._format;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._destinationArn = undefined;
            this._format = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._destinationArn = value.destinationArn;
            this._format = value.format;
        }
    }
    // destination_arn - computed: false, optional: false, required: true
    _destinationArn;
    get destinationArn() {
        return this.getStringAttribute('destination_arn');
    }
    set destinationArn(value) {
        this._destinationArn = value;
    }
    // Temporarily expose input value. Use with caution.
    get destinationArnInput() {
        return this._destinationArn;
    }
    // format - computed: false, optional: false, required: true
    _format;
    get format() {
        return this.getStringAttribute('format');
    }
    set format(value) {
        this._format = value;
    }
    // Temporarily expose input value. Use with caution.
    get formatInput() {
        return this._format;
    }
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html aws_api_gateway_stage}
*/
export class ApiGatewayStage extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_api_gateway_stage";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_stage.html aws_api_gateway_stage} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayStageConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_api_gateway_stage',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._cacheClusterEnabled = config.cacheClusterEnabled;
        this._cacheClusterSize = config.cacheClusterSize;
        this._clientCertificateId = config.clientCertificateId;
        this._deploymentId = config.deploymentId;
        this._description = config.description;
        this._documentationVersion = config.documentationVersion;
        this._restApiId = config.restApiId;
        this._stageName = config.stageName;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._variables = config.variables;
        this._xrayTracingEnabled = config.xrayTracingEnabled;
        this._accessLogSettings.internalValue = config.accessLogSettings;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // cache_cluster_enabled - computed: false, optional: true, required: false
    _cacheClusterEnabled;
    get cacheClusterEnabled() {
        return this.getBooleanAttribute('cache_cluster_enabled');
    }
    set cacheClusterEnabled(value) {
        this._cacheClusterEnabled = value;
    }
    resetCacheClusterEnabled() {
        this._cacheClusterEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheClusterEnabledInput() {
        return this._cacheClusterEnabled;
    }
    // cache_cluster_size - computed: false, optional: true, required: false
    _cacheClusterSize;
    get cacheClusterSize() {
        return this.getStringAttribute('cache_cluster_size');
    }
    set cacheClusterSize(value) {
        this._cacheClusterSize = value;
    }
    resetCacheClusterSize() {
        this._cacheClusterSize = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cacheClusterSizeInput() {
        return this._cacheClusterSize;
    }
    // client_certificate_id - computed: false, optional: true, required: false
    _clientCertificateId;
    get clientCertificateId() {
        return this.getStringAttribute('client_certificate_id');
    }
    set clientCertificateId(value) {
        this._clientCertificateId = value;
    }
    resetClientCertificateId() {
        this._clientCertificateId = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get clientCertificateIdInput() {
        return this._clientCertificateId;
    }
    // deployment_id - computed: false, optional: false, required: true
    _deploymentId;
    get deploymentId() {
        return this.getStringAttribute('deployment_id');
    }
    set deploymentId(value) {
        this._deploymentId = value;
    }
    // Temporarily expose input value. Use with caution.
    get deploymentIdInput() {
        return this._deploymentId;
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
    // documentation_version - computed: false, optional: true, required: false
    _documentationVersion;
    get documentationVersion() {
        return this.getStringAttribute('documentation_version');
    }
    set documentationVersion(value) {
        this._documentationVersion = value;
    }
    resetDocumentationVersion() {
        this._documentationVersion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get documentationVersionInput() {
        return this._documentationVersion;
    }
    // execution_arn - computed: true, optional: false, required: false
    get executionArn() {
        return this.getStringAttribute('execution_arn');
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // invoke_url - computed: true, optional: false, required: false
    get invokeUrl() {
        return this.getStringAttribute('invoke_url');
    }
    // rest_api_id - computed: false, optional: false, required: true
    _restApiId;
    get restApiId() {
        return this.getStringAttribute('rest_api_id');
    }
    set restApiId(value) {
        this._restApiId = value;
    }
    // Temporarily expose input value. Use with caution.
    get restApiIdInput() {
        return this._restApiId;
    }
    // stage_name - computed: false, optional: false, required: true
    _stageName;
    get stageName() {
        return this.getStringAttribute('stage_name');
    }
    set stageName(value) {
        this._stageName = value;
    }
    // Temporarily expose input value. Use with caution.
    get stageNameInput() {
        return this._stageName;
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
    // variables - computed: false, optional: true, required: false
    _variables;
    get variables() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('variables');
    }
    set variables(value) {
        this._variables = value;
    }
    resetVariables() {
        this._variables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get variablesInput() {
        return this._variables;
    }
    // xray_tracing_enabled - computed: false, optional: true, required: false
    _xrayTracingEnabled;
    get xrayTracingEnabled() {
        return this.getBooleanAttribute('xray_tracing_enabled');
    }
    set xrayTracingEnabled(value) {
        this._xrayTracingEnabled = value;
    }
    resetXrayTracingEnabled() {
        this._xrayTracingEnabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get xrayTracingEnabledInput() {
        return this._xrayTracingEnabled;
    }
    // access_log_settings - computed: false, optional: true, required: false
    _accessLogSettings = new ApiGatewayStageAccessLogSettingsOutputReference(this, "access_log_settings", true);
    get accessLogSettings() {
        return this._accessLogSettings;
    }
    putAccessLogSettings(value) {
        this._accessLogSettings.internalValue = value;
    }
    resetAccessLogSettings() {
        this._accessLogSettings.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessLogSettingsInput() {
        return this._accessLogSettings.internalValue;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            cache_cluster_enabled: cdktf.booleanToTerraform(this._cacheClusterEnabled),
            cache_cluster_size: cdktf.stringToTerraform(this._cacheClusterSize),
            client_certificate_id: cdktf.stringToTerraform(this._clientCertificateId),
            deployment_id: cdktf.stringToTerraform(this._deploymentId),
            description: cdktf.stringToTerraform(this._description),
            documentation_version: cdktf.stringToTerraform(this._documentationVersion),
            rest_api_id: cdktf.stringToTerraform(this._restApiId),
            stage_name: cdktf.stringToTerraform(this._stageName),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._variables),
            xray_tracing_enabled: cdktf.booleanToTerraform(this._xrayTracingEnabled),
            access_log_settings: apiGatewayStageAccessLogSettingsToTerraform(this._accessLogSettings.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLWdhdGV3YXktc3RhZ2UuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImFwaS1nYXRld2F5LXN0YWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQXdFL0IsTUFBTSxVQUFVLDJDQUEyQyxDQUFDLE1BQTJGO0lBQ3JKLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wsZUFBZSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsY0FBYyxDQUFDO1FBQ2hFLE1BQU0sRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLE1BQU0sQ0FBQztLQUNoRCxDQUFBO0FBQ0gsQ0FBQztBQUVELE1BQU0sT0FBTywrQ0FBZ0QsU0FBUSxLQUFLLENBQUMsYUFBYTtJQUM5RSxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBRTlCOzs7O01BSUU7SUFDRixZQUFtQixpQkFBMkMsRUFBRSxrQkFBMEIsRUFBRSxZQUFxQjtRQUMvRyxLQUFLLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVELElBQVcsYUFBYTtRQUN0QixJQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3RDLE1BQU0sbUJBQW1CLEdBQVEsRUFBRSxDQUFDO1FBQ3BDLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUN4QixZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLG1CQUFtQixDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxD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