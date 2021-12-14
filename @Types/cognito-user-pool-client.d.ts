import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Cognito
*/
export interface CognitoUserPoolClientConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#access_token_validity CognitoUserPoolClient#access_token_validity}
    */
    readonly accessTokenValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#allowed_oauth_flows CognitoUserPoolClient#allowed_oauth_flows}
    */
    readonly allowedOauthFlows?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#allowed_oauth_flows_user_pool_client CognitoUserPoolClient#allowed_oauth_flows_user_pool_client}
    */
    readonly allowedOauthFlowsUserPoolClient?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#allowed_oauth_scopes CognitoUserPoolClient#allowed_oauth_scopes}
    */
    readonly allowedOauthScopes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#callback_urls CognitoUserPoolClient#callback_urls}
    */
    readonly callbackUrls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#default_redirect_uri CognitoUserPoolClient#default_redirect_uri}
    */
    readonly defaultRedirectUri?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#enable_token_revocation CognitoUserPoolClient#enable_token_revocation}
    */
    readonly enableTokenRevocation?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#explicit_auth_flows CognitoUserPoolClient#explicit_auth_flows}
    */
    readonly explicitAuthFlows?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#generate_secret CognitoUserPoolClient#generate_secret}
    */
    readonly generateSecret?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#id_token_validity CognitoUserPoolClient#id_token_validity}
    */
    readonly idTokenValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#logout_urls CognitoUserPoolClient#logout_urls}
    */
    readonly logoutUrls?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#name CognitoUserPoolClient#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#prevent_user_existence_errors CognitoUserPoolClient#prevent_user_existence_errors}
    */
    readonly preventUserExistenceErrors?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#read_attributes CognitoUserPoolClient#read_attributes}
    */
    readonly readAttributes?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#refresh_token_validity CognitoUserPoolClient#refresh_token_validity}
    */
    readonly refreshTokenValidity?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#supported_identity_providers CognitoUserPoolClient#supported_identity_providers}
    */
    readonly supportedIdentityProviders?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#user_pool_id CognitoUserPoolClient#user_pool_id}
    */
    readonly userPoolId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#write_attributes CognitoUserPoolClient#write_attributes}
    */
    readonly writeAttributes?: string[];
    /**
    * analytics_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#analytics_configuration CognitoUserPoolClient#analytics_configuration}
    */
    readonly analyticsConfiguration?: CognitoUserPoolClientAnalyticsConfiguration;
    /**
    * token_validity_units block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#token_validity_units CognitoUserPoolClient#token_validity_units}
    */
    readonly tokenValidityUnits?: CognitoUserPoolClientTokenValidityUnits;
}
export interface CognitoUserPoolClientAnalyticsConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#application_arn CognitoUserPoolClient#application_arn}
    */
    readonly applicationArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#application_id CognitoUserPoolClient#application_id}
    */
    readonly applicationId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#external_id CognitoUserPoolClient#external_id}
    */
    readonly externalId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#role_arn CognitoUserPoolClient#role_arn}
    */
    readonly roleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#user_data_shared CognitoUserPoolClient#user_data_shared}
    */
    readonly userDataShared?: boolean | cdktf.IResolvable;
}
export declare function cognitoUserPoolClientAnalyticsConfigurationToTerraform(struct?: CognitoUserPoolClientAnalyticsConfigurationOutputReference | CognitoUserPoolClientAnalyticsConfiguration): any;
export declare class CognitoUserPoolClientAnalyticsConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolClientAnalyticsConfiguration | undefined;
    set internalValue(value: CognitoUserPoolClientAnalyticsConfiguration | undefined);
    private _applicationArn?;
    get applicationArn(): string;
    set applicationArn(value: string);
    resetApplicationArn(): void;
    get applicationArnInput(): string;
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    resetApplicationId(): void;
    get applicationIdInput(): string;
    private _externalId?;
    get externalId(): string;
    set externalId(value: string);
    resetExternalId(): void;
    get externalIdInput(): string;
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    resetRoleArn(): void;
    get roleArnInput(): string;
    private _userDataShared?;
    get userDataShared(): boolean | cdktf.IResolvable;
    set userDataShared(value: boolean | cdktf.IResolvable);
    resetUserDataShared(): void;
    get userDataSharedInput(): boolean | cdktf.IResolvable;
}
export interface CognitoUserPoolClientTokenValidityUnits {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#access_token CognitoUserPoolClient#access_token}
    */
    readonly accessToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#id_token CognitoUserPoolClient#id_token}
    */
    readonly idToken?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html#refresh_token CognitoUserPoolClient#refresh_token}
    */
    readonly refreshToken?: string;
}
export declare function cognitoUserPoolClientTokenValidityUnitsToTerraform(struct?: CognitoUserPoolClientTokenValidityUnitsOutputReference | CognitoUserPoolClientTokenValidityUnits): any;
export declare class CognitoUserPoolClientTokenValidityUnitsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CognitoUserPoolClientTokenValidityUnits | undefined;
    set internalValue(value: CognitoUserPoolClientTokenValidityUnits | undefined);
    private _accessToken?;
    get accessToken(): string;
    set accessToken(value: string);
    resetAccessToken(): void;
    get accessTokenInput(): string;
    private _idToken?;
    get idToken(): string;
    set idToken(value: string);
    resetIdToken(): void;
    get idTokenInput(): string;
    private _refreshToken?;
    get refreshToken(): string;
    set refreshToken(value: string);
    resetRefreshToken(): void;
    get refreshTokenInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client}
