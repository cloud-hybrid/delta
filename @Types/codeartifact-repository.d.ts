import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodeArtifact
*/
export interface CodeartifactRepositoryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#description CodeartifactRepository#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#domain CodeartifactRepository#domain}
    */
    readonly domain: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#domain_owner CodeartifactRepository#domain_owner}
    */
    readonly domainOwner?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#repository CodeartifactRepository#repository}
    */
    readonly repository: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#tags CodeartifactRepository#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#tags_all CodeartifactRepository#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * external_connections block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#external_connections CodeartifactRepository#external_connections}
    */
    readonly externalConnections?: CodeartifactRepositoryExternalConnections;
    /**
    * upstream block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#upstream CodeartifactRepository#upstream}
    */
    readonly upstream?: CodeartifactRepositoryUpstream[];
}
export interface CodeartifactRepositoryExternalConnections {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#external_connection_name CodeartifactRepository#external_connection_name}
    */
    readonly externalConnectionName: string;
}
export declare function codeartifactRepositoryExternalConnectionsToTerraform(struct?: CodeartifactRepositoryExternalConnectionsOutputReference | CodeartifactRepositoryExternalConnections): any;
export declare class CodeartifactRepositoryExternalConnectionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodeartifactRepositoryExternalConnections | undefined;
    set internalValue(value: CodeartifactRepositoryExternalConnections | undefined);
    private _externalConnectionName?;
    get externalConnectionName(): string;
    set externalConnectionName(value: string);
    get externalConnectionNameInput(): string;
}
export interface CodeartifactRepositoryUpstream {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html#repository_name CodeartifactRepository#repository_name}
    */
    readonly repositoryName: string;
}
export declare function codeartifactRepositoryUpstreamToTerraform(struct?: CodeartifactRepositoryUpstream): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html aws_codeartifact_repository}
*/
export declare class CodeartifactRepository extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codeartifact_repository.html aws_codeartifact_repository} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodeartifactRepositoryConfig
    */
    constructor(scope: Construct, id: string, config: CodeartifactRepositoryConfig);
    get administratorAccount(): string;
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _domain?;
    get domain(): string;
    set domain(value: string);
    get domainInput(): string;
    private _domainOwner?;
    get domainOwner(): string;
    set domainOwner(value: string);
    resetDomainOwner(): void;
    get domainOwnerInput(): string;
    get id(): string;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    get repositoryInput(): string;
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
    private _externalConnections;
    get externalConnections(): CodeartifactRepositoryExternalConnectionsOutputReference;
    putExternalConnections(value: CodeartifactRepositoryExternalConnections): void;
    resetExternalConnections(): void;
    get externalConnectionsInput(): CodeartifactRepositoryExternalConnections;
    private _upstream?;
    get upstream(): CodeartifactRepositoryUpstream[];
    set upstream(value: CodeartifactRepositoryUpstream[]);
    resetUpstream(): void;
    get upstreamInput(): CodeartifactRepositoryUpstream[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=codeartifact-repository.d.ts.map