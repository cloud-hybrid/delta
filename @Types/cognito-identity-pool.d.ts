import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Cognito
*/
export interface CognitoIdentityPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#allow_classic_flow CognitoIdentityPool#allow_classic_flow}
    */
    readonly allowClassicFlow?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#allow_unauthenticated_identities CognitoIdentityPool#allow_unauthenticated_identities}
    */
    readonly allowUnauthenticatedIdentities?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#developer_provider_name CognitoIdentityPool#developer_provider_name}
    */
    readonly developerProviderName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#identity_pool_name CognitoIdentityPool#identity_pool_name}
    */
    readonly identityPoolName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#openid_connect_provider_arns CognitoIdentityPool#openid_connect_provider_arns}
    */
    readonly openidConnectProviderArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#saml_provider_arns CognitoIdentityPool#saml_provider_arns}
    */
    readonly samlProviderArns?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#supported_login_providers CognitoIdentityPool#supported_login_providers}
    */
    readonly supportedLoginProviders?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#tags CognitoIdentityPool#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#tags_all CognitoIdentityPool#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * cognito_identity_providers block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#cognito_identity_providers CognitoIdentityPool#cognito_identity_providers}
    */
    readonly cognitoIdentityProviders?: CognitoIdentityPoolCognitoIdentityProviders[];
}
export interface CognitoIdentityPoolCognitoIdentityProviders {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#client_id CognitoIdentityPool#client_id}
    */
    readonly clientId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#provider_name CognitoIdentityPool#provider_name}
    */
    readonly providerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html#server_side_token_check CognitoIdentityPool#server_side_token_check}
    */
    readonly serverSideTokenCheck?: boolean | cdktf.IResolvable;
}
export declare function cognitoIdentityPoolCognitoIdentityProvidersToTerraform(struct?: CognitoIdentityPoolCognitoIdentityProviders): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html aws_cognito_identity_pool}
*/
export declare class CognitoIdentityPool extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_pool.html aws_cognito_identity_pool} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoIdentityPoolConfig
    */
    constructor(scope: Construct, id: string, config: CognitoIdentityPoolConfig);
    private _allowClassicFlow?;
    get allowClassicFlow(): boolean | cdktf.IResolvable;
    set allowClassicFlow(value: boolean | cdktf.IResolvable);
    resetAllowClassicFlow(): void;
    get allowClassicFlowInput(): boolean | cdktf.IResolvable;
    private _allowUnauthenticatedIdentities?;
    get allowUnauthenticatedIdentities(): boolean | cdktf.IResolvable;
    set allowUnauthenticatedIdentities(value: boolean | cdktf.IResolvable);
    resetAllowUnauthenticatedIdentities(): void;
    get allowUnauthenticatedIdentitiesInput(): boolean | cdktf.IResolvable;
    get arn(): string;
    private _developerProviderName?;
    get developerProviderName(): string;
    set developerProviderName(value: string);
    resetDeveloperProviderName(): void;
    get developerProviderNameInput(): string;
    get id(): string;
    private _identityPoolName?;
    get identityPoolName(): string;
    set identityPoolName(value: string);
    get identityPoolNameInput(): string;
    private _openidConnectProviderArns?;
    get openidConnectProviderArns(): string[];
    set openidConnectProviderArns(value: string[]);
    resetOpenidConnectProviderArns(): void;
    get openidConnectProviderArnsInput(): string[];
    private _samlProviderArns?;
    get samlProviderArns(): string[];
    set samlProviderArns(value: string[]);
    resetSamlProviderArns(): void;
    get samlProviderArnsInput(): string[];
    private _supportedLoginProviders?;
    get supportedLoginProviders(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set supportedLoginProviders(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetSupportedLoginProviders(): void;
    get supportedLoginProvidersInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
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
    private _cognitoIdentityProviders?;
    get cognitoIdentityProviders(): CognitoIdentityPoolCognitoIdentityProviders[];
    set cognitoIdentityProviders(value: CognitoIdentityPoolCognitoIdentityProviders[]);
    resetCognitoIdentityProviders(): void;
    get cognitoIdentityProvidersInput(): CognitoIdentityPoolCognitoIdentityProviders[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cognito-identity-pool.d.ts.map