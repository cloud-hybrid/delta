// generated from terraform resource schema
import * as cdktf from 'cdktf';
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html aws_amplify_backend_environment}
*/
export class AmplifyBackendEnvironment extends cdktf.TerraformResource {
    // =================
    // STATIC PROPERTIES
    // =================
    static tfResourceType = "aws_amplify_backend_environment";
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html aws_amplify_backend_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyBackendEnvironmentConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'aws_amplify_backend_environment',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._appId = config.appId;
        this._deploymentArtifacts = config.deploymentArtifacts;
        this._environmentName = config.environmentName;
        this._stackName = config.stackName;
    }
    // ==========
    // ATTRIBUTES
    // ==========
    // app_id - computed: false, optional: false, required: true
    _appId;
    get appId() {
        return this.getStringAttribute('app_id');
    }
    set appId(value) {
        this._appId = value;
    }
    // Temporarily expose input value. Use with caution.
    get appIdInput() {
        return this._appId;
    }
    // arn - computed: true, optional: false, required: false
    get arn() {
        return this.getStringAttribute('arn');
    }
    // deployment_artifacts - computed: true, optional: true, required: false
    _deploymentArtifacts;
    get deploymentArtifacts() {
        return this.getStringAttribute('deployment_artifacts');
    }
    set deploymentArtifacts(value) {
        this._deploymentArtifacts = value;
    }
    resetDeploymentArtifacts() {
        this._deploymentArtifacts = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get deploymentArtifactsInput() {
        return this._deploymentArtifacts;
    }
    // environment_name - computed: false, optional: false, required: true
    _environmentName;
    get environmentName() {
        return this.getStringAttribute('environment_name');
    }
    set environmentName(value) {
        this._environmentName = value;
    }
    // Temporarily expose input value. Use with caution.
    get environmentNameInput() {
        return this._environmentName;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    // stack_name - computed: true, optional: true, required: false
    _stackName;
    get stackName() {
        return this.getStringAttribute('stack_name');
    }
    set stackName(value) {
        this._stackName = value;
    }
    resetStackName() {
        this._stackName = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get stackNameInput() {
        return this._stackName;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            app_id: cdktf.stringToTerraform(this._appId),
            deployment_artifacts: cdktf.stringToTerraform(this._deploymentArtifacts),
            environment_name: cdktf.stringToTerraform(this._environmentName),
            stack_name: cdktf.stringToTerraform(this._stackName),
        };
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW1wbGlmeS1iYWNrZW5kLWVudmlyb25tZW50LmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJhbXBsaWZ5LWJhY2tlbmQtZW52aXJvbm1lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMkNBQTJDO0FBRzNDLE9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTyxDQUFDO0FBd0IvQjs7RUFFRTtBQUNGLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxLQUFLLENBQUMsaUJBQWlCO0lBRXBFLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ2IsTUFBTSxDQUFVLGNBQWMsR0FBVyxpQ0FBaUMsQ0FBQztJQUVsRixjQUFjO0lBQ2QsY0FBYztJQUNkLGNBQWM7SUFFZDs7Ozs7O01BTUU7SUFDRixZQUFtQixLQUFnQixFQUFFLEVBQVUsRUFBRSxNQUF1QztRQUN0RixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGlDQUFpQztZQUN4RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzNCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUM7UUFDdkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUM7UUFDL0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGFBQWE7SUFFYiw0REFBNEQ7SUFDcEQsTUFB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