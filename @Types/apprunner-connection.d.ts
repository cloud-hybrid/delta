import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* App Runner
*/
export interface ApprunnerConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_connection.html#connection_name ApprunnerConnection#connection_name}
    */
    readonly connectionName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_connection.html#provider_type ApprunnerConnection#provider_type}
    */
    readonly providerType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_connection.html#tags ApprunnerConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apprunner_connection.html#tags_all ApprunnerConnection#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apprunner_connection.html aws_apprunner_connection}
*/
export declare class ApprunnerConnection extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apprunner_connection.html aws_apprunner_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApprunnerConnectionConfig
    */
    constructor(scope: Construct, id: string, config: ApprunnerConnectionConfig);
    get arn(): string;
    private _connectionName?;
    get connectionName(): string;
    set connectionName(value: string);
    get connectionNameInput(): string;
    get id(): string;
    private _providerType?;
    get providerType(): string;
    set providerType(value: string);
    get providerTypeInput(): string;
    get status(): string;
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
//# sourceMappingURL=apprunner-connection.d.ts.map