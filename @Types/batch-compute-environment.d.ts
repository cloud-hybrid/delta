import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Batch
*/
export interface BatchComputeEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#compute_environment_name BatchComputeEnvironment#compute_environment_name}
    */
    readonly computeEnvironmentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#compute_environment_name_prefix BatchComputeEnvironment#compute_environment_name_prefix}
    */
    readonly computeEnvironmentNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#service_role BatchComputeEnvironment#service_role}
    */
    readonly serviceRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#state BatchComputeEnvironment#state}
    */
    readonly state?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#tags BatchComputeEnvironment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#tags_all BatchComputeEnvironment#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#type BatchComputeEnvironment#type}
    */
    readonly type: string;
    /**
    * compute_resources block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#compute_resources BatchComputeEnvironment#compute_resources}
    */
    readonly computeResources?: BatchComputeEnvironmentComputeResources;
}
export interface BatchComputeEnvironmentComputeResourcesEc2Configuration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#image_id_override BatchComputeEnvironment#image_id_override}
    */
    readonly imageIdOverride?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#image_type BatchComputeEnvironment#image_type}
    */
    readonly imageType?: string;
}
export declare function batchComputeEnvironmentComputeResourcesEc2ConfigurationToTerraform(struct?: BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference | BatchComputeEnvironmentComputeResourcesEc2Configuration): any;
export declare class BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): BatchComputeEnvironmentComputeResourcesEc2Configuration | undefined;
    set internalValue(value: BatchComputeEnvironmentComputeResourcesEc2Configuration | undefined);
    private _imageIdOverride?;
    get imageIdOverride(): string;
    set imageIdOverride(value: string);
    resetImageIdOverride(): void;
    get imageIdOverrideInput(): string;
    private _imageType?;
    get imageType(): string;
    set imageType(value: string);
    resetImageType(): void;
    get imageTypeInput(): string;
}
export interface BatchComputeEnvironmentComputeResourcesLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#launch_template_id BatchComputeEnvironment#launch_template_id}
    */
    readonly launchTemplateId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#launch_template_name BatchComputeEnvironment#launch_template_name}
    */
    readonly launchTemplateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#version BatchComputeEnvironment#version}
    */
    readonly version?: string;
}
export declare function batchComputeEnvironmentComputeResourcesLaunchTemplateToTerraform(struct?: BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference | BatchComputeEnvironmentComputeResourcesLaunchTemplate): any;
export declare class BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): BatchComputeEnvironmentComputeResourcesLaunchTemplate | undefined;
    set internalValue(value: BatchComputeEnvironmentComputeResourcesLaunchTemplate | undefined);
    private _launchTemplateId?;
    get launchTemplateId(): string;
    set launchTemplateId(value: string);
    resetLaunchTemplateId(): void;
    get launchTemplateIdInput(): string;
    private _launchTemplateName?;
    get launchTemplateName(): string;
    set launchTemplateName(value: string);
    resetLaunchTemplateName(): void;
    get launchTemplateNameInput(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
}
export interface BatchComputeEnvironmentComputeResources {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#allocation_strategy BatchComputeEnvironment#allocation_strategy}
    */
    readonly allocationStrategy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#bid_percentage BatchComputeEnvironment#bid_percentage}
    */
    readonly bidPercentage?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#desired_vcpus BatchComputeEnvironment#desired_vcpus}
    */
    readonly desiredVcpus?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#ec2_key_pair BatchComputeEnvironment#ec2_key_pair}
    */
    readonly ec2KeyPair?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#image_id BatchComputeEnvironment#image_id}
    */
    readonly imageId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#instance_role BatchComputeEnvironment#instance_role}
    */
    readonly instanceRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#instance_type BatchComputeEnvironment#instance_type}
    */
    readonly instanceType?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#max_vcpus BatchComputeEnvironment#max_vcpus}
    */
    readonly maxVcpus: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#min_vcpus BatchComputeEnvironment#min_vcpus}
    */
    readonly minVcpus?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#security_group_ids BatchComputeEnvironment#security_group_ids}
    */
    readonly securityGroupIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#spot_iam_fleet_role BatchComputeEnvironment#spot_iam_fleet_role}
    */
    readonly spotIamFleetRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#subnets BatchComputeEnvironment#subnets}
    */
    readonly subnets: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#tags BatchComputeEnvironment#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#type BatchComputeEnvironment#type}
    */
    readonly type: string;
    /**
    * ec2_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#ec2_configuration BatchComputeEnvironment#ec2_configuration}
    */
    readonly ec2Configuration?: BatchComputeEnvironmentComputeResourcesEc2Configuration;
    /**
    * launch_template block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html#launch_template BatchComputeEnvironment#launch_template}
    */
    readonly launchTemplate?: BatchComputeEnvironmentComputeResourcesLaunchTemplate;
}
export declare function batchComputeEnvironmentComputeResourcesToTerraform(struct?: BatchComputeEnvironmentComputeResourcesOutputReference | BatchComputeEnvironmentComputeResources): any;
export declare class BatchComputeEnvironmentComputeResourcesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): BatchComputeEnvironmentComputeResources | undefined;
    set internalValue(value: BatchComputeEnvironmentComputeResources | undefined);
    private _allocationStrategy?;
    get allocationStrategy(): string;
    set allocationStrategy(value: string);
    resetAllocationStrategy(): void;
    get allocationStrategyInput(): string;
    private _bidPercentage?;
    get bidPercentage(): number;
    set bidPercentage(value: number);
    resetBidPercentage(): void;
    get bidPercentageInput(): number;
    private _desiredVcpus?;
    get desiredVcpus(): number;
    set desiredVcpus(value: number);
    resetDesiredVcpus(): void;
    get desiredVcpusInput(): number;
    private _ec2KeyPair?;
    get ec2KeyPair(): string;
    set ec2KeyPair(value: string);
    resetEc2KeyPair(): void;
    get ec2KeyPairInput(): string;
    private _imageId?;
    get imageId(): string;
    set imageId(value: string);
    resetImageId(): void;
    get imageIdInput(): string;
    private _instanceRole?;
    get instanceRole(): string;
    set instanceRole(value: string);
    resetInstanceRole(): void;
    get instanceRoleInput(): string;
    private _instanceType?;
    get instanceType(): string[];
    set instanceType(value: string[]);
    resetInstanceType(): void;
    get instanceTypeInput(): string[];
    private _maxVcpus?;
    get maxVcpus(): number;
    set maxVcpus(value: number);
    get maxVcpusInput(): number;
    private _minVcpus?;
    get minVcpus(): number;
    set minVcpus(value: number);
    resetMinVcpus(): void;
    get minVcpusInput(): number;
    private _securityGroupIds?;
    get securityGroupIds(): string[];
    set securityGroupIds(value: string[]);
    get securityGroupIdsInput(): string[];
    private _spotIamFleetRole?;
    get spotIamFleetRole(): string;
    set spotIamFleetRole(value: string);
    resetSpotIamFleetRole(): void;
    get spotIamFleetRoleInput(): string;
    private _subnets?;
    get subnets(): string[];
    set subnets(value: string[]);
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _ec2Configuration;
    get ec2Configuration(): BatchComputeEnvironmentComputeResourcesEc2ConfigurationOutputReference;
    putEc2Configuration(value: BatchComputeEnvironmentComputeResourcesEc2Configuration): void;
    resetEc2Configuration(): void;
    get ec2ConfigurationInput(): BatchComputeEnvironmentComputeResourcesEc2Configuration;
    private _launchTemplate;
    get launchTemplate(): BatchComputeEnvironmentComputeResourcesLaunchTemplateOutputReference;
    putLaunchTemplate(value: BatchComputeEnvironmentComputeResourcesLaunchTemplate): void;
    resetLaunchTemplate(): void;
    get launchTemplateInput(): BatchComputeEnvironmentComputeResourcesLaunchTemplate;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html aws_batch_compute_environment}
