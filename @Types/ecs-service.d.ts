import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2 Container Service
*/
export interface EcsServiceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#cluster EcsService#cluster}
    */
    readonly cluster?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_maximum_percent EcsService#deployment_maximum_percent}
    */
    readonly deploymentMaximumPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_minimum_healthy_percent EcsService#deployment_minimum_healthy_percent}
    */
    readonly deploymentMinimumHealthyPercent?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#desired_count EcsService#desired_count}
    */
    readonly desiredCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#enable_ecs_managed_tags EcsService#enable_ecs_managed_tags}
    */
    readonly enableEcsManagedTags?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#enable_execute_command EcsService#enable_execute_command}
    */
    readonly enableExecuteCommand?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#force_new_deployment EcsService#force_new_deployment}
    */
    readonly forceNewDeployment?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#health_check_grace_period_seconds EcsService#health_check_grace_period_seconds}
    */
    readonly healthCheckGracePeriodSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#iam_role EcsService#iam_role}
    */
    readonly iamRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#launch_type EcsService#launch_type}
    */
    readonly launchType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#name EcsService#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#platform_version EcsService#platform_version}
    */
    readonly platformVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#propagate_tags EcsService#propagate_tags}
    */
    readonly propagateTags?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#scheduling_strategy EcsService#scheduling_strategy}
    */
    readonly schedulingStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#tags EcsService#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#tags_all EcsService#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#task_definition EcsService#task_definition}
    */
    readonly taskDefinition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#wait_for_steady_state EcsService#wait_for_steady_state}
    */
    readonly waitForSteadyState?: boolean | cdktf.IResolvable;
    /**
    * capacity_provider_strategy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#capacity_provider_strategy EcsService#capacity_provider_strategy}
    */
    readonly capacityProviderStrategy?: EcsServiceCapacityProviderStrategy[];
    /**
    * deployment_circuit_breaker block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_circuit_breaker EcsService#deployment_circuit_breaker}
    */
    readonly deploymentCircuitBreaker?: EcsServiceDeploymentCircuitBreaker;
    /**
    * deployment_controller block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#deployment_controller EcsService#deployment_controller}
    */
    readonly deploymentController?: EcsServiceDeploymentController;
    /**
    * load_balancer block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#load_balancer EcsService#load_balancer}
    */
    readonly loadBalancer?: EcsServiceLoadBalancer[];
    /**
    * network_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#network_configuration EcsService#network_configuration}
    */
    readonly networkConfiguration?: EcsServiceNetworkConfiguration;
    /**
    * ordered_placement_strategy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#ordered_placement_strategy EcsService#ordered_placement_strategy}
    */
    readonly orderedPlacementStrategy?: EcsServiceOrderedPlacementStrategy[];
    /**
    * placement_constraints block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#placement_constraints EcsService#placement_constraints}
    */
    readonly placementConstraints?: EcsServicePlacementConstraints[];
    /**
    * service_registries block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#service_registries EcsService#service_registries}
    */
    readonly serviceRegistries?: EcsServiceServiceRegistries;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#timeouts EcsService#timeouts}
    */
    readonly timeouts?: EcsServiceTimeouts;
}
export interface EcsServiceCapacityProviderStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#base EcsService#base}
    */
    readonly base?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#capacity_provider EcsService#capacity_provider}
    */
    readonly capacityProvider: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#weight EcsService#weight}
    */
    readonly weight?: number;
}
export declare function ecsServiceCapacityProviderStrategyToTerraform(struct?: EcsServiceCapacityProviderStrategy): any;
export interface EcsServiceDeploymentCircuitBreaker {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#enable EcsService#enable}
    */
    readonly enable: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#rollback EcsService#rollback}
    */
    readonly rollback: boolean | cdktf.IResolvable;
}
export declare function ecsServiceDeploymentCircuitBreakerToTerraform(struct?: EcsServiceDeploymentCircuitBreakerOutputReference | EcsServiceDeploymentCircuitBreaker): any;
export declare class EcsServiceDeploymentCircuitBreakerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsServiceDeploymentCircuitBreaker | undefined;
    set internalValue(value: EcsServiceDeploymentCircuitBreaker | undefined);
    private _enable?;
    get enable(): boolean | cdktf.IResolvable;
    set enable(value: boolean | cdktf.IResolvable);
    get enableInput(): boolean | cdktf.IResolvable;
    private _rollback?;
    get rollback(): boolean | cdktf.IResolvable;
    set rollback(value: boolean | cdktf.IResolvable);
    get rollbackInput(): boolean | cdktf.IResolvable;
}
export interface EcsServiceDeploymentController {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#type EcsService#type}
    */
    readonly type?: string;
}
export declare function ecsServiceDeploymentControllerToTerraform(struct?: EcsServiceDeploymentControllerOutputReference | EcsServiceDeploymentController): any;
export declare class EcsServiceDeploymentControllerOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsServiceDeploymentController | undefined;
    set internalValue(value: EcsServiceDeploymentController | undefined);
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
}
export interface EcsServiceLoadBalancer {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_name EcsService#container_name}
    */
    readonly containerName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_port EcsService#container_port}
    */
    readonly containerPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#elb_name EcsService#elb_name}
    */
    readonly elbName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#target_group_arn EcsService#target_group_arn}
    */
    readonly targetGroupArn?: string;
}
export declare function ecsServiceLoadBalancerToTerraform(struct?: EcsServiceLoadBalancer): any;
export interface EcsServiceNetworkConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#assign_public_ip EcsService#assign_public_ip}
    */
    readonly assignPublicIp?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#security_groups EcsService#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#subnets EcsService#subnets}
    */
    readonly subnets: string[];
}
export declare function ecsServiceNetworkConfigurationToTerraform(struct?: EcsServiceNetworkConfigurationOutputReference | EcsServiceNetworkConfiguration): any;
export declare class EcsServiceNetworkConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsServiceNetworkConfiguration | undefined;
    set internalValue(value: EcsServiceNetworkConfiguration | undefined);
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
export interface EcsServiceOrderedPlacementStrategy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#field EcsService#field}
    */
    readonly field?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#type EcsService#type}
    */
    readonly type: string;
}
export declare function ecsServiceOrderedPlacementStrategyToTerraform(struct?: EcsServiceOrderedPlacementStrategy): any;
export interface EcsServicePlacementConstraints {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#expression EcsService#expression}
    */
    readonly expression?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#type EcsService#type}
    */
    readonly type: string;
}
export declare function ecsServicePlacementConstraintsToTerraform(struct?: EcsServicePlacementConstraints): any;
export interface EcsServiceServiceRegistries {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_name EcsService#container_name}
    */
    readonly containerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#container_port EcsService#container_port}
    */
    readonly containerPort?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#port EcsService#port}
    */
    readonly port?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#registry_arn EcsService#registry_arn}
    */
    readonly registryArn: string;
}
export declare function ecsServiceServiceRegistriesToTerraform(struct?: EcsServiceServiceRegistriesOutputReference | EcsServiceServiceRegistries): any;
export declare class EcsServiceServiceRegistriesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsServiceServiceRegistries | undefined;
    set internalValue(value: EcsServiceServiceRegistries | undefined);
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
export interface EcsServiceTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html#delete EcsService#delete}
    */
    readonly delete?: string;
}
export declare function ecsServiceTimeoutsToTerraform(struct?: EcsServiceTimeoutsOutputReference | EcsServiceTimeouts): any;
export declare class EcsServiceTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsServiceTimeouts | undefined;
    set internalValue(value: EcsServiceTimeouts | undefined);
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html aws_ecs_service}
*/
export declare class EcsService extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_service.html aws_ecs_service} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsServiceConfig
    */
    constructor(scope: Construct, id: string, config: EcsServiceConfig);
    private _cluster?;
    get cluster(): string;
    set cluster(value: string);
    resetCluster(): void;
    get clusterInput(): string;
    private _deploymentMaximumPercent?;
    get deploymentMaximumPercent(): number;
    set deploymentMaximumPercent(value: number);
    resetDeploymentMaximumPercent(): void;
    get deploymentMaximumPercentInput(): number;
    private _deploymentMinimumHealthyPercent?;
    get deploymentMinimumHealthyPercent(): number;
    set deploymentMinimumHealthyPercent(value: number);
    resetDeploymentMinimumHealthyPercent(): void;
    get deploymentMinimumHealthyPercentInput(): number;
    private _desiredCount?;
    get desiredCount(): number;
    set desiredCount(value: number);
    resetDesiredCount(): void;
    get desiredCountInput(): number;
    private _enableEcsManagedTags?;
    get enableEcsManagedTags(): boolean | cdktf.IResolvable;
    set enableEcsManagedTags(value: boolean | cdktf.IResolvable);
    resetEnableEcsManagedTags(): void;
    get enableEcsManagedTagsInput(): boolean | cdktf.IResolvable;
    private _enableExecuteCommand?;
    get enableExecuteCommand(): boolean | cdktf.IResolvable;
    set enableExecuteCommand(value: boolean | cdktf.IResolvable);
    resetEnableExecuteCommand(): void;
    get enableExecuteCommandInput(): boolean | cdktf.IResolvable;
    private _forceNewDeployment?;
    get forceNewDeployment(): boolean | cdktf.IResolvable;
    set forceNewDeployment(value: boolean | cdktf.IResolvable);
    resetForceNewDeployment(): void;
    get forceNewDeploymentInput(): boolean | cdktf.IResolvable;
    private _healthCheckGracePeriodSeconds?;
    get healthCheckGracePeriodSeconds(): number;
    set healthCheckGracePeriodSeconds(value: number);
    resetHealthCheckGracePeriodSeconds(): void;
    get healthCheckGracePeriodSecondsInput(): number;
    private _iamRole?;
    get iamRole(): string;
    set iamRole(value: string);
    resetIamRole(): void;
    get iamRoleInput(): string;
    get id(): string;
    private _launchType?;
    get launchType(): string;
    set launchType(value: string);
    resetLaunchType(): void;
    get launchTypeInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _platformVersion?;
    get platformVersion(): string;
    set platformVersion(value: string);
    resetPlatformVersion(): void;
    get platformVersionInput(): string;
    private _propagateTags?;
    get propagateTags(): string;
    set propagateTags(value: string);
    resetPropagateTags(): void;
    get propagateTagsInput(): string;
    private _schedulingStrategy?;
    get schedulingStrategy(): string;
    set schedulingStrategy(value: string);
    resetSchedulingStrategy(): void;
    get schedulingStrategyInput(): string;
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
    resetTaskDefinition(): void;
    get taskDefinitionInput(): string;
    private _waitForSteadyState?;
    get waitForSteadyState(): boolean | cdktf.IResolvable;
    set waitForSteadyState(value: boolean | cdktf.IResolvable);
    resetWaitForSteadyState(): void;
    get waitForSteadyStateInput(): boolean | cdktf.IResolvable;
    private _capacityProviderStrategy?;
    get capacityProviderStrategy(): EcsServiceCapacityProviderStrategy[];
    set capacityProviderStrategy(value: EcsServiceCapacityProviderStrategy[]);
    resetCapacityProviderStrategy(): void;
    get capacityProviderStrategyInput(): EcsServiceCapacityProviderStrategy[];
    private _deploymentCircuitBreaker;
    get deploymentCircuitBreaker(): EcsServiceDeploymentCircuitBreakerOutputReference;
    putDeploymentCircuitBreaker(value: EcsServiceDeploymentCircuitBreaker): void;
    resetDeploymentCircuitBreaker(): void;
    get deploymentCircuitBreakerInput(): EcsServiceDeploymentCircuitBreaker;
    private _deploymentController;
    get deploymentController(): EcsServiceDeploymentControllerOutputReference;
    putDeploymentController(value: EcsServiceDeploymentController): void;
    resetDeploymentController(): void;
    get deploymentControllerInput(): EcsServiceDeploymentController;
    private _loadBalancer?;
    get loadBalancer(): EcsServiceLoadBalancer[];
    set loadBalancer(value: EcsServiceLoadBalancer[]);
    resetLoadBalancer(): void;
    get loadBalancerInput(): EcsServiceLoadBalancer[];
    private _networkConfiguration;
    get networkConfiguration(): EcsServiceNetworkConfigurationOutputReference;
    putNetworkConfiguration(value: EcsServiceNetworkConfiguration): void;
    resetNetworkConfiguration(): void;
    get networkConfigurationInput(): EcsServiceNetworkConfiguration;
    private _orderedPlacementStrategy?;
    get orderedPlacementStrategy(): EcsServiceOrderedPlacementStrategy[];
    set orderedPlacementStrategy(value: EcsServiceOrderedPlacementStrategy[]);
    resetOrderedPlacementStrategy(): void;
    get orderedPlacementStrategyInput(): EcsServiceOrderedPlacementStrategy[];
    private _placementConstraints?;
    get placementConstraints(): EcsServicePlacementConstraints[];
    set placementConstraints(value: EcsServicePlacementConstraints[]);
    resetPlacementConstraints(): void;
    get placementConstraintsInput(): EcsServicePlacementConstraints[];
    private _serviceRegistries;
    get serviceRegistries(): EcsServiceServiceRegistriesOutputReference;
    putServiceRegistries(value: EcsServiceServiceRegistries): void;
    resetServiceRegistries(): void;
    get serviceRegistriesInput(): EcsServiceServiceRegistries;
    private _timeouts;
    get timeouts(): EcsServiceTimeoutsOutputReference;
    putTimeouts(value: EcsServiceTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): EcsServiceTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ecs-service.d.ts.map