import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Data Sources
*/
export interface ElbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#availability_zones Elb#availability_zones}
    */
    readonly availabilityZones?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#connection_draining Elb#connection_draining}
    */
    readonly connectionDraining?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#connection_draining_timeout Elb#connection_draining_timeout}
    */
    readonly connectionDrainingTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#cross_zone_load_balancing Elb#cross_zone_load_balancing}
    */
    readonly crossZoneLoadBalancing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#desync_mitigation_mode Elb#desync_mitigation_mode}
    */
    readonly desyncMitigationMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#idle_timeout Elb#idle_timeout}
    */
    readonly idleTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#instances Elb#instances}
    */
    readonly instances?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#internal Elb#internal}
    */
    readonly internal?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#name Elb#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#name_prefix Elb#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#security_groups Elb#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#source_security_group Elb#source_security_group}
    */
    readonly sourceSecurityGroup?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#subnets Elb#subnets}
    */
    readonly subnets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#tags Elb#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#tags_all Elb#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * access_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#access_logs Elb#access_logs}
    */
    readonly accessLogs?: ElbAccessLogs;
    /**
    * health_check block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#health_check Elb#health_check}
    */
    readonly healthCheck?: ElbHealthCheck;
    /**
    * listener block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#listener Elb#listener}
    */
    readonly listener: ElbListener[];
}
export interface ElbAccessLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#bucket Elb#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#bucket_prefix Elb#bucket_prefix}
    */
    readonly bucketPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#enabled Elb#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#interval Elb#interval}
    */
    readonly interval?: number;
}
export declare function elbAccessLogsToTerraform(struct?: ElbAccessLogsOutputReference | ElbAccessLogs): any;
export declare class ElbAccessLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElbAccessLogs | undefined;
    set internalValue(value: ElbAccessLogs | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _bucketPrefix?;
    get bucketPrefix(): string;
    set bucketPrefix(value: string);
    resetBucketPrefix(): void;
    get bucketPrefixInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _interval?;
    get interval(): number;
    set interval(value: number);
    resetInterval(): void;
    get intervalInput(): number;
}
export interface ElbHealthCheck {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#healthy_threshold Elb#healthy_threshold}
    */
    readonly healthyThreshold: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#interval Elb#interval}
    */
    readonly interval: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#target Elb#target}
    */
    readonly target: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#timeout Elb#timeout}
    */
    readonly timeout: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#unhealthy_threshold Elb#unhealthy_threshold}
    */
    readonly unhealthyThreshold: number;
}
export declare function elbHealthCheckToTerraform(struct?: ElbHealthCheckOutputReference | ElbHealthCheck): any;
export declare class ElbHealthCheckOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElbHealthCheck | undefined;
    set internalValue(value: ElbHealthCheck | undefined);
    private _healthyThreshold?;
    get healthyThreshold(): number;
    set healthyThreshold(value: number);
    get healthyThresholdInput(): number;
    private _interval?;
    get interval(): number;
    set interval(value: number);
    get intervalInput(): number;
    private _target?;
    get target(): string;
    set target(value: string);
    get targetInput(): string;
    private _timeout?;
    get timeout(): number;
    set timeout(value: number);
    get timeoutInput(): number;
    private _unhealthyThreshold?;
    get unhealthyThreshold(): number;
    set unhealthyThreshold(value: number);
    get unhealthyThresholdInput(): number;
}
export interface ElbListener {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#instance_port Elb#instance_port}
    */
    readonly instancePort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#instance_protocol Elb#instance_protocol}
    */
    readonly instanceProtocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#lb_port Elb#lb_port}
    */
    readonly lbPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#lb_protocol Elb#lb_protocol}
    */
    readonly lbProtocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elb.html#ssl_certificate_id Elb#ssl_certificate_id}
    */
    readonly sslCertificateId?: string;
}
export declare function elbListenerToTerraform(struct?: ElbListener): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elb.html aws_elb}
*/
export declare class Elb extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elb.html aws_elb} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElbConfig
    */
    constructor(scope: Construct, id: string, config: ElbConfig);
    get arn(): string;
    private _availabilityZones?;
    get availabilityZones(): string[];
    set availabilityZones(value: string[]);
    resetAvailabilityZones(): void;
    get availabilityZonesInput(): string[];
    private _connectionDraining?;
    get connectionDraining(): boolean | cdktf.IResolvable;
    set connectionDraining(value: boolean | cdktf.IResolvable);
    resetConnectionDraining(): void;
    get connectionDrainingInput(): boolean | cdktf.IResolvable;
    private _connectionDrainingTimeout?;
    get connectionDrainingTimeout(): number;
    set connectionDrainingTimeout(value: number);
    resetConnectionDrainingTimeout(): void;
    get connectionDrainingTimeoutInput(): number;
    private _crossZoneLoadBalancing?;
    get crossZoneLoadBalancing(): boolean | cdktf.IResolvable;
    set crossZoneLoadBalancing(value: boolean | cdktf.IResolvable);
    resetCrossZoneLoadBalancing(): void;
    get crossZoneLoadBalancingInput(): boolean | cdktf.IResolvable;
    private _desyncMitigationMode?;
    get desyncMitigationMode(): string;
    set desyncMitigationMode(value: string);
    resetDesyncMitigationMode(): void;
    get desyncMitigationModeInput(): string;
    get dnsName(): string;
    get id(): string;
    private _idleTimeout?;
    get idleTimeout(): number;
    set idleTimeout(value: number);
    resetIdleTimeout(): void;
    get idleTimeoutInput(): number;
    private _instances?;
    get instances(): string[];
    set instances(value: string[]);
    resetInstances(): void;
    get instancesInput(): string[];
    private _internal?;
    get internal(): boolean | cdktf.IResolvable;
    set internal(value: boolean | cdktf.IResolvable);
    resetInternal(): void;
    get internalInput(): boolean | cdktf.IResolvable;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[];
    private _sourceSecurityGroup?;
    get sourceSecurityGroup(): string;
    set sourceSecurityGroup(value: string);
    resetSourceSecurityGroup(): void;
    get sourceSecurityGroupInput(): string;
    get sourceSecurityGroupId(): string;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    resetSubnets(): void;
    get subnetsInput(): string[];
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get zoneId(): string;
    private _accessLogs;
    get accessLogs(): ElbAccessLogsOutputReference;
    putAccessLogs(value: ElbAccessLogs): void;
    resetAccessLogs(): void;
    get accessLogsInput(): ElbAccessLogs;
    private _healthCheck;
    get healthCheck(): ElbHealthCheckOutputReference;
    putHealthCheck(value: ElbHealthCheck): void;
    resetHealthCheck(): void;
    get healthCheckInput(): ElbHealthCheck;
    private _listener?;
    get listener(): ElbListener[];
    set listener(value: ElbListener[]);
    get listenerInput(): ElbListener[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=elb.d.ts.map