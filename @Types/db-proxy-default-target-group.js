// generated from terraform resource schema
import * as cdktf from 'cdktf';
export function dbProxyDefaultTargetGroupConnectionPoolConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        connection_borrow_timeout: cdktf.numberToTerraform(struct.connectionBorrowTimeout),
        init_query: cdktf.stringToTerraform(struct.initQuery),
        max_connections_percent: cdktf.numberToTerraform(struct.maxConnectionsPercent),
        max_idle_connections_percent: cdktf.numberToTerraform(struct.maxIdleConnectionsPercent),
        session_pinning_filters: cdktf.listMapper(cdktf.stringToTerraform)(struct.sessionPinningFilters),
    };
}
export class DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference extends cdktf.ComplexObject {
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
        if (this._connectionBorrowTimeout) {
            hasAnyValues = true;
            internalValueResult.connectionBorrowTimeout = this._connectionBorrowTimeout;
        }
        if (this._initQuery) {
            hasAnyValues = true;
            internalValueResult.initQuery = this._initQuery;
        }
        if (this._maxConnectionsPercent) {
            hasAnyValues = true;
            internalValueResult.maxConnectionsPercent = this._maxConnectionsPercent;
        }
        if (this._maxIdleConnectionsPercent) {
            hasAnyValues = true;
            internalValueResult.maxIdleConnectionsPercent = this._maxIdleConnectionsPercent;
        }
        if (this._sessionPinningFilters) {
            hasAnyValues = true;
            internalValueResult.sessionPinningFilters = this._sessionPinningFilters;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._connectionBorrowTimeout = undefined;
            this._initQuery = undefined;
            this._maxConnectionsPercent = undefined;
            this._maxIdleConnectionsPercent = undefined;
            this._sessionPinningFilters = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._connectionBorrowTimeout = value.connectionBorrowTimeout;
            this._initQuery = value.initQuery;
            this._maxConnectionsPercent = value.maxConnectionsPercent;
            this._maxIdleConnectionsPercent = value.maxIdleConnectionsPercent;
            this._sessionPinningFilters = value.sessionPinningFilters;
        }
    }
    // connection_borrow_timeout - computed: false, optional: true, required: false
    _connectionBorrowTimeout;
    get connectionBorrowTimeout() {
        return this.getNumberAttribute('connection_borrow_timeout');
    }
    set connectionBorrowTimeout(value) {
        this._connectionBorrowTimeout = value;
    }
    resetConnectionBorrowTimeout() {
        this._connectionBorrowTimeout = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get connectionBorrowTimeoutInput() {
        return this._connectionBorrowTimeout;
    }
    // init_query - computed: false, optional: true, required: false
    _initQuery;
    get initQuery() {
        return this.getStringAttribute('init_query');
    }
    set initQuery(value) {
        this._initQuery = value;
    }
    resetInitQuery() {
        this._initQuery = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get initQueryInput() {
        return this._initQuery;
    }
    // max_connections_percent - computed: false, optional: true, required: false
    _maxConnectionsPercent;
    get maxConnectionsPercent() {
        return this.getNumberAttribute('max_connections_percent');
    }
    set maxConnectionsPercent(value) {
        this._maxConnectionsPercent = value;
    }
    resetMaxConnectionsPercent() {
        this._maxConnectionsPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxConnectionsPercentInput() {
        return this._maxConnectionsPercent;
    }
    // max_idle_connections_percent - computed: false, optional: true, required: false
    _maxIdleConnectionsPercent;
    get maxIdleConnectionsPercent() {
        return this.getNumberAttribute('max_idle_connections_percent');
    }
    set maxIdleConnectionsPercent(value) {
        this._maxIdleConnectionsPercent = value;
    }
    resetMaxIdleConnectionsPercent() {
        this._maxIdleConnectionsPercent = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxIdleConnectionsPercentInput() {
        return this._maxIdleConnectionsPercent;
    }
    // session_pinning_filters - computed: false, optional: true, required: false
    _sessionPinningFilters;
    get sessionPinningFilters() {
        return this.getListAttribute('session_pinning_filters');
    }
    set sessionPinningFilters(value) {
        this._sessionPinningFilters = value;
    }
    resetSessionPinningFilters() {
        this._sessionPinningFilters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get sessionPinningFiltersInput() {
        return this._sessionPinningFilters;
    }
}
export function dbProxyDefaultTargetGroupTimeoutsToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        create: cdktf.stringToTerraform(struct.create),
        update: cdktf.stringToTerraform(struct.update),
    };
}
export class DbProxyDefaultTargetGroupTimeoutsOutputReference extends cdktf.ComplexObject {
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
            this._update = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._create = value.create;
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html aws_db_proxy_default_target_group}
*/
export class DbProxyDefaultTargetGroup extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_db_proxy_default_target_group";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html aws_db_proxy_default_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbProxyDefaultTargetGroupConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_db_proxy_default_target_group',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._dbProxyName = config.dbProxyName;
        this._connectionPoolConfig.internalValue = config.connectionPoolConfig;
        this._timeouts.internalValue = config.timeouts;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // db_proxy_name - computed: false, optional: false, required: true
    _dbProxyName;
    get dbProxyName() {
        return this.getStringAttribute('db_proxy_name');
    }
    set dbProxyName(value) {
        this._dbProxyName = value;
    }
    // Temporarily expose input value. Use with caution.
    get dbProxyNameInput() {
        return this._dbProxyName;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: true, optional: false, required: false
    get name() {
        return this.getStringAttribute('name');
    }
    // connection_pool_config - computed: false, optional: true, required: false
    _connectionPoolConfig = new DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference(this, "connection_pool_config", true);
    get connectionPoolConfig() {
        return this._connectionPoolConfig;
    }
    putConnectionPoolConfig(value) {
        this._connectionPoolConfig.internalValue = value;
    }
    resetConnectionPoolConfig() {
        this._connectionPoolConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get connectionPoolConfigInput() {
        return this._connectionPoolConfig.internalValue;
    }
    // timeouts - computed: false, optional: true, required: false
    _timeouts = new DbProxyDefaultTargetGroupTimeoutsOutputReference(this, "timeouts", true);
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
            db_proxy_name: cdktf.stringToTerraform(this._dbProxyName),
            connection_pool_config: dbProxyDefaultTargetGroupConnectionPoolConfigToTerraform(this._connectionPoolConfig.internalValue),
            timeouts: dbProxyDefaultTargetGroupTimeoutsToTerraform(this._timeouts.internalValue),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGItcHJveHktZGVmYXVsdC10YXJnZXQtZ3JvdXAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImRiLXByb3h5LWRlZmF1bHQtdGFyZ2V0LWdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQThDL0IsTUFBTSxVQUFVLHdEQUF3RCxDQUFDLE1BQXFIO0lBQzVMLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQUUsT0FBTyxNQUFNLENBQUM7S0FBRTtJQUNqRCxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLG9IQUFvSCxDQUFDLENBQUM7S0FDdkk7SUFDRCxPQUFPO1FBQ0wseUJBQXlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyx1QkFBdUIsQ0FBQztRQUNuRixVQUFVLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxTQUFTLENBQUM7UUFDdEQsdUJBQXVCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE1BQU8sQ0FBQyxxQkFBcUIsQ0FBQztRQUMvRSw0QkFBNEIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsTUFBTyxDQUFDLHlCQUF5QixDQUFDO1FBQ3hGLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTyxDQUFDLHFCQUFxQixDQUFDO0tBQ2xHLENBQUE7QUFDSCxDQUFDO0FBRUQsTUFBTSxPQUFPLDREQUE2RCxTQUFRLEtBQUssQ0FBQyxhQUFhO0lBQzNGLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFFOUI7Ozs7TUFJRTtJQUNGLFlBQW1CLGlCQUEyQyxFQUFFLGtCQUEwQixFQUFFLFlBQXFCO1FBQy9HLEtBQUssQ0FBQyxp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