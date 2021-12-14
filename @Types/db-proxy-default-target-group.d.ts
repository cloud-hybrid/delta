import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DbProxyDefaultTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#db_proxy_name DbProxyDefaultTargetGroup#db_proxy_name}
    */
    readonly dbProxyName: string;
    /**
    * connection_pool_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#connection_pool_config DbProxyDefaultTargetGroup#connection_pool_config}
    */
    readonly connectionPoolConfig?: DbProxyDefaultTargetGroupConnectionPoolConfig;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#timeouts DbProxyDefaultTargetGroup#timeouts}
    */
    readonly timeouts?: DbProxyDefaultTargetGroupTimeouts;
}
export interface DbProxyDefaultTargetGroupConnectionPoolConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#connection_borrow_timeout DbProxyDefaultTargetGroup#connection_borrow_timeout}
    */
    readonly connectionBorrowTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#init_query DbProxyDefaultTargetGroup#init_query}
    */
    readonly initQuery?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#max_connections_percent DbProxyDefaultTargetGroup#max_connections_percent}
    */
    readonly maxConnectionsPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#max_idle_connections_percent DbProxyDefaultTargetGroup#max_idle_connections_percent}
    */
    readonly maxIdleConnectionsPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#session_pinning_filters DbProxyDefaultTargetGroup#session_pinning_filters}
    */
    readonly sessionPinningFilters?: string[];
}
export declare function dbProxyDefaultTargetGroupConnectionPoolConfigToTerraform(struct?: DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference | DbProxyDefaultTargetGroupConnectionPoolConfig): any;
export declare class DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DbProxyDefaultTargetGroupConnectionPoolConfig | undefined;
    set internalValue(value: DbProxyDefaultTargetGroupConnectionPoolConfig | undefined);
    private _connectionBorrowTimeout?;
    get connectionBorrowTimeout(): number;
    set connectionBorrowTimeout(value: number);
    resetConnectionBorrowTimeout(): void;
    get connectionBorrowTimeoutInput(): number;
    private _initQuery?;
    get initQuery(): string;
    set initQuery(value: string);
    resetInitQuery(): void;
    get initQueryInput(): string;
    private _maxConnectionsPercent?;
    get maxConnectionsPercent(): number;
    set maxConnectionsPercent(value: number);
    resetMaxConnectionsPercent(): void;
    get maxConnectionsPercentInput(): number;
    private _maxIdleConnectionsPercent?;
    get maxIdleConnectionsPercent(): number;
    set maxIdleConnectionsPercent(value: number);
    resetMaxIdleConnectionsPercent(): void;
    get maxIdleConnectionsPercentInput(): number;
    private _sessionPinningFilters?;
    get sessionPinningFilters(): string[];
    set sessionPinningFilters(value: string[]);
    resetSessionPinningFilters(): void;
    get sessionPinningFiltersInput(): string[];
}
export interface DbProxyDefaultTargetGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#create DbProxyDefaultTargetGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html#update DbProxyDefaultTargetGroup#update}
    */
    readonly update?: string;
}
export declare function dbProxyDefaultTargetGroupTimeoutsToTerraform(struct?: DbProxyDefaultTargetGroupTimeoutsOutputReference | DbProxyDefaultTargetGroupTimeouts): any;
export declare class DbProxyDefaultTargetGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DbProxyDefaultTargetGroupTimeouts | undefined;
    set internalValue(value: DbProxyDefaultTargetGroupTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html aws_db_proxy_default_target_group}
*/
export declare class DbProxyDefaultTargetGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/db_proxy_default_target_group.html aws_db_proxy_default_target_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DbProxyDefaultTargetGroupConfig
    */
    constructor(scope: Construct, id: string, config: DbProxyDefaultTargetGroupConfig);
    get arn(): string;
    private _dbProxyName?;
    get dbProxyName(): string;
    set dbProxyName(value: string);
    get dbProxyNameInput(): string;
    get id(): string;
    get name(): string;
    private _connectionPoolConfig;
    get connectionPoolConfig(): DbProxyDefaultTargetGroupConnectionPoolConfigOutputReference;
    putConnectionPoolConfig(value: DbProxyDefaultTargetGroupConnectionPoolConfig): void;
    resetConnectionPoolConfig(): void;
    get connectionPoolConfigInput(): DbProxyDefaultTargetGroupConnectionPoolConfig;
    private _timeouts;
    get timeouts(): DbProxyDefaultTargetGroupTimeoutsOutputReference;
    putTimeouts(value: DbProxyDefaultTargetGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DbProxyDefaultTargetGroupTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=db-proxy-default-target-group.d.ts.map