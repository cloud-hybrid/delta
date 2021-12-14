import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerNotebookInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#additional_code_repositories SagemakerNotebookInstance#additional_code_repositories}
    */
    readonly additionalCodeRepositories?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#default_code_repository SagemakerNotebookInstance#default_code_repository}
    */
    readonly defaultCodeRepository?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#direct_internet_access SagemakerNotebookInstance#direct_internet_access}
    */
    readonly directInternetAccess?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#instance_type SagemakerNotebookInstance#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#kms_key_id SagemakerNotebookInstance#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#lifecycle_config_name SagemakerNotebookInstance#lifecycle_config_name}
    */
    readonly lifecycleConfigName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#name SagemakerNotebookInstance#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#platform_identifier SagemakerNotebookInstance#platform_identifier}
    */
    readonly platformIdentifier?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#role_arn SagemakerNotebookInstance#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#root_access SagemakerNotebookInstance#root_access}
    */
    readonly rootAccess?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#security_groups SagemakerNotebookInstance#security_groups}
    */
    readonly securityGroups?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#subnet_id SagemakerNotebookInstance#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#tags SagemakerNotebookInstance#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#tags_all SagemakerNotebookInstance#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html#volume_size SagemakerNotebookInstance#volume_size}
    */
    readonly volumeSize?: number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html aws_sagemaker_notebook_instance}
*/
export declare class SagemakerNotebookInstance extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance.html aws_sagemaker_notebook_instance} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerNotebookInstanceConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerNotebookInstanceConfig);
    private _additionalCodeRepositories?;
    get additionalCodeRepositories(): string[];
    set additionalCodeRepositories(value: string[]);
    resetAdditionalCodeRepositories(): void;
    get additionalCodeRepositoriesInput(): string[];
    get arn(): string;
    private _defaultCodeRepository?;
    get defaultCodeRepository(): string;
    set defaultCodeRepository(value: string);
    resetDefaultCodeRepository(): void;
    get defaultCodeRepositoryInput(): string;
    private _directInternetAccess?;
    get directInternetAccess(): string;
    set directInternetAccess(value: string);
    resetDirectInternetAccess(): void;
    get directInternetAccessInput(): string;
    get id(): string;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _lifecycleConfigName?;
    get lifecycleConfigName(): string;
    set lifecycleConfigName(value: string);
    resetLifecycleConfigName(): void;
    get lifecycleConfigNameInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get networkInterfaceId(): string;
    private _platformIdentifier?;
    get platformIdentifier(): string;
    set platformIdentifier(value: string);
    resetPlatformIdentifier(): void;
    get platformIdentifierInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _rootAccess?;
    get rootAccess(): string;
    set rootAccess(value: string);
    resetRootAccess(): void;
    get rootAccessInput(): string;
    private _securityGroups?;
    get securityGroups(): string[];
    set securityGroups(value: string[]);
    resetSecurityGroups(): void;
    get securityGroupsInput(): string[];
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string;
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
    get url(): string;
    private _volumeSize?;
    get volumeSize(): number;
    set volumeSize(value: number);
    resetVolumeSize(): void;
    get volumeSizeInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-notebook-instance.d.ts.map