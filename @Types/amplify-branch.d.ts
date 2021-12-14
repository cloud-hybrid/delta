import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Amplify
*/
export interface AmplifyBranchConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#app_id AmplifyBranch#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#backend_environment_arn AmplifyBranch#backend_environment_arn}
    */
    readonly backendEnvironmentArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#basic_auth_credentials AmplifyBranch#basic_auth_credentials}
    */
    readonly basicAuthCredentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#branch_name AmplifyBranch#branch_name}
    */
    readonly branchName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#description AmplifyBranch#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#display_name AmplifyBranch#display_name}
    */
    readonly displayName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#enable_auto_build AmplifyBranch#enable_auto_build}
    */
    readonly enableAutoBuild?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#enable_basic_auth AmplifyBranch#enable_basic_auth}
    */
    readonly enableBasicAuth?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#enable_notification AmplifyBranch#enable_notification}
    */
    readonly enableNotification?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#enable_performance_mode AmplifyBranch#enable_performance_mode}
    */
    readonly enablePerformanceMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#enable_pull_request_preview AmplifyBranch#enable_pull_request_preview}
    */
    readonly enablePullRequestPreview?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#environment_variables AmplifyBranch#environment_variables}
    */
    readonly environmentVariables?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#framework AmplifyBranch#framework}
    */
    readonly framework?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#pull_request_environment_name AmplifyBranch#pull_request_environment_name}
    */
    readonly pullRequestEnvironmentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#stage AmplifyBranch#stage}
    */
    readonly stage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#tags AmplifyBranch#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#tags_all AmplifyBranch#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html#ttl AmplifyBranch#ttl}
    */
    readonly ttl?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html aws_amplify_branch}
*/
export declare class AmplifyBranch extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_branch.html aws_amplify_branch} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyBranchConfig
    */
    constructor(scope: Construct, id: string, config: AmplifyBranchConfig);
    private _appId?;
    get appId(): string;
    set appId(value: string);
    get appIdInput(): string;
    get arn(): string;
    get associatedResources(): string[];
    private _backendEnvironmentArn?;
    get backendEnvironmentArn(): string;
    set backendEnvironmentArn(value: string);
    resetBackendEnvironmentArn(): void;
    get backendEnvironmentArnInput(): string;
    private _basicAuthCredentials?;
    get basicAuthCredentials(): string;
    set basicAuthCredentials(value: string);
    resetBasicAuthCredentials(): void;
    get basicAuthCredentialsInput(): string;
    private _branchName?;
    get branchName(): string;
    set branchName(value: string);
    get branchNameInput(): string;
    get customDomains(): string[];
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get destinationBranch(): string;
    private _displayName?;
    get displayName(): string;
    set displayName(value: string);
    resetDisplayName(): void;
    get displayNameInput(): string;
    private _enableAutoBuild?;
    get enableAutoBuild(): boolean | cdktf.IResolvable;
    set enableAutoBuild(value: boolean | cdktf.IResolvable);
    resetEnableAutoBuild(): void;
    get enableAutoBuildInput(): boolean | cdktf.IResolvable;
    private _enableBasicAuth?;
    get enableBasicAuth(): boolean | cdktf.IResolvable;
    set enableBasicAuth(value: boolean | cdktf.IResolvable);
    resetEnableBasicAuth(): void;
    get enableBasicAuthInput(): boolean | cdktf.IResolvable;
    private _enableNotification?;
    get enableNotification(): boolean | cdktf.IResolvable;
    set enableNotification(value: boolean | cdktf.IResolvable);
    resetEnableNotification(): void;
    get enableNotificationInput(): boolean | cdktf.IResolvable;
    private _enablePerformanceMode?;
    get enablePerformanceMode(): boolean | cdktf.IResolvable;
    set enablePerformanceMode(value: boolean | cdktf.IResolvable);
    resetEnablePerformanceMode(): void;
    get enablePerformanceModeInput(): boolean | cdktf.IResolvable;
    private _enablePullRequestPreview?;
    get enablePullRequestPreview(): boolean | cdktf.IResolvable;
    set enablePullRequestPreview(value: boolean | cdktf.IResolvable);
    resetEnablePullRequestPreview(): void;
    get enablePullRequestPreviewInput(): boolean | cdktf.IResolvable;
    private _environmentVariables?;
    get environmentVariables(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set environmentVariables(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetEnvironmentVariables(): void;
    get environmentVariablesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _framework?;
    get framework(): string;
    set framework(value: string);
    resetFramework(): void;
    get frameworkInput(): string;
    get id(): string;
    private _pullRequestEnvironmentName?;
    get pullRequestEnvironmentName(): string;
    set pullRequestEnvironmentName(value: string);
    resetPullRequestEnvironmentName(): void;
    get pullRequestEnvironmentNameInput(): string;
    get sourceBranch(): string;
    private _stage?;
    get stage(): string;
    set stage(value: string);
    resetStage(): void;
    get stageInput(): string;
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
    private _ttl?;
    get ttl(): string;
    set ttl(value: string);
    resetTtl(): void;
    get ttlInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=amplify-branch.d.ts.map