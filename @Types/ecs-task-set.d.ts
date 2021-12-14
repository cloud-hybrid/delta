import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2 Container Service
*/
export interface EcsTaskSetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#cluster EcsTaskSet#cluster}
    */
    readonly cluster: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#external_id EcsTaskSet#external_id}
    */
    readonly externalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#force_delete EcsTaskSet#force_delete}
    */
    readonly forceDelete?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#launch_type EcsTaskSet#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#platform_version EcsTaskSet#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#service EcsTaskSet#service}
    */
    readonly service: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#tags EcsTaskSet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#tags_all EcsTaskSet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#task_definition EcsTaskSet#task_definition}
    */
    readonly taskDefinition: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#wait_until_stable EcsTaskSet#wait_until_stable}
    */
    readonly waitUntilStable?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#wait_until_stable_timeout EcsTaskSet#wait_until_stable_timeout}
    */
    readonly waitUntilStableTimeout?: string;
    /**
    * capacity_provider_strategy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#capacity_provider_strategy EcsTaskSet#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: EcsTaskSetCapacityProviderStrategy[];
    /**
    * load_balancer block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#load_balancer EcsTaskSet#load_balancer}
    */
    readonly loadBalancer?: EcsTaskSetLoadBalancer[];
    /**
    * network_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#network_configuration EcsTaskSet#network_configuration}
    */
    readonly networkConfiguration?: EcsTaskSetNetworkConfiguration;
    /**
    * scale block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#scale EcsTaskSet#scale}
    */
    readonly scale?: EcsTaskSetScale;
    /**
    * service_registries block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#service_registries EcsTaskSet#service_registries}
    */
    readonly serviceRegistries?: EcsTaskSetServiceRegistries;
}
export interface EcsTaskSetCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#base EcsTaskSet#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#capacity_provider EcsTaskSet#capacity_provider}
    */
    readonly capacityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#weight EcsTaskSet#weight}
    */
    readonly weight: number;
}
export declare function ecsTaskSetCapacityProviderStrategyToTerraform(struct?: EcsTaskSetCapacityProviderStrategy): any;
export interface EcsTaskSetLoadBalancer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#container_name EcsTaskSet#container_name}
    */
    readonly containerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#container_port EcsTaskSet#container_port}
    */
    readonly containerPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#load_balancer_name EcsTaskSet#load_balancer_name}
    */
    readonly loadBalancerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#target_group_arn EcsTaskSet#target_group_arn}
    */
    readonly targetGroupArn?: string;
}
export declare function ecsTaskSetLoadBalancerToTerraform(struct?: EcsTaskSetLoadBalancer): any;
export interface EcsTaskSetNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#assign_public_ip EcsTaskSet#assign_public_ip}
    */
    readonly assignPublicIp?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#security_groups EcsTaskSet#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#subnets EcsTaskSet#subnets}
    */
    readonly subnets: string[];
}
export declare function ecsTaskSetNetworkConfigurationToTerraform(struct?: EcsTaskSetNetworkConfigurationOutputReference | EcsTaskSetNetworkConfiguration): any;
export declare class EcsTaskSetNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsTaskSetNetworkConfiguration | undefined;
    set internalValue(value: EcsTaskSetNetworkConfiguration | undefined);
    private _assignPublicIp?;
    get assignPublicIp(): boolean | cdktf.IResolvable;
    set assignPublicIp(value: boolean | cdktf.IResolvable);
    resetAssignPublicIp(): void;
    get assignPublicIpInput(): boolean | cdktf.IResolvable;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[];
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
    get subnetsInput(): string[];
}
export interface EcsTaskSetScale {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#unit EcsTaskSet#unit}
    */
    readonly unit?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#value EcsTaskSet#value}
    */
    readonly value?: number;
}
export declare function ecsTaskSetScaleToTerraform(struct?: EcsTaskSetScaleOutputReference | EcsTaskSetScale): any;
export declare class EcsTaskSetScaleOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsTaskSetScale | undefined;
    set internalValue(value: EcsTaskSetScale | undefined);
    private _unit?;
    get unit(): string;
    set unit(value: string);
    resetUnit(): void;
    get unitInput(): string;
    private _value?;
    get value(): number;
    set value(value: number);
    resetValue(): void;
    get valueInput(): number;
}
export interface EcsTaskSetServiceRegistries {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#container_name EcsTaskSet#container_name}
    */
    readonly containerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#container_port EcsTaskSet#container_port}
    */
    readonly containerPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#port EcsTaskSet#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html#registry_arn EcsTaskSet#registry_arn}
    */
    readonly registryArn: string;
}
export declare function ecsTaskSetServiceRegistriesToTerraform(struct?: EcsTaskSetServiceRegistriesOutputReference | EcsTaskSetServiceRegistries): any;
export declare class EcsTaskSetServiceRegistriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsTaskSetServiceRegistries | undefined;
    set internalValue(value: EcsTaskSetServiceRegistries | undefined);
    private _containerName?;
    get containerName(): string;
    set containerName(value: string);
    resetContainerName(): void;
    get containerNameInput(): string;
    private _containerPort?;
    get containerPort(): number;
    set containerPort(value: number);
    resetContainerPort(): void;
    get containerPortInput(): number;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number;
    private _registryArn?;
    get registryArn(): string;
    set registryArn(value: string);
    get registryArnInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html aws_ecs_task_set}
