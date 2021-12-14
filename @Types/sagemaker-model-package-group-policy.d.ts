import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerModelPackageGroupPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy.html#model_package_group_name SagemakerModelPackageGroupPolicy#model_package_group_name}
    */
    readonly modelPackageGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy.html#resource_policy SagemakerModelPackageGroupPolicy#resource_policy}
    */
    readonly resourcePolicy: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy.html aws_sagemaker_model_package_group_policy}
*/
export declare class SagemakerModelPackageGroupPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group_policy.html aws_sagemaker_model_package_group_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerModelPackageGroupPolicyConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerModelPackageGroupPolicyConfig);
    get id(): string;
    private _modelPackageGroupName?;
    get modelPackageGroupName(): string;
    set modelPackageGroupName(value: string);
    get modelPackageGroupNameInput(): string;
    private _resourcePolicy?;
    get resourcePolicy(): string;
    set resourcePolicy(value: string);
    get resourcePolicyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-model-package-group-policy.d.ts.map