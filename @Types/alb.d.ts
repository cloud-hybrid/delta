import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Load Balancer
*/
export interface AlbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#customer_owned_ipv4_pool Alb#customer_owned_ipv4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#desync_mitigation_mode Alb#desync_mitigation_mode}
    */
    readonly desyncMitigationMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#drop_invalid_header_fields Alb#drop_invalid_header_fields}
    */
    readonly dropInvalidHeaderFields?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#enable_cross_zone_load_balancing Alb#enable_cross_zone_load_balancing}
    */
    readonly enableCrossZoneLoadBalancing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#enable_deletion_protection Alb#enable_deletion_protection}
    */
    readonly enableDeletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#enable_http2 Alb#enable_http2}
    */
    readonly enableHttp2?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#enable_waf_fail_open Alb#enable_waf_fail_open}
    */
    readonly enableWafFailOpen?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#idle_timeout Alb#idle_timeout}
    */
    readonly idleTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#internal Alb#internal}
    */
    readonly internal?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#ip_address_type Alb#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#load_balancer_type Alb#load_balancer_type}
    */
    readonly loadBalancerType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#name Alb#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#name_prefix Alb#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#security_groups Alb#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#subnets Alb#subnets}
    */
    readonly subnets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#tags Alb#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#tags_all Alb#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * access_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#access_logs Alb#access_logs}
    */
    readonly accessLogs?: AlbAccessLogs;
    /**
    * subnet_mapping block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#subnet_mapping Alb#subnet_mapping}
    */
    readonly subnetMapping?: AlbSubnetMapping[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#timeouts Alb#timeouts}
    */
    readonly timeouts?: AlbTimeouts;
}
export interface AlbAccessLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#bucket Alb#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#enabled Alb#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#prefix Alb#prefix}
    */
    readonly prefix?: string;
}
export declare function albAccessLogsToTerraform(struct?: AlbAccessLogsOutputReference | AlbAccessLogs): any;
export declare class AlbAccessLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbAccessLogs | undefined;
    set internalValue(value: AlbAccessLogs | undefined);
    private _bucket?;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _prefix?;
    get prefix(): string;
    set prefix(value: string);
    resetPrefix(): void;
    get prefixInput(): string;
}
export interface AlbSubnetMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#allocation_id Alb#allocation_id}
    */
    readonly allocationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#ipv6_address Alb#ipv6_address}
    */
    readonly ipv6Address?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#private_ipv4_address Alb#private_ipv4_address}
    */
    readonly privateIpv4Address?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#subnet_id Alb#subnet_id}
    */
    readonly subnetId: string;
}
export declare function albSubnetMappingToTerraform(struct?: AlbSubnetMapping): any;
export interface AlbTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#create Alb#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#delete Alb#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/alb.html#update Alb#update}
    */
    readonly update?: string;
}
export declare function albTimeoutsToTerraform(struct?: AlbTimeoutsOutputReference | AlbTimeouts): any;
export declare class AlbTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AlbTimeouts | undefined;
    set internalValue(value: AlbTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/alb.html aws_alb}
*/
export declare class Alb extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/alb.html aws_alb} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AlbConfig = {}
    */
    constructor(scope: Construct, id: string, config?: AlbConfig);
    get arn(): string;
    get arnSuffix(): string;
    private _customerOwnedIpv4Pool?;
    get customerOwnedIpv4Pool(): string;
    set customerOwnedIpv4Pool(value: string);
    resetCustomerOwnedIpv4Pool(): void;
    get customerOwnedIpv4PoolInput(): string;
    private _desyncMitigationMode?;
    get desyncMitigationMode(): string;
    set desyncMitigationMode(value: string);
    resetDesyncMitigationMode(): void;
    get desyncMitigationModeInput(): string;
    get dnsName(): string;
    private _dropInvalidHeaderFields?;
    get dropInvalidHeaderFields(): boolean | cdktf.IResolvable;
    set dropInvalidHeaderFields(value: boolean | cdktf.IResolvable);
    resetDropInvalidHeaderFields(): void;
    get dropInvalidHeaderFieldsInput(): boolean | cdktf.IResolvable;
    private _enableCrossZoneLoadBalancing?;
    get enableCrossZoneLoadBalancing(): boolean | cdktf.IResolvable;
    set enableCrossZoneLoadBalancing(value: boolean | cdktf.IResolvable);
    resetEnableCrossZoneLoadBalancing(): void;
    get enableCrossZoneLoadBalancingInput(): boolean | cdktf.IResolvable;
    private _enableDeletionProtection?;
    get enableDeletionProtection(): boolean | cdktf.IResolvable;
    set enableDeletionProtection(value: boolean | cdktf.IResolvable);
    resetEnableDeletionProtection(): void;
    get enableDeletionProtectionInput(): boolean | cdktf.IResolvable;
    private _enableHttp2?;
    get enableHttp2(): boolean | cdktf.IResolvable;
    set enableHttp2(value: boolean | cdktf.IResolvable);
    resetEnableHttp2(): void;
    get enableHttp2Input(): boolean | cdktf.IResolvable;
    private _enableWafFailOpen?;
    get enableWafFailOpen(): boolean | cdktf.IResolvable;
    set enableWafFailOpen(value: boolean | cdktf.IResolvable);
    resetEnableWafFailOpen(): void;
    get enableWafFailOpenInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _idleTimeout?;
    get idleTimeout(): number;
    set idleTimeout(value: number);
    resetIdleTimeout(): void;
    get idleTimeoutInput(): number;
    private _internal?;
    get internal(): boolean | cdktf.IResolvable;
    set internal(value: boolean | cdktf.IResolvable);
    resetInternal(): void;
    get internalInput(): boolean | cdktf.IResolvable;
    private _ipAddressType?;
    get ipAddressType(): string;
    set ipAddressType(value: string);
    resetIpAddressType(): void;
    get ipAddressTypeInput(): string;
    private _loadBalancerType?;
    get loadBalancerType(): string;
    set loadBalancerType(value: string);
    resetLoadBalancerType(): void;
    get loadBalancerTypeInput(): string;
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
    get vpcId(): string;
    get zoneId(): string;
    private _accessLogs;
    get accessLogs(): AlbAccessLogsOutputReference;
    putAccessLogs(value: AlbAccessLogs): void;
    resetAccessLogs(): void;
    get accessLogsInput(): AlbAccessLogs;
    private _subnetMapping?;
    get subnetMapping(): AlbSubnetMapping[];
    set subnetMapping(value: AlbSubnetMapping[]);
    resetSubnetMapping(): void;
    get subnetMappingInput(): AlbSubnetMapping[];
    private _timeouts;
    get timeouts(): AlbTimeoutsOutputReference;
    putTimeouts(value: AlbTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): AlbTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=alb.d.ts.map