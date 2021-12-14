import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS GameLift
*/
export interface GameliftFleetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#build_id GameliftFleet#build_id}
    */
    readonly buildId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#description GameliftFleet#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#ec2_instance_type GameliftFleet#ec2_instance_type}
    */
    readonly ec2InstanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#fleet_type GameliftFleet#fleet_type}
    */
    readonly fleetType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#instance_role_arn GameliftFleet#instance_role_arn}
    */
    readonly instanceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#metric_groups GameliftFleet#metric_groups}
    */
    readonly metricGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#name GameliftFleet#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#new_game_session_protection_policy GameliftFleet#new_game_session_protection_policy}
    */
    readonly newGameSessionProtectionPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#tags GameliftFleet#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#tags_all GameliftFleet#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * ec2_inbound_permission block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#ec2_inbound_permission GameliftFleet#ec2_inbound_permission}
    */
    readonly ec2InboundPermission?: GameliftFleetEc2InboundPermission[];
    /**
    * resource_creation_limit_policy block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#resource_creation_limit_policy GameliftFleet#resource_creation_limit_policy}
    */
    readonly resourceCreationLimitPolicy?: GameliftFleetResourceCreationLimitPolicy;
    /**
    * runtime_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#runtime_configuration GameliftFleet#runtime_configuration}
    */
    readonly runtimeConfiguration?: GameliftFleetRuntimeConfiguration;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#timeouts GameliftFleet#timeouts}
    */
    readonly timeouts?: GameliftFleetTimeouts;
}
export interface GameliftFleetEc2InboundPermission {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#from_port GameliftFleet#from_port}
    */
    readonly fromPort: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#ip_range GameliftFleet#ip_range}
    */
    readonly ipRange: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#protocol GameliftFleet#protocol}
    */
    readonly protocol: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#to_port GameliftFleet#to_port}
    */
    readonly toPort: number;
}
export declare function gameliftFleetEc2InboundPermissionToTerraform(struct?: GameliftFleetEc2InboundPermission): any;
export interface GameliftFleetResourceCreationLimitPolicy {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#new_game_sessions_per_creator GameliftFleet#new_game_sessions_per_creator}
    */
    readonly newGameSessionsPerCreator?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#policy_period_in_minutes GameliftFleet#policy_period_in_minutes}
    */
    readonly policyPeriodInMinutes?: number;
}
export declare function gameliftFleetResourceCreationLimitPolicyToTerraform(struct?: GameliftFleetResourceCreationLimitPolicyOutputReference | GameliftFleetResourceCreationLimitPolicy): any;
export declare class GameliftFleetResourceCreationLimitPolicyOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GameliftFleetResourceCreationLimitPolicy | undefined;
    set internalValue(value: GameliftFleetResourceCreationLimitPolicy | undefined);
    private _newGameSessionsPerCreator?;
    get newGameSessionsPerCreator(): number;
    set newGameSessionsPerCreator(value: number);
    resetNewGameSessionsPerCreator(): void;
    get newGameSessionsPerCreatorInput(): number;
    private _policyPeriodInMinutes?;
    get policyPeriodInMinutes(): number;
    set policyPeriodInMinutes(value: number);
    resetPolicyPeriodInMinutes(): void;
    get policyPeriodInMinutesInput(): number;
}
export interface GameliftFleetRuntimeConfigurationServerProcess {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#concurrent_executions GameliftFleet#concurrent_executions}
    */
    readonly concurrentExecutions: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#launch_path GameliftFleet#launch_path}
    */
    readonly launchPath: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#parameters GameliftFleet#parameters}
    */
    readonly parameters?: string;
}
export declare function gameliftFleetRuntimeConfigurationServerProcessToTerraform(struct?: GameliftFleetRuntimeConfigurationServerProcess): any;
export interface GameliftFleetRuntimeConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#game_session_activation_timeout_seconds GameliftFleet#game_session_activation_timeout_seconds}
    */
    readonly gameSessionActivationTimeoutSeconds?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#max_concurrent_game_session_activations GameliftFleet#max_concurrent_game_session_activations}
    */
    readonly maxConcurrentGameSessionActivations?: number;
    /**
    * server_process block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#server_process GameliftFleet#server_process}
    */
    readonly serverProcess?: GameliftFleetRuntimeConfigurationServerProcess[];
}
export declare function gameliftFleetRuntimeConfigurationToTerraform(struct?: GameliftFleetRuntimeConfigurationOutputReference | GameliftFleetRuntimeConfiguration): any;
export declare class GameliftFleetRuntimeConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GameliftFleetRuntimeConfiguration | undefined;
    set internalValue(value: GameliftFleetRuntimeConfiguration | undefined);
    private _gameSessionActivationTimeoutSeconds?;
    get gameSessionActivationTimeoutSeconds(): number;
    set gameSessionActivationTimeoutSeconds(value: number);
    resetGameSessionActivationTimeoutSeconds(): void;
    get gameSessionActivationTimeoutSecondsInput(): number;
    private _maxConcurrentGameSessionActivations?;
    get maxConcurrentGameSessionActivations(): number;
    set maxConcurrentGameSessionActivations(value: number);
    resetMaxConcurrentGameSessionActivations(): void;
    get maxConcurrentGameSessionActivationsInput(): number;
    private _serverProcess?;
    get serverProcess(): GameliftFleetRuntimeConfigurationServerProcess[];
    set serverProcess(value: GameliftFleetRuntimeConfigurationServerProcess[]);
    resetServerProcess(): void;
    get serverProcessInput(): GameliftFleetRuntimeConfigurationServerProcess[];
}
export interface GameliftFleetTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#create GameliftFleet#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html#delete GameliftFleet#delete}
    */
    readonly delete?: string;
}
export declare function gameliftFleetTimeoutsToTerraform(struct?: GameliftFleetTimeoutsOutputReference | GameliftFleetTimeouts): any;
export declare class GameliftFleetTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): GameliftFleetTimeouts | undefined;
    set internalValue(value: GameliftFleetTimeouts | undefined);
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
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html aws_gamelift_fleet}
*/
export declare class GameliftFleet extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/gamelift_fleet.html aws_gamelift_fleet} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GameliftFleetConfig
    */
    constructor(scope: Construct, id: string, config: GameliftFleetConfig);
    get arn(): string;
    private _buildId?;
    get buildId(): string;
    set buildId(value: string);
    get buildIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _ec2InstanceType?;
    get ec2InstanceType(): string;
    set ec2InstanceType(value: string);
    get ec2InstanceTypeInput(): string;
    private _fleetType?;
    get fleetType(): string;
    set fleetType(value: string);
    resetFleetType(): void;
    get fleetTypeInput(): string;
    get id(): string;
    private _instanceRoleArn?;
    get instanceRoleArn(): string;
    set instanceRoleArn(value: string);
    resetInstanceRoleArn(): void;
    get instanceRoleArnInput(): string;
    get logPaths(): string[];
    private _metricGroups?;
    get metricGroups(): string[];
    set metricGroups(value: string[]);
    resetMetricGroups(): void;
    get metricGroupsInput(): string[];
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _newGameSessionProtectionPolicy?;
    get newGameSessionProtectionPolicy(): string;
    set newGameSessionProtectionPolicy(value: string);
    resetNewGameSessionProtectionPolicy(): void;
    get newGameSessionProtectionPolicyInput(): string;
    get operatingSystem(): string;
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
    private _ec2InboundPermission?;
    get ec2InboundPermission(): GameliftFleetEc2InboundPermission[];
    set ec2InboundPermission(value: GameliftFleetEc2InboundPermission[]);
    resetEc2InboundPermission(): void;
    get ec2InboundPermissionInput(): GameliftFleetEc2InboundPermission[];
    private _resourceCreationLimitPolicy;
    get resourceCreationLimitPolicy(): GameliftFleetResourceCreationLimitPolicyOutputReference;
    putResourceCreationLimitPolicy(value: GameliftFleetResourceCreationLimitPolicy): void;
    resetResourceCreationLimitPolicy(): void;
    get resourceCreationLimitPolicyInput(): GameliftFleetResourceCreationLimitPolicy;
    private _runtimeConfiguration;
    get runtimeConfiguration(): GameliftFleetRuntimeConfigurationOutputReference;
    putRuntimeConfiguration(value: GameliftFleetRuntimeConfiguration): void;
    resetRuntimeConfiguration(): void;
    get runtimeConfigurationInput(): GameliftFleetRuntimeConfiguration;
    private _timeouts;
    get timeouts(): GameliftFleetTimeoutsOutputReference;
    putTimeouts(value: GameliftFleetTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): GameliftFleetTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=gamelift-fleet.d.ts.map