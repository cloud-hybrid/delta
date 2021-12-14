import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Discovery
*/
export interface ServiceDiscoveryServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#description ServiceDiscoveryService#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#force_destroy ServiceDiscoveryService#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#name ServiceDiscoveryService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#namespace_id ServiceDiscoveryService#namespace_id}
    */
    readonly namespaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#tags ServiceDiscoveryService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#tags_all ServiceDiscoveryService#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * dns_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#dns_config ServiceDiscoveryService#dns_config}
    */
    readonly dnsConfig?: ServiceDiscoveryServiceDnsConfig;
    /**
    * health_check_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#health_check_config ServiceDiscoveryService#health_check_config}
    */
    readonly healthCheckConfig?: ServiceDiscoveryServiceHealthCheckConfig;
    /**
    * health_check_custom_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#health_check_custom_config ServiceDiscoveryService#health_check_custom_config}
    */
    readonly healthCheckCustomConfig?: ServiceDiscoveryServiceHealthCheckCustomConfig;
}
export interface ServiceDiscoveryServiceDnsConfigDnsRecords {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#ttl ServiceDiscoveryService#ttl}
    */
    readonly ttl: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#type ServiceDiscoveryService#type}
    */
    readonly type: string;
}
export declare function serviceDiscoveryServiceDnsConfigDnsRecordsToTerraform(struct?: ServiceDiscoveryServiceDnsConfigDnsRecords): any;
export interface ServiceDiscoveryServiceDnsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#namespace_id ServiceDiscoveryService#namespace_id}
    */
    readonly namespaceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#routing_policy ServiceDiscoveryService#routing_policy}
    */
    readonly routingPolicy?: string;
    /**
    * dns_records block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#dns_records ServiceDiscoveryService#dns_records}
    */
    readonly dnsRecords: ServiceDiscoveryServiceDnsConfigDnsRecords[];
}
export declare function serviceDiscoveryServiceDnsConfigToTerraform(struct?: ServiceDiscoveryServiceDnsConfigOutputReference | ServiceDiscoveryServiceDnsConfig): any;
export declare class ServiceDiscoveryServiceDnsConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ServiceDiscoveryServiceDnsConfig | undefined;
    set internalValue(value: ServiceDiscoveryServiceDnsConfig | undefined);
    private _namespaceId?;
    get namespaceId(): string;
    set namespaceId(value: string);
    get namespaceIdInput(): string;
    private _routingPolicy?;
    get routingPolicy(): string;
    set routingPolicy(value: string);
    resetRoutingPolicy(): void;
    get routingPolicyInput(): string;
    private _dnsRecords?;
    get dnsRecords(): ServiceDiscoveryServiceDnsConfigDnsRecords[];
    set dnsRecords(value: ServiceDiscoveryServiceDnsConfigDnsRecords[]);
    get dnsRecordsInput(): ServiceDiscoveryServiceDnsConfigDnsRecords[];
}
export interface ServiceDiscoveryServiceHealthCheckConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#failure_threshold ServiceDiscoveryService#failure_threshold}
    */
    readonly failureThreshold?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#resource_path ServiceDiscoveryService#resource_path}
    */
    readonly resourcePath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#type ServiceDiscoveryService#type}
    */
    readonly type?: string;
}
export declare function serviceDiscoveryServiceHealthCheckConfigToTerraform(struct?: ServiceDiscoveryServiceHealthCheckConfigOutputReference | ServiceDiscoveryServiceHealthCheckConfig): any;
export declare class ServiceDiscoveryServiceHealthCheckConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ServiceDiscoveryServiceHealthCheckConfig | undefined;
    set internalValue(value: ServiceDiscoveryServiceHealthCheckConfig | undefined);
    private _failureThreshold?;
    get failureThreshold(): number;
    set failureThreshold(value: number);
    resetFailureThreshold(): void;
    get failureThresholdInput(): number;
    private _resourcePath?;
    get resourcePath(): string;
    set resourcePath(value: string);
    resetResourcePath(): void;
    get resourcePathInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
export interface ServiceDiscoveryServiceHealthCheckCustomConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html#failure_threshold ServiceDiscoveryService#failure_threshold}
    */
    readonly failureThreshold?: number;
}
export declare function serviceDiscoveryServiceHealthCheckCustomConfigToTerraform(struct?: ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference | ServiceDiscoveryServiceHealthCheckCustomConfig): any;
export declare class ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ServiceDiscoveryServiceHealthCheckCustomConfig | undefined;
    set internalValue(value: ServiceDiscoveryServiceHealthCheckCustomConfig | undefined);
    private _failureThreshold?;
    get failureThreshold(): number;
    set failureThreshold(value: number);
    resetFailureThreshold(): void;
    get failureThresholdInput(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html aws_service_discovery_service}
*/
export declare class ServiceDiscoveryService extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/service_discovery_service.html aws_service_discovery_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServiceDiscoveryServiceConfig
    */
    constructor(scope: Construct, id: string, config: ServiceDiscoveryServiceConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _namespaceId?;
    get namespaceId(): string;
    set namespaceId(value: string);
    resetNamespaceId(): void;
    get namespaceIdInput(): string;
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
    private _dnsConfig;
    get dnsConfig(): ServiceDiscoveryServiceDnsConfigOutputReference;
    putDnsConfig(value: ServiceDiscoveryServiceDnsConfig): void;
    resetDnsConfig(): void;
    get dnsConfigInput(): ServiceDiscoveryServiceDnsConfig;
    private _healthCheckConfig;
    get healthCheckConfig(): ServiceDiscoveryServiceHealthCheckConfigOutputReference;
    putHealthCheckConfig(value: ServiceDiscoveryServiceHealthCheckConfig): void;
    resetHealthCheckConfig(): void;
    get healthCheckConfigInput(): ServiceDiscoveryServiceHealthCheckConfig;
    private _healthCheckCustomConfig;
    get healthCheckCustomConfig(): ServiceDiscoveryServiceHealthCheckCustomConfigOutputReference;
    putHealthCheckCustomConfig(value: ServiceDiscoveryServiceHealthCheckCustomConfig): void;
    resetHealthCheckCustomConfig(): void;
    get healthCheckCustomConfigInput(): ServiceDiscoveryServiceHealthCheckCustomConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=service-discovery-service.d.ts.map