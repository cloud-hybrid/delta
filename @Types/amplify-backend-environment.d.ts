import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Amplify
*/
export interface AmplifyBackendEnvironmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html#app_id AmplifyBackendEnvironment#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html#deployment_artifacts AmplifyBackendEnvironment#deployment_artifacts}
    */
    readonly deploymentArtifacts?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html#environment_name AmplifyBackendEnvironment#environment_name}
    */
    readonly environmentName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html#stack_name AmplifyBackendEnvironment#stack_name}
    */
    readonly stackName?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html aws_amplify_backend_environment}
*/
export declare class AmplifyBackendEnvironment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_backend_environment.html aws_amplify_backend_environment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyBackendEnvironmentConfig
    */
    constructor(scope: Construct, id: string, config: AmplifyBackendEnvironmentConfig);
    private _appId?;
    get appId(): string;
    set appId(value: string);
    get appIdInput(): string;
    get arn(): string;
    private _deploymentArtifacts?;
    get deploymentArtifacts(): string;
    set deploymentArtifacts(value: string);
    resetDeploymentArtifacts(): void;
    get deploymentArtifactsInput(): string;
    private _environmentName?;
    get environmentName(): string;
    set environmentName(value: string);
    get environmentNameInput(): string;
    get id(): string;
    private _stackName?;
    get stackName(): string;
    set stackName(value: string);
    resetStackName(): void;
    get stackNameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=amplify-backend-environment.d.ts.map