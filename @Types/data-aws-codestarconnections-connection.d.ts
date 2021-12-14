import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodeStar
*/
export interface DataAwsCodestarconnectionsConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection.html#arn DataAwsCodestarconnectionsConnection#arn}
    */
    readonly arn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection.html#tags DataAwsCodestarconnectionsConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection.html aws_codestarconnections_connection}
*/
export declare class DataAwsCodestarconnectionsConnection extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection.html aws_codestarconnections_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCodestarconnectionsConnectionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCodestarconnectionsConnectionConfig);
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get connectionStatus(): string;
    get hostArn(): string;
    get id(): string;
    get name(): string;
    get providerType(): string;
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
//# sourceMappingURL=data-aws-codestarconnections-connection.d.ts.map