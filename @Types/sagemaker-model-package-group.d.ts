import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerModelPackageGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html#model_package_group_description SagemakerModelPackageGroup#model_package_group_description}
    */
    readonly modelPackageGroupDescription?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html#model_package_group_name SagemakerModelPackageGroup#model_package_group_name}
    */
    readonly modelPackageGroupName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html#tags SagemakerModelPackageGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html#tags_all SagemakerModelPackageGroup#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html aws_sagemaker_model_package_group}
*/
export declare class SagemakerModelPackageGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_model_package_group.html aws_sagemaker_model_package_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerModelPackageGroupConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerModelPackageGroupConfig);
    get arn(): string;
    get id(): string;
    private _modelPackageGroupDescription?;
    get modelPackageGroupDescription(): string;
    set modelPackageGroupDescription(value: string);
    resetModelPackageGroupDescription(): void;
    get modelPackageGroupDescriptionInput(): string;
    private _modelPackageGroupName?;
    get modelPackageGroupName(): string;
    set modelPackageGroupName(value: string);
    get modelPackageGroupNameInput(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-model-package-group.d.ts.map