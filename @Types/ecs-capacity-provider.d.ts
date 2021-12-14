import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2 Container Service
*/
export interface EcsCapacityProviderConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#name EcsCapacityProvider#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#tags EcsCapacityProvider#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#tags_all EcsCapacityProvider#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * auto_scaling_group_provider block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#auto_scaling_group_provider EcsCapacityProvider#auto_scaling_group_provider}
    */
    readonly autoScalingGroupProvider: EcsCapacityProviderAutoScalingGroupProvider;
}
export interface EcsCapacityProviderAutoScalingGroupProviderManagedScaling {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#instance_warmup_period EcsCapacityProvider#instance_warmup_period}
    */
    readonly instanceWarmupPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#maximum_scaling_step_size EcsCapacityProvider#maximum_scaling_step_size}
    */
    readonly maximumScalingStepSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#minimum_scaling_step_size EcsCapacityProvider#minimum_scaling_step_size}
    */
    readonly minimumScalingStepSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#status EcsCapacityProvider#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#target_capacity EcsCapacityProvider#target_capacity}
    */
    readonly targetCapacity?: number;
}
export declare function ecsCapacityProviderAutoScalingGroupProviderManagedScalingToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference | EcsCapacityProviderAutoScalingGroupProviderManagedScaling): any;
export declare class EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsCapacityProviderAutoScalingGroupProviderManagedScaling | undefined;
    set internalValue(value: EcsCapacityProviderAutoScalingGroupProviderManagedScaling | undefined);
    private _instanceWarmupPeriod?;
    get instanceWarmupPeriod(): number;
    set instanceWarmupPeriod(value: number);
    resetInstanceWarmupPeriod(): void;
    get instanceWarmupPeriodInput(): number;
    private _maximumScalingStepSize?;
    get maximumScalingStepSize(): number;
    set maximumScalingStepSize(value: number);
    resetMaximumScalingStepSize(): void;
    get maximumScalingStepSizeInput(): number;
    private _minimumScalingStepSize?;
    get minimumScalingStepSize(): number;
    set minimumScalingStepSize(value: number);
    resetMinimumScalingStepSize(): void;
    get minimumScalingStepSizeInput(): number;
    private _status?;
    get status(): string;
    set status(value: string);
    resetStatus(): void;
    get statusInput(): string;
    private _targetCapacity?;
    get targetCapacity(): number;
    set targetCapacity(value: number);
    resetTargetCapacity(): void;
    get targetCapacityInput(): number;
}
export interface EcsCapacityProviderAutoScalingGroupProvider {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#auto_scaling_group_arn EcsCapacityProvider#auto_scaling_group_arn}
    */
    readonly autoScalingGroupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#managed_termination_protection EcsCapacityProvider#managed_termination_protection}
    */
    readonly managedTerminationProtection?: string;
    /**
    * managed_scaling block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html#managed_scaling EcsCapacityProvider#managed_scaling}
    */
    readonly managedScaling?: EcsCapacityProviderAutoScalingGroupProviderManagedScaling;
}
export declare function ecsCapacityProviderAutoScalingGroupProviderToTerraform(struct?: EcsCapacityProviderAutoScalingGroupProviderOutputReference | EcsCapacityProviderAutoScalingGroupProvider): any;
export declare class EcsCapacityProviderAutoScalingGroupProviderOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EcsCapacityProviderAutoScalingGroupProvider | undefined;
    set internalValue(value: EcsCapacityProviderAutoScalingGroupProvider | undefined);
    private _autoScalingGroupArn?;
    get autoScalingGroupArn(): string;
    set autoScalingGroupArn(value: string);
    get autoScalingGroupArnInput(): string;
    private _managedTerminationProtection?;
    get managedTerminationProtection(): string;
    set managedTerminationProtection(value: string);
    resetManagedTerminationProtection(): void;
    get managedTerminationProtectionInput(): string;
    private _managedScaling;
    get managedScaling(): EcsCapacityProviderAutoScalingGroupProviderManagedScalingOutputReference;
    putManagedScaling(value: EcsCapacityProviderAutoScalingGroupProviderManagedScaling): void;
    resetManagedScaling(): void;
    get managedScalingInput(): EcsCapacityProviderAutoScalingGroupProviderManagedScaling;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html aws_ecs_capacity_provider}
*/
export declare class EcsCapacityProvider extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_capacity_provider.html aws_ecs_capacity_provider} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsCapacityProviderConfig
    */
    constructor(scope: Construct, id: string, config: EcsCapacityProviderConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _autoScalingGroupProvider;
    get autoScalingGroupProvider(): EcsCapacityProviderAutoScalingGroupProviderOutputReference;
    putAutoScalingGroupProvider(value: EcsCapacityProviderAutoScalingGroupProvider): void;
    get autoScalingGroupProviderInput(): EcsCapacityProviderAutoScalingGroupProvider;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ecs-capacity-provider.d.ts.map