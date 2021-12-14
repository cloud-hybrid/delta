// generated from terraform resource schema
import * as cdktf from 'cdktf';
export class AmplifyAppProductionBranch extends cdktf.ComplexComputedList {
    // branch_name - computed: true, optional: false, required: false
    get branchName() {
        return this.getStringAttribute('branch_name');
    }
    // last_deploy_time - computed: true, optional: false, required: false
    get lastDeployTime() {
        return this.getStringAttribute('last_deploy_time');
    }
    // status - computed: true, optional: false, required: false
    get status() {
        return this.getStringAttribute('status');
    }
    // thumbnail_url - computed: true, optional: false, required: false
    get thumbnailUrl() {
        return this.getStringAttribute('thumbnail_url');
    }
}
export function amplifyAppAutoBranchCreationConfigToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        basic_auth_credentials: cdktf.stringToTerraform(struct.basicAuthCredentials),
        build_spec: cdktf.stringToTerraform(struct.buildSpec),
        enable_auto_build: cdktf.booleanToTerraform(struct.enableAutoBuild),
        enable_basic_auth: cdktf.booleanToTerraform(struct.enableBasicAuth),
        enable_performance_mode: cdktf.booleanToTerraform(struct.enablePerformanceMode),
        enable_pull_request_preview: cdktf.booleanToTerraform(struct.enablePullRequestPreview),
        environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(struct.environmentVariables),
        framework: cdktf.stringToTerraform(struct.framework),
        pull_request_environment_name: cdktf.stringToTerraform(struct.pullRequestEnvironmentName),
        stage: cdktf.stringToTerraform(struct.stage),
    };
}
export class AmplifyAppAutoBranchCreationConfigOutputReference extends cdktf.ComplexObject {
    isEmptyObject = false;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource, terraformAttribute, isSingleItem) {
        super(terraformResource, terraformAttribute, isSingleItem);
    }
    get internalValue() {
        let hasAnyValues = this.isEmptyObject;
        const internalValueResult = {};
        if (this._basicAuthCredentials) {
            hasAnyValues = true;
            internalValueResult.basicAuthCredentials = this._basicAuthCredentials;
        }
        if (this._buildSpec) {
            hasAnyValues = true;
            internalValueResult.buildSpec = this._buildSpec;
        }
        if (this._enableAutoBuild) {
            hasAnyValues = true;
            internalValueResult.enableAutoBuild = this._enableAutoBuild;
        }
        if (this._enableBasicAuth) {
            hasAnyValues = true;
            internalValueResult.enableBasicAuth = this._enableBasicAuth;
        }
        if (this._enablePerformanceMode) {
            hasAnyValues = true;
            internalValueResult.enablePerformanceMode = this._enablePerformanceMode;
        }
        if (this._enablePullRequestPreview) {
            hasAnyValues = true;
            internalValueResult.enablePullRequestPreview = this._enablePullRequestPreview;
        }
        if (this._environmentVariables) {
            hasAnyValues = true;
            internalValueResult.environmentVariables = this._environmentVariables;
        }
        if (this._framework) {
            hasAnyValues = true;
            internalValueResult.framework = this._framework;
        }
        if (this._pullRequestEnvironmentName) {
            hasAnyValues = true;
            internalValueResult.pullRequestEnvironmentName = this._pullRequestEnvironmentName;
        }
        if (this._stage) {
            hasAnyValues = true;
            internalValueResult.stage = this._stage;
        }
        return hasAnyValues ? internalValueResult : undefined;
    }
    set internalValue(value) {
        if (value === undefined) {
            this.isEmptyObject = false;
            this._basicAuthCredentials = undefined;
            this._buildSpec = undefined;
            this._enableAutoBuild = undefined;
            this._enableBasicAuth = undefined;
            this._enablePerformanceMode = undefined;
            this._enablePullRequestPreview = undefined;
            this._environmentVariables = undefined;
            this._framework = undefined;
            this._pullRequestEnvironmentName = undefined;
            this._stage = undefined;
        }
        else {
            this.isEmptyObject = Object.keys(value).length === 0;
            this._basicAuthCredentials = value.basicAuthCredentials;
            this._buildSpec = value.buildSpec;
            this._enableAutoBuild = value.enableAutoBuild;
            this._enableBasicAuth = value.enableBasicAuth;
            this._enablePerformanceMode = value.enablePerformanceMode;
            this._enablePullRequestPreview = value.enablePullRequestPreview;
            this._environmentVariables = value.environmentVariables;
            this._framework = value.framework;
            this._pullRequestEnvironmentName = value.pullRequestEnvironmentName;
            this._stage = value.stage;
        }
    }
    // basic_auth_credentials - computed: false, optional: true, required: false
    _basicAuthCredentials;
    get basicAuthCredentials() {
        return this.getStringAttribute('basic_auth_credentials');
    }
    set basicAuthCredentials(value) {
        this._basicAuthCredentials = value;
    }
    resetBasicAuthCredentials() {
        this._basicAuthCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get basicAuthCredentialsInput() {
        return this._basicAuthCredentials;
    }
    // build_spec - computed: false, optional: true, required: false
    _buildSpec;
    get buildSpec() {
        return this.getStringAttribute('build_spec');
    }
    set buildSpec(value) {
        this._buildSpec = value;
    }
    resetBuildSpec() {
        this._buildSpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildSpecInput() {
        return this._buildSpec;
    }
    // enable_auto_build - computed: false, optional: true, required: false
    _enableAutoBuild;
    get enableAutoBuild() {
        return this.getBooleanAttribute('enable_auto_build');
    }
    set enableAutoBuild(value) {
        this._enableAutoBuild = value;
    }
    resetEnableAutoBuild() {
        this._enableAutoBuild = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableAutoBuildInput() {
        return this._enableAutoBuild;
    }
    // enable_basic_auth - computed: false, optional: true, required: false
    _enableBasicAuth;
    get enableBasicAuth() {
        return this.getBooleanAttribute('enable_basic_auth');
    }
    set enableBasicAuth(value) {
        this._enableBasicAuth = value;
    }
    resetEnableBasicAuth() {
        this._enableBasicAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableBasicAuthInput() {
        return this._enableBasicAuth;
    }
    // enable_performance_mode - computed: false, optional: true, required: false
    _enablePerformanceMode;
    get enablePerformanceMode() {
        return this.getBooleanAttribute('enable_performance_mode');
    }
    set enablePerformanceMode(value) {
        this._enablePerformanceMode = value;
    }
    resetEnablePerformanceMode() {
        this._enablePerformanceMode = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enablePerformanceModeInput() {
        return this._enablePerformanceMode;
    }
    // enable_pull_request_preview - computed: false, optional: true, required: false
    _enablePullRequestPreview;
    get enablePullRequestPreview() {
        return this.getBooleanAttribute('enable_pull_request_preview');
    }
    set enablePullRequestPreview(value) {
        this._enablePullRequestPreview = value;
    }
    resetEnablePullRequestPreview() {
        this._enablePullRequestPreview = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enablePullRequestPreviewInput() {
        return this._enablePullRequestPreview;
    }
    // environment_variables - computed: false, optional: true, required: false
    _environmentVariables;
    get environmentVariables() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('environment_variables');
    }
    set environmentVariables(value) {
        this._environmentVariables = value;
    }
    resetEnvironmentVariables() {
        this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentVariablesInput() {
        return this._environmentVariables;
    }
    // framework - computed: false, optional: true, required: false
    _framework;
    get framework() {
        return this.getStringAttribute('framework');
    }
    set framework(value) {
        this._framework = value;
    }
    resetFramework() {
        this._framework = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get frameworkInput() {
        return this._framework;
    }
    // pull_request_environment_name - computed: false, optional: true, required: false
    _pullRequestEnvironmentName;
    get pullRequestEnvironmentName() {
        return this.getStringAttribute('pull_request_environment_name');
    }
    set pullRequestEnvironmentName(value) {
        this._pullRequestEnvironmentName = value;
    }
    resetPullRequestEnvironmentName() {
        this._pullRequestEnvironmentName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get pullRequestEnvironmentNameInput() {
        return this._pullRequestEnvironmentName;
    }
    // stage - computed: false, optional: true, required: false
    _stage;
    get stage() {
        return this.getStringAttribute('stage');
    }
    set stage(value) {
        this._stage = value;
    }
    resetStage() {
        this._stage = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stageInput() {
        return this._stage;
    }
}
export function amplifyAppCustomRuleToTerraform(struct) {
    if (!cdktf.canInspect(struct)) {
        return struct;
    }
    if (cdktf.isComplexElement(struct)) {
        throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
    }
    return {
        condition: cdktf.stringToTerraform(struct.condition),
        source: cdktf.stringToTerraform(struct.source),
        status: cdktf.stringToTerraform(struct.status),
        target: cdktf.stringToTerraform(struct.target),
    };
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html aws_amplify_app}
*/
export class AmplifyApp extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_amplify_app";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_app.html aws_amplify_app} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyAppConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_amplify_app',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._accessToken = config.accessToken;
        this._autoBranchCreationPatterns = config.autoBranchCreationPatterns;
        this._basicAuthCredentials = config.basicAuthCredentials;
        this._buildSpec = config.buildSpec;
        this._description = config.description;
        this._enableAutoBranchCreation = config.enableAutoBranchCreation;
        this._enableBasicAuth = config.enableBasicAuth;
        this._enableBranchAutoBuild = config.enableBranchAutoBuild;
        this._enableBranchAutoDeletion = config.enableBranchAutoDeletion;
        this._environmentVariables = config.environmentVariables;
        this._iamServiceRoleArn = config.iamServiceRoleArn;
        this._name = config.name;
        this._oauthToken = config.oauthToken;
        this._platform = config.platform;
        this._repository = config.repository;
        this._tags = config.tags;
        this._tagsAll = config.tagsAll;
        this._autoBranchCreationConfig.internalValue = config.autoBranchCreationConfig;
        this._customRule = config.customRule;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // access_token - computed: false, optional: true, required: false
    _accessToken;
    get accessToken() {
        return this.getStringAttribute('access_token');
    }
    set accessToken(value) {
        this._accessToken = value;
    }
    resetAccessToken() {
        this._accessToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get accessTokenInput() {
        return this._accessToken;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // auto_branch_creation_patterns - computed: false, optional: true, required: false
    _autoBranchCreationPatterns;
    get autoBranchCreationPatterns() {
        return this.getListAttribute('auto_branch_creation_patterns');
    }
    set autoBranchCreationPatterns(value) {
        this._autoBranchCreationPatterns = value;
    }
    resetAutoBranchCreationPatterns() {
        this._autoBranchCreationPatterns = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoBranchCreationPatternsInput() {
        return this._autoBranchCreationPatterns;
    }
    // basic_auth_credentials - computed: false, optional: true, required: false
    _basicAuthCredentials;
    get basicAuthCredentials() {
        return this.getStringAttribute('basic_auth_credentials');
    }
    set basicAuthCredentials(value) {
        this._basicAuthCredentials = value;
    }
    resetBasicAuthCredentials() {
        this._basicAuthCredentials = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get basicAuthCredentialsInput() {
        return this._basicAuthCredentials;
    }
    // build_spec - computed: true, optional: true, required: false
    _buildSpec;
    get buildSpec() {
        return this.getStringAttribute('build_spec');
    }
    set buildSpec(value) {
        this._buildSpec = value;
    }
    resetBuildSpec() {
        this._buildSpec = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get buildSpecInput() {
        return this._buildSpec;
    }
    // default_domain - computed: true, optional: false, required: false
    get defaultDomain() {
        return this.getStringAttribute('default_domain');
    }
    // description - computed: false, optional: true, required: false
    _description;
    get description() {
        return this.getStringAttribute('description');
    }
    set description(value) {
        this._description = value;
    }
    resetDescription() {
        this._description = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get descriptionInput() {
        return this._description;
    }
    // enable_auto_branch_creation - computed: false, optional: true, required: false
    _enableAutoBranchCreation;
    get enableAutoBranchCreation() {
        return this.getBooleanAttribute('enable_auto_branch_creation');
    }
    set enableAutoBranchCreation(value) {
        this._enableAutoBranchCreation = value;
    }
    resetEnableAutoBranchCreation() {
        this._enableAutoBranchCreation = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableAutoBranchCreationInput() {
        return this._enableAutoBranchCreation;
    }
    // enable_basic_auth - computed: false, optional: true, required: false
    _enableBasicAuth;
    get enableBasicAuth() {
        return this.getBooleanAttribute('enable_basic_auth');
    }
    set enableBasicAuth(value) {
        this._enableBasicAuth = value;
    }
    resetEnableBasicAuth() {
        this._enableBasicAuth = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableBasicAuthInput() {
        return this._enableBasicAuth;
    }
    // enable_branch_auto_build - computed: false, optional: true, required: false
    _enableBranchAutoBuild;
    get enableBranchAutoBuild() {
        return this.getBooleanAttribute('enable_branch_auto_build');
    }
    set enableBranchAutoBuild(value) {
        this._enableBranchAutoBuild = value;
    }
    resetEnableBranchAutoBuild() {
        this._enableBranchAutoBuild = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableBranchAutoBuildInput() {
        return this._enableBranchAutoBuild;
    }
    // enable_branch_auto_deletion - computed: false, optional: true, required: false
    _enableBranchAutoDeletion;
    get enableBranchAutoDeletion() {
        return this.getBooleanAttribute('enable_branch_auto_deletion');
    }
    set enableBranchAutoDeletion(value) {
        this._enableBranchAutoDeletion = value;
    }
    resetEnableBranchAutoDeletion() {
        this._enableBranchAutoDeletion = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get enableBranchAutoDeletionInput() {
        return this._enableBranchAutoDeletion;
    }
    // environment_variables - computed: false, optional: true, required: false
    _environmentVariables;
    get environmentVariables() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('environment_variables');
    }
    set environmentVariables(value) {
        this._environmentVariables = value;
    }
    resetEnvironmentVariables() {
        this._environmentVariables = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get environmentVariablesInput() {
        return this._environmentVariables;
    }
    // iam_service_role_arn - computed: false, optional: true, required: false
    _iamServiceRoleArn;
    get iamServiceRoleArn() {
        return this.getStringAttribute('iam_service_role_arn');
    }
    set iamServiceRoleArn(value) {
        this._iamServiceRoleArn = value;
    }
    resetIamServiceRoleArn() {
        this._iamServiceRoleArn = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get iamServiceRoleArnInput() {
        return this._iamServiceRoleArn;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // name - computed: false, optional: false, required: true
    _name;
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // oauth_token - computed: false, optional: true, required: false
    _oauthToken;
    get oauthToken() {
        return this.getStringAttribute('oauth_token');
    }
    set oauthToken(value) {
        this._oauthToken = value;
    }
    resetOauthToken() {
        this._oauthToken = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get oauthTokenInput() {
        return this._oauthToken;
    }
    // platform - computed: false, optional: true, required: false
    _platform;
    get platform() {
        return this.getStringAttribute('platform');
    }
    set platform(value) {
        this._platform = value;
    }
    resetPlatform() {
        this._platform = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get platformInput() {
        return this._platform;
    }
    // production_branch - computed: true, optional: false, required: false
    productionBranch(index) {
        return new AmplifyAppProductionBranch(this, 'production_branch', index);
    }
    // repository - computed: false, optional: true, required: false
    _repository;
    get repository() {
        return this.getStringAttribute('repository');
    }
    set repository(value) {
        this._repository = value;
    }
    resetRepository() {
        this._repository = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get repositoryInput() {
        return this._repository;
    }
    // tags - computed: false, optional: true, required: false
    _tags;
    get tags() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags');
    }
    set tags(value) {
        this._tags = value;
    }
    resetTags() {
        this._tags = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsInput() {
        return this._tags;
    }
    // tags_all - computed: true, optional: true, required: false
    _tagsAll;
    get tagsAll() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('tags_all');
    }
    set tagsAll(value) {
        this._tagsAll = value;
    }
    resetTagsAll() {
        this._tagsAll = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get tagsAllInput() {
        return this._tagsAll;
    }
    // auto_branch_creation_config - computed: false, optional: true, required: false
    _autoBranchCreationConfig = new AmplifyAppAutoBranchCreationConfigOutputReference(this, "auto_branch_creation_config", true);
    get autoBranchCreationConfig() {
        return this._autoBranchCreationConfig;
    }
    putAutoBranchCreationConfig(value) {
        this._autoBranchCreationConfig.internalValue = value;
    }
    resetAutoBranchCreationConfig() {
        this._autoBranchCreationConfig.internalValue = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get autoBranchCreationConfigInput() {
        return this._autoBranchCreationConfig.internalValue;
    }
    // custom_rule - computed: false, optional: true, required: false
    _customRule;
    get customRule() {
        // Getting the computed value is not yet implemented
        return this.interpolationForAttribute('custom_rule');
    }
    set customRule(value) {
        this._customRule = value;
    }
    resetCustomRule() {
        this._customRule = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get customRuleInput() {
        return this._customRule;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            access_token: cdktf.stringToTerraform(this._accessToken),
            auto_branch_creation_patterns: cdktf.listMapper(cdktf.stringToTerraform)(this._autoBranchCreationPatterns),
            basic_auth_credentials: cdktf.stringToTerraform(this._basicAuthCredentials),
            build_spec: cdktf.stringToTerraform(this._buildSpec),
            description: cdktf.stringToTerraform(this._description),
            enable_auto_branch_creation: cdktf.booleanToTerraform(this._enableAutoBranchCreation),
            enable_basic_auth: cdktf.booleanToTerraform(this._enableBasicAuth),
            enable_branch_auto_build: cdktf.booleanToTerraform(this._enableBranchAutoBuild),
            enable_branch_auto_deletion: cdktf.booleanToTerraform(this._enableBranchAutoDeletion),
            environment_variables: cdktf.hashMapper(cdktf.anyToTerraform)(this._environmentVariables),
            iam_service_role_arn: cdktf.stringToTerraform(this._iamServiceRoleArn),
            name: cdktf.stringToTerraform(this._name),
            oauth_token: cdktf.stringToTerraform(this._oauthToken),
            platform: cdktf.stringToTerraform(this._platform),
            repository: cdktf.stringToTerraform(this._repository),
            tags: cdktf.hashMapper(cdktf.anyToTerraform)(this._tags),
            tags_all: cdktf.hashMapper(cdktf.anyToTerraform)(this._tagsAll),
            auto_branch_creation_config: amplifyAppAutoBranchCreationConfigToTerraform(this._autoBranchCreationConfig.internalValue),
            custom_rule: cdktf.listMapper(amplifyAppCustomRuleToTerraform)(this._customRule),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1wbGlmeS1hcHAuanMiLCJzb3VyY2VSb290IjoiLi8iLCJzb3VyY2VzIjpbImFtcGxpZnktYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJDQUEyQztBQUczQyxPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU8sQ0FBQztBQXVGL0IsTUFBTSxPQUFPLDBCQUEyQixTQUFRLEtBQUssQ0FBQyxtQkFBbUI7SUFFdkUsaUVBQWlFO0lBQ2pFLElBQVcsVUFBVTtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsc0VBQXNFO0lBQ3RFLElBQVcsY0FBYztRQUN2QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRCw0REFBNEQ7SUFDNUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELG1FQUFtRTtJQUNuRSxJQUFXLFlBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUNGO0FBNENELE1BQU0sVUFBVSw2Q0FBNkMsQ0FBQyxNQUErRjtJQUMzSixJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRTtRQUFFLE9BQU8sTUFBTSxDQUFDO0tBQUU7SUFDakQsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDbEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxvSEFBb0gsQ0FBQyxDQUFDO0tBQ3ZJO0lBQ0QsT0FBTztRQUNMLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsb0JBQW9CLENBQUM7UUFDN0UsVUFBVSxFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxNQUFPLENBQUMsU0FBUyxDQUFDO1FBQ3RELGlC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