import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Load Balancer
*/
export interface LbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#customer_owned_ipv4_pool Lb#customer_owned_ipv4_pool}
    */
    readonly customerOwnedIpv4Pool?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#desync_mitigation_mode Lb#desync_mitigation_mode}
    */
    readonly desyncMitigationMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#drop_invalid_header_fields Lb#drop_invalid_header_fields}
    */
    readonly dropInvalidHeaderFields?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enable_cross_zone_load_balancing Lb#enable_cross_zone_load_balancing}
    */
    readonly enableCrossZoneLoadBalancing?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enable_deletion_protection Lb#enable_deletion_protection}
    */
    readonly enableDeletionProtection?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enable_http2 Lb#enable_http2}
    */
    readonly enableHttp2?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enable_waf_fail_open Lb#enable_waf_fail_open}
    */
    readonly enableWafFailOpen?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#idle_timeout Lb#idle_timeout}
    */
    readonly idleTimeout?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#internal Lb#internal}
    */
    readonly internal?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#ip_address_type Lb#ip_address_type}
    */
    readonly ipAddressType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#load_balancer_type Lb#load_balancer_type}
    */
    readonly loadBalancerType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#name Lb#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#name_prefix Lb#name_prefix}
    */
    readonly namePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#security_groups Lb#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#subnets Lb#subnets}
    */
    readonly subnets?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#tags Lb#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#tags_all Lb#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * access_logs block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#access_logs Lb#access_logs}
    */
    readonly accessLogs?: LbAccessLogs;
    /**
    * subnet_mapping block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#subnet_mapping Lb#subnet_mapping}
    */
    readonly subnetMapping?: LbSubnetMapping[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#timeouts Lb#timeouts}
    */
    readonly timeouts?: LbTimeouts;
}
export interface LbAccessLogs {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#bucket Lb#bucket}
    */
    readonly bucket: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#enabled Lb#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#prefix Lb#prefix}
    */
    readonly prefix?: string;
}
export declare function lbAccessLogsToTerraform(struct?: LbAccessLogsOutputReference | LbAccessLogs): any;
export declare class LbAccessLogsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbAccessLogs | undefined;
    set internalValue(value: LbAccessLogs | undefined);
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
export interface LbSubnetMapping {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#allocation_id Lb#allocation_id}
    */
    readonly allocationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#ipv6_address Lb#ipv6_address}
    */
    readonly ipv6Address?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#private_ipv4_address Lb#private_ipv4_address}
    */
    readonly privateIpv4Address?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#subnet_id Lb#subnet_id}
    */
    readonly subnetId: string;
}
export declare function lbSubnetMappingToTerraform(struct?: LbSubnetMapping): any;
export interface LbTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#create Lb#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#delete Lb#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb.html#update Lb#update}
    */
    readonly update?: string;
}
export declare function lbTimeoutsToTerraform(struct?: LbTimeoutsOutputReference | LbTimeouts): any;
export declare class LbTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LbTimeouts | undefined;
    set internalValue(value: LbTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb.html aws_lb}
*/
export declare class Lb extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb.html aws_lb} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LbConfig = {}
    */
    constructor(scope: Construct, id: string, config?: LbConfig);
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
    get accessLogs(): LbAccessLogsOutputReference;
    putAccessLogs(value: LbAccessLogs): void;
    resetAccessLogs(): void;
    get accessLogsInput(): LbAccessLogs;
    private _subnetMapping?;
    get subnetMapping(): LbSubnetMapping[];
    set subnetMapping(value: LbSubnetMapping[]);
    resetSubnetMapping(): void;
    get subnetMappingInput(): LbSubnetMapping[];
    private _timeouts;
    get timeouts(): LbTimeoutsOutputReference;
    putTimeouts(value: LbTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): LbTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lb.d.ts.map