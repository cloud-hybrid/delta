import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Kubernetes Service
*/
export interface EksNodeGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#ami_type EksNodeGroup#ami_type}
    */
    readonly amiType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#capacity_type EksNodeGroup#capacity_type}
    */
    readonly capacityType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#cluster_name EksNodeGroup#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#disk_size EksNodeGroup#disk_size}
    */
    readonly diskSize?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#force_update_version EksNodeGroup#force_update_version}
    */
    readonly forceUpdateVersion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#instance_types EksNodeGroup#instance_types}
    */
    readonly instanceTypes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#labels EksNodeGroup#labels}
    */
    readonly labels?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#node_group_name EksNodeGroup#node_group_name}
    */
    readonly nodeGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#node_group_name_prefix EksNodeGroup#node_group_name_prefix}
    */
    readonly nodeGroupNamePrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#node_role_arn EksNodeGroup#node_role_arn}
    */
    readonly nodeRoleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#release_version EksNodeGroup#release_version}
    */
    readonly releaseVersion?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#subnet_ids EksNodeGroup#subnet_ids}
    */
    readonly subnetIds: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#tags EksNodeGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#tags_all EksNodeGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#version EksNodeGroup#version}
    */
    readonly version?: string;
    /**
    * launch_template block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#launch_template EksNodeGroup#launch_template}
    */
    readonly launchTemplate?: EksNodeGroupLaunchTemplate;
    /**
    * remote_access block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#remote_access EksNodeGroup#remote_access}
    */
    readonly remoteAccess?: EksNodeGroupRemoteAccess;
    /**
    * scaling_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#scaling_config EksNodeGroup#scaling_config}
    */
    readonly scalingConfig: EksNodeGroupScalingConfig;
    /**
    * taint block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#taint EksNodeGroup#taint}
    */
    readonly taint?: EksNodeGroupTaint[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#timeouts EksNodeGroup#timeouts}
    */
    readonly timeouts?: EksNodeGroupTimeouts;
    /**
    * update_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#update_config EksNodeGroup#update_config}
    */
    readonly updateConfig?: EksNodeGroupUpdateConfig;
}
export declare class EksNodeGroupResourcesAutoscalingGroups extends cdktf.ComplexComputedList {
    get name(): string;
}
export declare class EksNodeGroupResources extends cdktf.ComplexComputedList {
    get autoscalingGroups(): any;
    get remoteAccessSecurityGroupId(): string;
}
export interface EksNodeGroupLaunchTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#id EksNodeGroup#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#name EksNodeGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#version EksNodeGroup#version}
    */
    readonly version: string;
}
export declare function eksNodeGroupLaunchTemplateToTerraform(struct?: EksNodeGroupLaunchTemplateOutputReference | EksNodeGroupLaunchTemplate): any;
export declare class EksNodeGroupLaunchTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EksNodeGroupLaunchTemplate | undefined;
    set internalValue(value: EksNodeGroupLaunchTemplate | undefined);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string;
}
export interface EksNodeGroupRemoteAccess {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#ec2_ssh_key EksNodeGroup#ec2_ssh_key}
    */
    readonly ec2SshKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#source_security_group_ids EksNodeGroup#source_security_group_ids}
    */
    readonly sourceSecurityGroupIds?: string[];
}
export declare function eksNodeGroupRemoteAccessToTerraform(struct?: EksNodeGroupRemoteAccessOutputReference | EksNodeGroupRemoteAccess): any;
export declare class EksNodeGroupRemoteAccessOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EksNodeGroupRemoteAccess | undefined;
    set internalValue(value: EksNodeGroupRemoteAccess | undefined);
    private _ec2SshKey?;
    get ec2SshKey(): string;
    set ec2SshKey(value: string);
    resetEc2SshKey(): void;
    get ec2SshKeyInput(): string;
    private _sourceSecurityGroupIds?;
    get sourceSecurityGroupIds(): string[];
    set sourceSecurityGroupIds(value: string[]);
    resetSourceSecurityGroupIds(): void;
    get sourceSecurityGroupIdsInput(): string[];
}
export interface EksNodeGroupScalingConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#desired_size EksNodeGroup#desired_size}
    */
    readonly desiredSize: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#max_size EksNodeGroup#max_size}
    */
    readonly maxSize: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#min_size EksNodeGroup#min_size}
    */
    readonly minSize: number;
}
export declare function eksNodeGroupScalingConfigToTerraform(struct?: EksNodeGroupScalingConfigOutputReference | EksNodeGroupScalingConfig): any;
export declare class EksNodeGroupScalingConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EksNodeGroupScalingConfig | undefined;
    set internalValue(value: EksNodeGroupScalingConfig | undefined);
    private _desiredSize?;
    get desiredSize(): number;
    set desiredSize(value: number);
    get desiredSizeInput(): number;
    private _maxSize?;
    get maxSize(): number;
    set maxSize(value: number);
    get maxSizeInput(): number;
    private _minSize?;
    get minSize(): number;
    set minSize(value: number);
    get minSizeInput(): number;
}
export interface EksNodeGroupTaint {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#effect EksNodeGroup#effect}
    */
    readonly effect: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#key EksNodeGroup#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#value EksNodeGroup#value}
    */
    readonly value?: string;
}
export declare function eksNodeGroupTaintToTerraform(struct?: EksNodeGroupTaint): any;
export interface EksNodeGroupTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#create EksNodeGroup#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#delete EksNodeGroup#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#update EksNodeGroup#update}
    */
    readonly update?: string;
}
export declare function eksNodeGroupTimeoutsToTerraform(struct?: EksNodeGroupTimeoutsOutputReference | EksNodeGroupTimeouts): any;
export declare class EksNodeGroupTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EksNodeGroupTimeouts | undefined;
    set internalValue(value: EksNodeGroupTimeouts | undefined);
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
export interface EksNodeGroupUpdateConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#max_unavailable EksNodeGroup#max_unavailable}
    */
    readonly maxUnavailable?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html#max_unavailable_percentage EksNodeGroup#max_unavailable_percentage}
    */
    readonly maxUnavailablePercentage?: number;
}
export declare function eksNodeGroupUpdateConfigToTerraform(struct?: EksNodeGroupUpdateConfigOutputReference | EksNodeGroupUpdateConfig): any;
export declare class EksNodeGroupUpdateConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EksNodeGroupUpdateConfig | undefined;
    set internalValue(value: EksNodeGroupUpdateConfig | undefined);
    private _maxUnavailable?;
    get maxUnavailable(): number;
    set maxUnavailable(value: number);
    resetMaxUnavailable(): void;
    get maxUnavailableInput(): number;
    private _maxUnavailablePercentage?;
    get maxUnavailablePercentage(): number;
    set maxUnavailablePercentage(value: number);
    resetMaxUnavailablePercentage(): void;
    get maxUnavailablePercentageInput(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html aws_eks_node_group}
