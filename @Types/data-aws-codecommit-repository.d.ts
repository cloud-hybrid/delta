import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodeCommit
*/
export interface DataAwsCodecommitRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codecommit_repository.html#repository_name DataAwsCodecommitRepository#repository_name}
    */
    readonly repositoryName: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/codecommit_repository.html aws_codecommit_repository}
*/
export declare class DataAwsCodecommitRepository extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codecommit_repository.html aws_codecommit_repository} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodecommitRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCodecommitRepositoryConfig);
    get arn(): string;
    get cloneUrlHttp(): string;
    get cloneUrlSsh(): string;
    get id(): string;
    get repositoryId(): string;
    private _repositoryName?;
    get repositoryName(): string;
    set repositoryName(value: string);
    get repositoryNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-codecommit-repository.d.ts.map