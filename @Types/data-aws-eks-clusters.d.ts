import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Kubernetes Service
*/
export interface DataAwsEksClustersConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_clusters.html aws_eks_clusters}
*/
export declare class DataAwsEksClusters extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_clusters.html aws_eks_clusters} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksClustersConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEksClustersConfig);
    get id(): string;
    get names(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-eks-clusters.d.ts.map