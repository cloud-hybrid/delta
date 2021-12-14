// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html aws_route53_health_check}
*/
export class Route53HealthCheck extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_route53_health_check";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_health_check.html aws_route53_health_check} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53HealthCheckConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_route53_health_check',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._childHealthThreshold = config.childHealthThreshold;
        this._childHealthchecks = config.childHealthchecks;
        this._cloudwatchAlarmName = config.cloudwatchAlarmName;
        this._cloudwatchAlarmRegion = config.cloudwatchAlarmRegion;
        this._disabled = config.disabled;
        this._enableSni = config.enableSni;
        this._failureThreshold = config.failureThreshold;
        this._fqdn = config.fqdn;
        this._insufficientDataHealthStatus = config.insufficientDataHealthStatus;
        this._invertHealthcheck = config.invertHealthcheck;
        this._ipAddress = config.ipAddress;
        this._measureLatency = config.measureLatency;
        this._port = config.port;
        this._referenceName = config.referenceName;
        this._regions = config.regions;
        this._requestInterval = config.requestInterval;
        this._resourcePath = config.resourcePath;
        this._routingControlArn = config.routingControlArn;
        this._searchString = config.searchString;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._type = config.type;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // child_health_threshold - computed: false, optional: true, required: false
    _childHealthThreshold;
    get childHealthThreshold() {
        return this.getNumberAttribute('child_health_threshold');
    }
    set childHealthThreshold(value) {
        this._childHealthThreshold = value;
    }
    resetChildHealthThreshold() {
        this._childHealthThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get childHealthThresholdInput() {
        return this._childHealthThreshold;
    }
    // child_healthchecks - computed: false, optional: true, required: false
    _childHealthchecks;
    get childHealthchecks() {
        return this.getListAttribute('child_healthchecks');
    }
    set childHealthchecks(value) {
        this._childHealthchecks = value;
    }
    resetChildHealthchecks() {
        this._childHealthchecks = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get childHealthchecksInput() {
        return this._childHealthchecks;
    }
    // cloudwatch_alarm_name - computed: false, optional: true, required: false
    _cloudwatchAlarmName;
    get cloudwatchAlarmName() {
        return this.getStringAttribute('cloudwatch_alarm_name');
    }
    set cloudwatchAlarmName(value) {
        this._cloudwatchAlarmName = value;
    }
    resetCloudwatchAlarmName() {
        this._cloudwatchAlarmName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchAlarmNameInput() {
        return this._cloudwatchAlarmName;
    }
    // cloudwatch_alarm_region - computed: false, optional: true, required: false
    _cloudwatchAlarmRegion;
    get cloudwatchAlarmRegion() {
        return this.getStringAttribute('cloudwatch_alarm_region');
    }
    set cloudwatchAlarmRegion(value) {
        this._cloudwatchAlarmRegion = value;
    }
    resetCloudwatchAlarmRegion() {
        this._cloudwatchAlarmRegion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get cloudwatchAlarmRegionInput() {
        return this._cloudwatchAlarmRegion;
    }
    // disabled - computed: false, optional: true, required: false
    _disabled;
    get disabled() {
        return this.getBooleanAttribute('disabled');
    }
    set disabled(value) {
        this._disabled = value;
    }
    resetDisabled() {
        this._disabled = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get disabledInput() {
        return this._disabled;
    }
    // enable_sni - computed: true, optional: true, required: false
    _enableSni;
    get enableSni() {
        return this.getBooleanAttribute('enable_sni');
    }
    set enableSni(value) {
        this._enableSni = value;
    }
    resetEnableSni() {
        this._enableSni = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableSniInput() {
        return this._enableSni;
    }
    // failure_threshold - computed: true, optional: true, required: false
    _failureThreshold;
    get failureThreshold() {
        return this.getNumberAttribute('failure_threshold');
    }
    set failureThreshold(value) {
        this._failureThreshold = value;
    }
    resetFailureThreshold() {
        this._failureThreshold = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get failureThresholdInput() {
        return this._failureThreshold;
    }
    // fqdn - computed: false, optional: true, required: false
    _fqdn;
    get fqdn() {
        return this.getStringAttribute('fqdn');
    }
    set fqdn(value) {
        this._fqdn = value;
    }
    resetFqdn() {
        this._fqdn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get fqdnInput() {
        return this._fqdn;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // insufficient_data_health_status - computed: false, optional: true, required: false
    _insufficientDataHealthStatus;
    get insufficientDataHealthStatus() {
        return this.getStringAttribute('insufficient_data_health_status');
    }
    set insufficientDataHealthStatus(value) {
        this._insufficientDataHealthStatus = value;
    }
    resetInsufficientDataHealthStatus() {
        this._insufficientDataHealthStatus = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get insufficientDataHealthStatusInput() {
        return this._insufficientDataHealthStatus;
    }
    // invert_healthcheck - computed: false, optional: true, required: false
    _invertHealthcheck;
    get invertHealthcheck() {
        return this.getBooleanAttribute('invert_healthcheck');
    }
    set invertHealthcheck(value) {
        this._invertHealthcheck = value;
    }
    resetInvertHealthcheck() {
        this._invertHealthcheck = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get invertHealthcheckInput() {
        return this._invertHealthcheck;
    }
    // ip_address - computed: false, optional: true, required: false
    _ipAddress;
    get ipAddress() {
        return this.getStringAttribute('ip_address');
    }
    set ipAddress(value) {
        this._ipAddress = value;
    }
    resetIpAddress() {
        this._ipAddress = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get ipAddressInput() {
        return this._ipAddress;
    }
    // measure_latency - computed: false, optional: true, required: false
    _measureLatency;
    get measureLatency() {
        return this.getBooleanAttribute('measure_latency');
    }
    set measureLatency(value) {
        this._measureLatency = value;
    }
    resetMeasureLatency() {
        this._measureLatency = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get measureLatencyInput() {
        return this._measureLatency;
    }
    // port - computed: false, optional: true, required: false
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
    // reference_name - computed: false, optional: true, required: false
    _referenceName;
    get referenceName() {
        return this.getStringAttribute('reference_name');
    }
    set referenceName(value) {
        this._referenceName = value;
    }
    resetReferenceName() {
        this._referenceName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get referenceNameInput() {
        return this._referenceName;
    }
    // regions - computed: false, optional: true, required: false
    _regions;
    get regions() {
        return this.getListAttribute('regions');
    }
    set regions(value) {
        this._regions = value;
    }
    resetRegions() {
        this._regions = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get regionsInput() {
        return this._regions;
    }
    // request_interval - computed: false, optional: true, required: false
    _requestInterval;
    get requestInterval() {
        return this.getNumberAttribute('request_interval');
    }
    set requestInterval(value) {
        this._requestInterval = value;
    }
    resetRequestInterval() {
        this._requestInterval = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requestIntervalInput() {
        return this._requestInterval;
    }
    // resource_path - computed: false, optional: true, required: false
    _resourcePath;
    get resourcePath() {
        return this.getStringAttribute('resource_path');
    }
    set resourcePath(value) {
        this._resourcePath = value;
    }
    resetResourcePath() {
        this._resourcePath = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get resourcePathInput() {
        return this._resourcePath;
    }
    // routing_control_arn - computed: false, optional: true, required: false
    _routingControlArn;
    get routingControlArn() {
        return this.getStringAttribute('routing_control_arn');
    }
    set routingControlArn(value) {
        this._routingControlArn = value;
    }
    resetRoutingControlArn() {
        this._routingControlArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get routingControlArnInput() {
        return this._routingControlArn;
    }
    // search_string - computed: false, optional: true, required: false
    _searchString;
    get searchString() {
        return this.getStringAttribute('search_string');
    }
    set searchString(value) {
        this._searchString = value;
    }
    resetSearchString() {
        this._searchString = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get searchStringInput() {
        return this._searchString;
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
    // type - computed: false, optional: false, required: true
    _type;
    get type() {
        return this.getStringAttribute('type');
    }
    set type(value) {
        this._type = value;
    }
    // Temporarily expose input value. Use with caution.
    get typeInput() {
        return this._type;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            child_health_threshold: cdktf.numberToTerraform(this._childHealthThreshold),
            child_healthchecks: cdktf.listMapper(cdktf.stringToTerraform)(this._childHealthchecks),
            cloudwatch_alarm_name: cdktf.stringToTerraform(this._cloudwatchAlarmName),
            cloudwatch_alarm_region: cdktf.stringToTerraform(this._cloudwatchAlarmRegion),
            disabled: cdktf.booleanToTerraform(this._disabled),
            enable_sni: cdktf.booleanToTerraform(this._enableSni),
            failure_threshold: cdktf.numberToTerraform(this._failureThreshold),
            fqdn: cdktf.stringToTerraform(this._fqdn),
            insufficient_data_health_status: cdktf.stringToTerraform(this._insufficientDataHealthStatus),
            invert_healthcheck: cdktf.booleanToTerraform(this._invertHealthcheck),
            ip_address: cdktf.stringToTerraform(this._ipAddress),
            measure_latency: cdktf.booleanToTerraform(this._measureLatency),
            port: cdktf.numberToTerraform(this._port),
            reference_name: cdktf.stringToTerraform(this._referenceName),
            regions: cdktf.listMapper(cdktf.stringToTerraform)(this._regions),
            request_interval: cdktf.numberToTerraform(this._requestInterval),
            resource_path: cdktf.stringToTerraform(this._resourcePath),
            routing_control_arn: cdktf.stringToTerraform(this._routingControlArn),
            search_string: cdktf.stringToTerraform(this._searchString),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            type: cdktf.stringToTerraform(this._type),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGU1My1oZWFsdGgtY2hlY2suanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbInJvdXRlNTMtaGVhbHRoLWNoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQWdHL0I7O0VBRUU7QUFDRixNQUFNLE9BQU8sa0JBQW1CLFNBQVEsS0FBSyxDQUFDLGlCQUFpQjtJQUU3RCxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLG9CQUFvQjtJQUNiLE1BQU0sQ0FBVSxjQUFjLEdBQVcsMEJBQTBCLENBQUM7SUFFM0UsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjO0lBRWQ7Ozs7OztNQU1FO0lBQ0YsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsTUFBZ0M7UUFDL0UsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUU7WUFDZixxQkFBcUIsRUFBRSwwQkFBMEI7WUFDakQsMEJBQTBCLEVBQUU7Z0JBQzFCLFlBQVksRUFBRSxLQUFLO2FBQ3BCO1lBQ0QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1lBQ3pCLFNBQVMsRUFBRSxNQUFNLENBQUMsU0FBUztZQUMzQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUs7WUFDbkIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1NBQzVCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxxQkFBcUIsR0FBRyxNQUFNLENBQUMsb0JBQW9CLENBQUM7UUFDekQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQztRQUNuRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUM7UUFDM0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxVQUFV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