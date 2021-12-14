import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodeCommit
*/
export interface CodecommitRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html#default_branch CodecommitRepository#default_branch}
    */
    readonly defaultBranch?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html#description CodecommitRepository#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html#repository_name CodecommitRepository#repository_name}
    */
    readonly repositoryName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html#tags CodecommitRepository#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html#tags_all CodecommitRepository#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html aws_codecommit_repository}
*/
export declare class CodecommitRepository extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codecommit_repository.html aws_codecommit_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodecommitRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: CodecommitRepositoryConfig);
    get arn(): string;
    get cloneUrlHttp(): string;
    get cloneUrlSsh(): string;
    private _defaultBranch?;
    get defaultBranch(): string;
    set defaultBranch(value: string);
    resetDefaultBranch(): void;
    get defaultBranchInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    get repositoryId(): string;
    private _repositoryName?;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string;
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
//# sourceMappingURL=codecommit-repository.d.ts.map