*/
export declare class EksNodeGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_node_group.html aws_eks_node_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksNodeGroupConfig
    */
    constructor(scope: Construct, id: string, config: EksNodeGroupConfig);
    private _amiType?;
    get amiType(): string;
    set amiType(value: string);
    resetAmiType(): void;
    get amiTypeInput(): string;
    get arn(): string;
    private _capacityType?;
    get capacityType(): string;
    set capacityType(value: string);
    resetCapacityType(): void;
    get capacityTypeInput(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    private _diskSize?;
    get diskSize(): number;
    set diskSize(value: number);
    resetDiskSize(): void;
    get diskSizeInput(): number;
    private _forceUpdateVersion?;
    get forceUpdateVersion(): boolean | cdktf.IResolvable;
    set forceUpdateVersion(value: boolean | cdktf.IResolvable);
    resetForceUpdateVersion(): void;
    get forceUpdateVersionInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _instanceTypes?;
    get instanceTypes(): string[];
    set instanceTypes(value: string[]);
    resetInstanceTypes(): void;
    get instanceTypesInput(): string[];
    private _labels?;
    get labels(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set labels(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetLabels(): void;
    get labelsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _nodeGroupName?;
    get nodeGroupName(): string;
    set nodeGroupName(value: string);
    resetNodeGroupName(): void;
    get nodeGroupNameInput(): string;
    private _nodeGroupNamePrefix?;
    get nodeGroupNamePrefix(): string;
    set nodeGroupNamePrefix(value: string);
    resetNodeGroupNamePrefix(): void;
    get nodeGroupNamePrefixInput(): string;
    private _nodeRoleArn?;
    get nodeRoleArn(): string;
    set nodeRoleArn(value: string);
    get nodeRoleArnInput(): string;
    private _releaseVersion?;
    get releaseVersion(): string;
    set releaseVersion(value: string);
    resetReleaseVersion(): void;
    get releaseVersionInput(): string;
    resources(index: string): EksNodeGroupResources;
    get status(): string;
    private _subnetIds?;
    get subnetIds(): string[];
    set subnetIds(value: string[]);
    get subnetIdsInput(): string[];
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
    private _version?;
    get version(): string;
    set version(value: string);
    resetVersion(): void;
    get versionInput(): string;
    private _launchTemplate;
    get launchTemplate(): EksNodeGroupLaunchTemplateOutputReference;
    putLaunchTemplate(value: EksNodeGroupLaunchTemplate): void;
    resetLaunchTemplate(): void;
    get launchTemplateInput(): EksNodeGroupLaunchTemplate;
    private _remoteAccess;
    get remoteAccess(): EksNodeGroupRemoteAccessOutputReference;
    putRemoteAccess(value: EksNodeGroupRemoteAccess): void;
    resetRemoteAccess(): void;
    get remoteAccessInput(): EksNodeGroupRemoteAccess;
    private _scalingConfig;
    get scalingConfig(): EksNodeGroupScalingConfigOutputReference;
    putScalingConfig(value: EksNodeGroupScalingConfig): void;
    get scalingConfigInput(): EksNodeGroupScalingConfig;
    private _taint?;
    get taint(): EksNodeGroupTaint[];
    set taint(value: EksNodeGroupTaint[]);
    resetTaint(): void;
    get taintInput(): EksNodeGroupTaint[];
    private _timeouts;
    get timeouts(): EksNodeGroupTimeoutsOutputReference;
    putTimeouts(value: EksNodeGroupTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): EksNodeGroupTimeouts;
    private _updateConfig;
    get updateConfig(): EksNodeGroupUpdateConfigOutputReference;
    putUpdateConfig(value: EksNodeGroupUpdateConfig): void;
    resetUpdateConfig(): void;
    get updateConfigInput(): EksNodeGroupUpdateConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=eks-node-group.d.ts.map