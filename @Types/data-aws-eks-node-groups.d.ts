import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Kubernetes Service
*/
export interface DataAwsEksNodeGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_node_groups.html#cluster_name DataAwsEksNodeGroups#cluster_name}
    */
    readonly clusterName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_node_groups.html aws_eks_node_groups}
*/
export declare class DataAwsEksNodeGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_node_groups.html aws_eks_node_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksNodeGroupsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEksNodeGroupsConfig);
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    get id(): string;
    get names(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-eks-node-groups.d.ts.map