*/
export declare class BatchComputeEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/batch_compute_environment.html aws_batch_compute_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BatchComputeEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: BatchComputeEnvironmentConfig);
    get arn(): string;
    private _computeEnvironmentName?;
    get computeEnvironmentName(): string;
    set computeEnvironmentName(value: string);
    resetComputeEnvironmentName(): void;
    get computeEnvironmentNameInput(): string;
    private _computeEnvironmentNamePrefix?;
    get computeEnvironmentNamePrefix(): string;
    set computeEnvironmentNamePrefix(value: string);
    resetComputeEnvironmentNamePrefix(): void;
    get computeEnvironmentNamePrefixInput(): string;
    get ecsClusterArn(): string;
    get id(): string;
    private _serviceRole?;
    get serviceRole(): string;
    set serviceRole(value: string);
    resetServiceRole(): void;
    get serviceRoleInput(): string;
    private _state?;
    get state(): string;
    set state(value: string);
    resetState(): void;
    get stateInput(): string;
    get status(): string;
    get statusReason(): string;
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
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _computeResources;
    get computeResources(): BatchComputeEnvironmentComputeResourcesOutputReference;
    putComputeResources(value: BatchComputeEnvironmentComputeResources): void;
    resetComputeResources(): void;
    get computeResourcesInput(): BatchComputeEnvironmentComputeResources;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=batch-compute-environment.d.ts.map