*/
export declare class EcsTaskSet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_task_set.html aws_ecs_task_set} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsTaskSetConfig
    */
    constructor(scope: Construct, id: string, config: EcsTaskSetConfig);
    get arn(): string;
    private _cluster?;
    get cluster(): string;
    set cluster(value: string);
    get clusterInput(): string;
    private _externalId?;
    get externalId(): string;
    set externalId(value: string);
    resetExternalId(): void;
    get externalIdInput(): string;
    private _forceDelete?;
    get forceDelete(): boolean | cdktf.IResolvable;
    set forceDelete(value: boolean | cdktf.IResolvable);
    resetForceDelete(): void;
    get forceDeleteInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _launchType?;
    get launchType(): string;
    set launchType(value: string);
    resetLaunchType(): void;
    get launchTypeInput(): string;
    private _platformVersion?;
    get platformVersion(): string;
    set platformVersion(value: string);
    resetPlatformVersion(): void;
    get platformVersionInput(): string;
    private _service?;
    get service(): string;
    set service(value: string);
    get serviceInput(): string;
    get stabilityStatus(): string;
    get status(): string;
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
    private _taskDefinition?;
    get taskDefinition(): string;
    set taskDefinition(value: string);
    get taskDefinitionInput(): string;
    get taskSetId(): string;
    private _waitUntilStable?;
    get waitUntilStable(): boolean | cdktf.IResolvable;
    set waitUntilStable(value: boolean | cdktf.IResolvable);
    resetWaitUntilStable(): void;
    get waitUntilStableInput(): boolean | cdktf.IResolvable;
    private _waitUntilStableTimeout?;
    get waitUntilStableTimeout(): string;
    set waitUntilStableTimeout(value: string);
    resetWaitUntilStableTimeout(): void;
    get waitUntilStableTimeoutInput(): string;
    private _capacityProviderStrategy?;
    get capacityProviderStrategy(): EcsTaskSetCapacityProviderStrategy[];
    set capacityProviderStrategy(value: EcsTaskSetCapacityProviderStrategy[]);
    resetCapacityProviderStrategy(): void;
    get capacityProviderStrategyInput(): EcsTaskSetCapacityProviderStrategy[];
    private _loadBalancer?;
    get loadBalancer(): EcsTaskSetLoadBalancer[];
    set loadBalancer(value: EcsTaskSetLoadBalancer[]);
    resetLoadBalancer(): void;
    get loadBalancerInput(): EcsTaskSetLoadBalancer[];
    private _networkConfiguration;
    get networkConfiguration(): EcsTaskSetNetworkConfigurationOutputReference;
    putNetworkConfiguration(value: EcsTaskSetNetworkConfiguration): void;
    resetNetworkConfiguration(): void;
    get networkConfigurationInput(): EcsTaskSetNetworkConfiguration;
    private _scale;
    get scale(): EcsTaskSetScaleOutputReference;
    putScale(value: EcsTaskSetScale): void;
    resetScale(): void;
    get scaleInput(): EcsTaskSetScale;
    private _serviceRegistries;
    get serviceRegistries(): EcsTaskSetServiceRegistriesOutputReference;
    putServiceRegistries(value: EcsTaskSetServiceRegistries): void;
    resetServiceRegistries(): void;
    get serviceRegistriesInput(): EcsTaskSetServiceRegistries;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ecs-task-set.d.ts.map