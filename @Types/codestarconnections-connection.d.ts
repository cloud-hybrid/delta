import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodeStar
*/
export interface CodestarconnectionsConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html#host_arn CodestarconnectionsConnection#host_arn}
    */
    readonly hostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html#name CodestarconnectionsConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html#provider_type CodestarconnectionsConnection#provider_type}
    */
    readonly providerType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html#tags CodestarconnectionsConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html#tags_all CodestarconnectionsConnection#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html aws_codestarconnections_connection}
*/
export declare class CodestarconnectionsConnection extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html aws_codestarconnections_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodestarconnectionsConnectionConfig
    */
    constructor(scope: Construct, id: string, config: CodestarconnectionsConnectionConfig);
    get arn(): string;
    get connectionStatus(): string;
    private _hostArn?;
    get hostArn(): string;
    set hostArn(value: string);
    resetHostArn(): void;
    get hostArnInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _providerType?;
    get providerType(): string;
    set providerType(value: string);
    resetProviderType(): void;
    get providerTypeInput(): string;
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
//# sourceMappingURL=codestarconnections-connection.d.ts.map