import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Amplify
*/
export interface AmplifyAppConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#access_token AmplifyApp#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#auto_branch_creation_patterns AmplifyApp#auto_branch_creation_patterns}
    */
    readonly autoBranchCreationPatterns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#basic_auth_credentials AmplifyApp#basic_auth_credentials}
    */
    readonly basicAuthCredentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#build_spec AmplifyApp#build_spec}
    */
    readonly buildSpec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#description AmplifyApp#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_auto_branch_creation AmplifyApp#enable_auto_branch_creation}
    */
    readonly enableAutoBranchCreation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_basic_auth AmplifyApp#enable_basic_auth}
    */
    readonly enableBasicAuth?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_branch_auto_build AmplifyApp#enable_branch_auto_build}
    */
    readonly enableBranchAutoBuild?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_branch_auto_deletion AmplifyApp#enable_branch_auto_deletion}
    */
    readonly enableBranchAutoDeletion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#environment_variables AmplifyApp#environment_variables}
    */
    readonly environmentVariables?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#iam_service_role_arn AmplifyApp#iam_service_role_arn}
    */
    readonly iamServiceRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#name AmplifyApp#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#oauth_token AmplifyApp#oauth_token}
    */
    readonly oauthToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#platform AmplifyApp#platform}
    */
    readonly platform?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#repository AmplifyApp#repository}
    */
    readonly repository?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#tags AmplifyApp#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#tags_all AmplifyApp#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * auto_branch_creation_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#auto_branch_creation_config AmplifyApp#auto_branch_creation_config}
    */
    readonly autoBranchCreationConfig?: AmplifyAppAutoBranchCreationConfig;
    /**
    * custom_rule block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#custom_rule AmplifyApp#custom_rule}
    */
    readonly customRule?: AmplifyAppCustomRule[];
}
export declare class AmplifyAppProductionBranch extends cdktf.ComplexComputedList {
    get branchName(): string;
    get lastDeployTime(): string;
    get status(): string;
    get thumbnailUrl(): string;
}
export interface AmplifyAppAutoBranchCreationConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#basic_auth_credentials AmplifyApp#basic_auth_credentials}
    */
    readonly basicAuthCredentials?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#build_spec AmplifyApp#build_spec}
    */
    readonly buildSpec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_auto_build AmplifyApp#enable_auto_build}
    */
    readonly enableAutoBuild?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_basic_auth AmplifyApp#enable_basic_auth}
    */
    readonly enableBasicAuth?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_performance_mode AmplifyApp#enable_performance_mode}
    */
    readonly enablePerformanceMode?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#enable_pull_request_preview AmplifyApp#enable_pull_request_preview}
    */
    readonly enablePullRequestPreview?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#environment_variables AmplifyApp#environment_variables}
    */
    readonly environmentVariables?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#framework AmplifyApp#framework}
    */
    readonly framework?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#pull_request_environment_name AmplifyApp#pull_request_environment_name}
    */
    readonly pullRequestEnvironmentName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#stage AmplifyApp#stage}
    */
    readonly stage?: string;
}
export declare function amplifyAppAutoBranchCreationConfigToTerraform(struct?: AmplifyAppAutoBranchCreationConfigOutputReference | AmplifyAppAutoBranchCreationConfig): any;
export declare class AmplifyAppAutoBranchCreationConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): AmplifyAppAutoBranchCreationConfig | undefined;
    set internalValue(value: AmplifyAppAutoBranchCreationConfig | undefined);
    private _basicAuthCredentials?;
    get basicAuthCredentials(): string;
    set basicAuthCredentials(value: string);
    resetBasicAuthCredentials(): void;
    get basicAuthCredentialsInput(): string;
    private _buildSpec?;
    get buildSpec(): string;
    set buildSpec(value: string);
    resetBuildSpec(): void;
    get buildSpecInput(): string;
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
    private _pullRequestEnvironmentName?;
    get pullRequestEnvironmentName(): string;
    set pullRequestEnvironmentName(value: string);
    resetPullRequestEnvironmentName(): void;
    get pullRequestEnvironmentNameInput(): string;
    private _stage?;
    get stage(): string;
    set stage(value: string);
    resetStage(): void;
    get stageInput(): string;
}
export interface AmplifyAppCustomRule {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#condition AmplifyApp#condition}
    */
    readonly condition?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#source AmplifyApp#source}
    */
    readonly source: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#status AmplifyApp#status}
    */
    readonly status?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html#target AmplifyApp#target}
    */
    readonly target: string;
}
export declare function amplifyAppCustomRuleToTerraform(struct?: AmplifyAppCustomRule): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html aws_amplify_app}
*/
export declare class AmplifyApp extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html aws_amplify_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyAppConfig
    */
    constructor(scope: Construct, id: string, config: AmplifyAppConfig);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    resetAccessToken(): void;
    get accessTokenInput(): string;
    get arn(): string;
    private _autoBranchCreationPatterns?;
    get autoBranchCreationPatterns(): string[];
    set autoBranchCreationPatterns(value: string[]);
    resetAutoBranchCreationPatterns(): void;
    get autoBranchCreationPatternsInput(): string[];
    private _basicAuthCredentials?;
    get basicAuthCredentials(): string;
    set basicAuthCredentials(value: string);
    resetBasicAuthCredentials(): void;
    get basicAuthCredentialsInput(): string;
    private _buildSpec?;
    get buildSpec(): string;
    set buildSpec(value: string);
    resetBuildSpec(): void;
    get buildSpecInput(): string;
    get defaultDomain(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _enableAutoBranchCreation?;
    get enableAutoBranchCreation(): boolean | cdktf.IResolvable;
    set enableAutoBranchCreation(value: boolean | cdktf.IResolvable);
    resetEnableAutoBranchCreation(): void;
    get enableAutoBranchCreationInput(): boolean | cdktf.IResolvable;
    private _enableBasicAuth?;
    get enableBasicAuth(): boolean | cdktf.IResolvable;
    set enableBasicAuth(value: boolean | cdktf.IResolvable);
    resetEnableBasicAuth(): void;
    get enableBasicAuthInput(): boolean | cdktf.IResolvable;
    private _enableBranchAutoBuild?;
    get enableBranchAutoBuild(): boolean | cdktf.IResolvable;
    set enableBranchAutoBuild(value: boolean | cdktf.IResolvable);
    resetEnableBranchAutoBuild(): void;
    get enableBranchAutoBuildInput(): boolean | cdktf.IResolvable;
    private _enableBranchAutoDeletion?;
    get enableBranchAutoDeletion(): boolean | cdktf.IResolvable;
    set enableBranchAutoDeletion(value: boolean | cdktf.IResolvable);
    resetEnableBranchAutoDeletion(): void;
    get enableBranchAutoDeletionInput(): boolean | cdktf.IResolvable;
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
    private _iamServiceRoleArn?;
    get iamServiceRoleArn(): string;
    set iamServiceRoleArn(value: string);
    resetIamServiceRoleArn(): void;
    get iamServiceRoleArnInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _oauthToken?;
    get oauthToken(): string;
    set oauthToken(value: string);
    resetOauthToken(): void;
    get oauthTokenInput(): string;
    private _platform?;
    get platform(): string;
    set platform(value: string);
    resetPlatform(): void;
    get platformInput(): string;
    productionBranch(index: string): AmplifyAppProductionBranch;
    private _repository?;
    get repository(): string;
    set repository(value: string);
    resetRepository(): void;
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
    private _autoBranchCreationConfig;
    get autoBranchCreationConfig(): AmplifyAppAutoBranchCreationConfigOutputReference;
    putAutoBranchCreationConfig(value: AmplifyAppAutoBranchCreationConfig): void;
    resetAutoBranchCreationConfig(): void;
    get autoBranchCreationConfigInput(): AmplifyAppAutoBranchCreationConfig;
    private _customRule?;
    get customRule(): AmplifyAppCustomRule[];
    set customRule(value: AmplifyAppCustomRule[]);
    resetCustomRule(): void;
    get customRuleInput(): AmplifyAppCustomRule[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=amplify-app.d.ts.map