*/
export declare class CognitoUserPoolClient extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_client.html aws_cognito_user_pool_client} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CognitoUserPoolClientConfig
    */
    constructor(scope: Construct, id: string, config: CognitoUserPoolClientConfig);
    private _accessTokenValidity?;
    get accessTokenValidity(): number;
    set accessTokenValidity(value: number);
    resetAccessTokenValidity(): void;
    get accessTokenValidityInput(): number;
    private _allowedOauthFlows?;
    get allowedOauthFlows(): string[];
    set allowedOauthFlows(value: string[]);
    resetAllowedOauthFlows(): void;
    get allowedOauthFlowsInput(): string[];
    private _allowedOauthFlowsUserPoolClient?;
    get allowedOauthFlowsUserPoolClient(): boolean | cdktf.IResolvable;
    set allowedOauthFlowsUserPoolClient(value: boolean | cdktf.IResolvable);
    resetAllowedOauthFlowsUserPoolClient(): void;
    get allowedOauthFlowsUserPoolClientInput(): boolean | cdktf.IResolvable;
    private _allowedOauthScopes?;
    get allowedOauthScopes(): string[];
    set allowedOauthScopes(value: string[]);
    resetAllowedOauthScopes(): void;
    get allowedOauthScopesInput(): string[];
    private _callbackUrls?;
    get callbackUrls(): string[];
    set callbackUrls(value: string[]);
    resetCallbackUrls(): void;
    get callbackUrlsInput(): string[];
    get clientSecret(): string;
    private _defaultRedirectUri?;
    get defaultRedirectUri(): string;
    set defaultRedirectUri(value: string);
    resetDefaultRedirectUri(): void;
    get defaultRedirectUriInput(): string;
    private _enableTokenRevocation?;
    get enableTokenRevocation(): boolean | cdktf.IResolvable;
    set enableTokenRevocation(value: boolean | cdktf.IResolvable);
    resetEnableTokenRevocation(): void;
    get enableTokenRevocationInput(): boolean | cdktf.IResolvable;
    private _explicitAuthFlows?;
    get explicitAuthFlows(): string[];
    set explicitAuthFlows(value: string[]);
    resetExplicitAuthFlows(): void;
    get explicitAuthFlowsInput(): string[];
    private _generateSecret?;
    get generateSecret(): boolean | cdktf.IResolvable;
    set generateSecret(value: boolean | cdktf.IResolvable);
    resetGenerateSecret(): void;
    get generateSecretInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _idTokenValidity?;
    get idTokenValidity(): number;
    set idTokenValidity(value: number);
    resetIdTokenValidity(): void;
    get idTokenValidityInput(): number;
    private _logoutUrls?;
    get logoutUrls(): string[];
    set logoutUrls(value: string[]);
    resetLogoutUrls(): void;
    get logoutUrlsInput(): string[];
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _preventUserExistenceErrors?;
    get preventUserExistenceErrors(): string;
    set preventUserExistenceErrors(value: string);
    resetPreventUserExistenceErrors(): void;
    get preventUserExistenceErrorsInput(): string;
    private _readAttributes?;
    get readAttributes(): string[];
    set readAttributes(value: string[]);
    resetReadAttributes(): void;
    get readAttributesInput(): string[];
    private _refreshTokenValidity?;
    get refreshTokenValidity(): number;
    set refreshTokenValidity(value: number);
    resetRefreshTokenValidity(): void;
    get refreshTokenValidityInput(): number;
    private _supportedIdentityProviders?;
    get supportedIdentityProviders(): string[];
    set supportedIdentityProviders(value: string[]);
    resetSupportedIdentityProviders(): void;
    get supportedIdentityProvidersInput(): string[];
    private _userPoolId?;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string;
    private _writeAttributes?;
    get writeAttributes(): string[];
    set writeAttributes(value: string[]);
    resetWriteAttributes(): void;
    get writeAttributesInput(): string[];
    private _analyticsConfiguration;
    get analyticsConfiguration(): CognitoUserPoolClientAnalyticsConfigurationOutputReference;
    putAnalyticsConfiguration(value: CognitoUserPoolClientAnalyticsConfiguration): void;
    resetAnalyticsConfiguration(): void;
    get analyticsConfigurationInput(): CognitoUserPoolClientAnalyticsConfiguration;
    private _tokenValidityUnits;
    get tokenValidityUnits(): CognitoUserPoolClientTokenValidityUnitsOutputReference;
    putTokenValidityUnits(value: CognitoUserPoolClientTokenValidityUnits): void;
    resetTokenValidityUnits(): void;
    get tokenValidityUnitsInput(): CognitoUserPoolClientTokenValidityUnits;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cognito-user-pool-client.d.ts.map