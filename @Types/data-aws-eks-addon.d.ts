import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Kubernetes Service
*/
export interface DataAwsEksAddonConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html#addon_name DataAwsEksAddon#addon_name}
    */
    readonly addonName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html#cluster_name DataAwsEksAddon#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html#tags DataAwsEksAddon#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html aws_eks_addon}
*/
export declare class DataAwsEksAddon extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/eks_addon.html aws_eks_addon} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEksAddonConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEksAddonConfig);
    private _addonName?;
    get addonName(): string;
    set addonName(value: string);
    get addonNameInput(): string;
    get addonVersion(): string;
    get arn(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    get createdAt(): string;
    get id(): string;
    get modifiedAt(): string;
    get serviceAccountRoleArn(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-eks-addon.d.ts.map