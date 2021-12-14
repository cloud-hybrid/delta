import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Lambda
*/
export interface LambdaCodeSigningConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#description LambdaCodeSigningConfig#description}
    */
    readonly description?: string;
    /**
    * allowed_publishers block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#allowed_publishers LambdaCodeSigningConfig#allowed_publishers}
    */
    readonly allowedPublishers: LambdaCodeSigningConfigAllowedPublishers;
    /**
    * policies block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#policies LambdaCodeSigningConfig#policies}
    */
    readonly policies?: LambdaCodeSigningConfigPolicies;
}
export interface LambdaCodeSigningConfigAllowedPublishers {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#signing_profile_version_arns LambdaCodeSigningConfig#signing_profile_version_arns}
    */
    readonly signingProfileVersionArns: string[];
}
export declare function lambdaCodeSigningConfigAllowedPublishersToTerraform(struct?: LambdaCodeSigningConfigAllowedPublishersOutputReference | LambdaCodeSigningConfigAllowedPublishers): any;
export declare class LambdaCodeSigningConfigAllowedPublishersOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaCodeSigningConfigAllowedPublishers | undefined;
    set internalValue(value: LambdaCodeSigningConfigAllowedPublishers | undefined);
    private _signingProfileVersionArns?;
    get signingProfileVersionArns(): string[];
    set signingProfileVersionArns(value: string[]);
    get signingProfileVersionArnsInput(): string[];
}
export interface LambdaCodeSigningConfigPolicies {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html#untrusted_artifact_on_deployment LambdaCodeSigningConfig#untrusted_artifact_on_deployment}
    */
    readonly untrustedArtifactOnDeployment: string;
}
export declare function lambdaCodeSigningConfigPoliciesToTerraform(struct?: LambdaCodeSigningConfigPoliciesOutputReference | LambdaCodeSigningConfigPolicies): any;
export declare class LambdaCodeSigningConfigPoliciesOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): LambdaCodeSigningConfigPolicies | undefined;
    set internalValue(value: LambdaCodeSigningConfigPolicies | undefined);
    private _untrustedArtifactOnDeployment?;
    get untrustedArtifactOnDeployment(): string;
    set untrustedArtifactOnDeployment(value: string);
    get untrustedArtifactOnDeploymentInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html aws_lambda_code_signing_config}
*/
export declare class LambdaCodeSigningConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lambda_code_signing_config.html aws_lambda_code_signing_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options LambdaCodeSigningConfigConfig
    */
    constructor(scope: Construct, id: string, config: LambdaCodeSigningConfigConfig);
    get arn(): string;
    get configId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    get lastModified(): string;
    private _allowedPublishers;
    get allowedPublishers(): LambdaCodeSigningConfigAllowedPublishersOutputReference;
    putAllowedPublishers(value: LambdaCodeSigningConfigAllowedPublishers): void;
    get allowedPublishersInput(): LambdaCodeSigningConfigAllowedPublishers;
    private _policies;
    get policies(): LambdaCodeSigningConfigPoliciesOutputReference;
    putPolicies(value: LambdaCodeSigningConfigPolicies): void;
    resetPolicies(): void;
    get policiesInput(): LambdaCodeSigningConfigPolicies;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=lambda-code-signing-config.d.ts.map