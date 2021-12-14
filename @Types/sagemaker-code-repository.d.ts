import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerCodeRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#code_repository_name SagemakerCodeRepository#code_repository_name}
    */
    readonly codeRepositoryName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#tags SagemakerCodeRepository#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#tags_all SagemakerCodeRepository#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * git_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#git_config SagemakerCodeRepository#git_config}
    */
    readonly gitConfig: SagemakerCodeRepositoryGitConfig;
}
export interface SagemakerCodeRepositoryGitConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#branch SagemakerCodeRepository#branch}
    */
    readonly branch?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#repository_url SagemakerCodeRepository#repository_url}
    */
    readonly repositoryUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html#secret_arn SagemakerCodeRepository#secret_arn}
    */
    readonly secretArn?: string;
}
export declare function sagemakerCodeRepositoryGitConfigToTerraform(struct?: SagemakerCodeRepositoryGitConfigOutputReference | SagemakerCodeRepositoryGitConfig): any;
export declare class SagemakerCodeRepositoryGitConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerCodeRepositoryGitConfig | undefined;
    set internalValue(value: SagemakerCodeRepositoryGitConfig | undefined);
    private _branch?;
    get branch(): string;
    set branch(value: string);
    resetBranch(): void;
    get branchInput(): string;
    private _repositoryUrl?;
    get repositoryUrl(): string;
    set repositoryUrl(value: string);
    get repositoryUrlInput(): string;
    private _secretArn?;
    get secretArn(): string;
    set secretArn(value: string);
    resetSecretArn(): void;
    get secretArnInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html aws_sagemaker_code_repository}
*/
export declare class SagemakerCodeRepository extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_code_repository.html aws_sagemaker_code_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerCodeRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerCodeRepositoryConfig);
    get arn(): string;
    private _codeRepositoryName?;
    get codeRepositoryName(): string;
    set codeRepositoryName(value: string);
    get codeRepositoryNameInput(): string;
    get id(): string;
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
    private _gitConfig;
    get gitConfig(): SagemakerCodeRepositoryGitConfigOutputReference;
    putGitConfig(value: SagemakerCodeRepositoryGitConfig): void;
    get gitConfigInput(): SagemakerCodeRepositoryGitConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-code-repository.d.ts.map