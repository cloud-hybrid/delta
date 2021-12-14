import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodeDeploy
*/
export interface CodedeployAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html#compute_platform CodedeployApp#compute_platform}
    */
    readonly computePlatform?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html#name CodedeployApp#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html#tags CodedeployApp#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html#tags_all CodedeployApp#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html aws_codedeploy_app}
*/
export declare class CodedeployApp extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codedeploy_app.html aws_codedeploy_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodedeployAppConfig
    */
    constructor(scope: Construct, id: string, config: CodedeployAppConfig);
    get applicationId(): string;
    get arn(): string;
    private _computePlatform?;
    get computePlatform(): string;
    set computePlatform(value: string);
    resetComputePlatform(): void;
    get computePlatformInput(): string;
    get githubAccountName(): string;
    get id(): string;
    get linkedToGithub(): any;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
//# sourceMappingURL=codedeploy-app.d.ts.map