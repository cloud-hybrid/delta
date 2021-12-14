import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Kubernetes Service
*/
export interface DataAwsEksNodeGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html#cluster_name DataAwsEksNodeGroup#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html#node_group_name DataAwsEksNodeGroup#node_group_name}
    */
    readonly nodeGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html#tags DataAwsEksNodeGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsEksNodeGroupRemoteAccess extends cdktf.ComplexComputedList {
    get ec2SshKey(): string;
    get sourceSecurityGroupIds(): string[];
}
export declare class DataAwsEksNodeGroupResourcesAutoscalingGroups extends cdktf.ComplexComputedList {
    get name(): string;
}
export declare class DataAwsEksNodeGroupResources extends cdktf.ComplexComputedList {
    get autoscalingGroups(): any;
    get remoteAccessSecurityGroupId(): string;
}
export declare class DataAwsEksNodeGroupScalingConfig extends cdktf.ComplexComputedList {
    get desiredSize(): number;
    get maxSize(): number;
    get minSize(): number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html aws_eks_node_group}
*/
export declare class DataAwsEksNodeGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_node_group.html aws_eks_node_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksNodeGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEksNodeGroupConfig);
    get amiType(): string;
    get arn(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    get diskSize(): number;
    get id(): string;
    get instanceTypes(): string[];
    labels(key: string): string;
    private _nodeGroupName?;
    get nodeGroupName(): string;
    set nodeGroupName(value: string);
    get nodeGroupNameInput(): string;
    get nodeRoleArn(): string;
    get releaseVersion(): string;
    remoteAccess(index: string): DataAwsEksNodeGroupRemoteAccess;
    resources(index: string): DataAwsEksNodeGroupResources;
    scalingConfig(index: string): DataAwsEksNodeGroupScalingConfig;
    get status(): string;
    get subnetIds(): string[];
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
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-eks-node-group.d.ts.map