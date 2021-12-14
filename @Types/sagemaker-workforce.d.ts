import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerWorkforceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#workforce_name SagemakerWorkforce#workforce_name}
    */
    readonly workforceName: string;
    /**
    * cognito_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#cognito_config SagemakerWorkforce#cognito_config}
    */
    readonly cognitoConfig?: SagemakerWorkforceCognitoConfig;
    /**
    * oidc_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#oidc_config SagemakerWorkforce#oidc_config}
    */
    readonly oidcConfig?: SagemakerWorkforceOidcConfig;
    /**
    * source_ip_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#source_ip_config SagemakerWorkforce#source_ip_config}
    */
    readonly sourceIpConfig?: SagemakerWorkforceSourceIpConfig;
}
export interface SagemakerWorkforceCognitoConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#client_id SagemakerWorkforce#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#user_pool SagemakerWorkforce#user_pool}
    */
    readonly userPool: string;
}
export declare function sagemakerWorkforceCognitoConfigToTerraform(struct?: SagemakerWorkforceCognitoConfigOutputReference | SagemakerWorkforceCognitoConfig): any;
export declare class SagemakerWorkforceCognitoConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerWorkforceCognitoConfig | undefined;
    set internalValue(value: SagemakerWorkforceCognitoConfig | undefined);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string;
    private _userPool?;
    get userPool(): string;
    set userPool(value: string);
    get userPoolInput(): string;
}
export interface SagemakerWorkforceOidcConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#authorization_endpoint SagemakerWorkforce#authorization_endpoint}
    */
    readonly authorizationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#client_id SagemakerWorkforce#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#client_secret SagemakerWorkforce#client_secret}
    */
    readonly clientSecret: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#issuer SagemakerWorkforce#issuer}
    */
    readonly issuer: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#jwks_uri SagemakerWorkforce#jwks_uri}
    */
    readonly jwksUri: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#logout_endpoint SagemakerWorkforce#logout_endpoint}
    */
    readonly logoutEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#token_endpoint SagemakerWorkforce#token_endpoint}
    */
    readonly tokenEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#user_info_endpoint SagemakerWorkforce#user_info_endpoint}
    */
    readonly userInfoEndpoint: string;
}
export declare function sagemakerWorkforceOidcConfigToTerraform(struct?: SagemakerWorkforceOidcConfigOutputReference | SagemakerWorkforceOidcConfig): any;
export declare class SagemakerWorkforceOidcConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerWorkforceOidcConfig | undefined;
    set internalValue(value: SagemakerWorkforceOidcConfig | undefined);
    private _authorizationEndpoint?;
    get authorizationEndpoint(): string;
    set authorizationEndpoint(value: string);
    get authorizationEndpointInput(): string;
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string;
    private _clientSecret?;
    get clientSecret(): string;
    set clientSecret(value: string);
    get clientSecretInput(): string;
    private _issuer?;
    get issuer(): string;
    set issuer(value: string);
    get issuerInput(): string;
    private _jwksUri?;
    get jwksUri(): string;
    set jwksUri(value: string);
    get jwksUriInput(): string;
    private _logoutEndpoint?;
    get logoutEndpoint(): string;
    set logoutEndpoint(value: string);
    get logoutEndpointInput(): string;
    private _tokenEndpoint?;
    get tokenEndpoint(): string;
    set tokenEndpoint(value: string);
    get tokenEndpointInput(): string;
    private _userInfoEndpoint?;
    get userInfoEndpoint(): string;
    set userInfoEndpoint(value: string);
    get userInfoEndpointInput(): string;
}
export interface SagemakerWorkforceSourceIpConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html#cidrs SagemakerWorkforce#cidrs}
    */
    readonly cidrs: string[];
}
export declare function sagemakerWorkforceSourceIpConfigToTerraform(struct?: SagemakerWorkforceSourceIpConfigOutputReference | SagemakerWorkforceSourceIpConfig): any;
export declare class SagemakerWorkforceSourceIpConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerWorkforceSourceIpConfig | undefined;
    set internalValue(value: SagemakerWorkforceSourceIpConfig | undefined);
    private _cidrs?;
    get cidrs(): string[];
    set cidrs(value: string[]);
    get cidrsInput(): string[];
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html aws_sagemaker_workforce}
*/
export declare class SagemakerWorkforce extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_workforce.html aws_sagemaker_workforce} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerWorkforceConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerWorkforceConfig);
    get arn(): string;
    get id(): string;
    get subdomain(): string;
    private _workforceName?;
    get workforceName(): string;
    set workforceName(value: string);
    get workforceNameInput(): string;
    private _cognitoConfig;
    get cognitoConfig(): SagemakerWorkforceCognitoConfigOutputReference;
    putCognitoConfig(value: SagemakerWorkforceCognitoConfig): void;
    resetCognitoConfig(): void;
    get cognitoConfigInput(): SagemakerWorkforceCognitoConfig;
    private _oidcConfig;
    get oidcConfig(): SagemakerWorkforceOidcConfigOutputReference;
    putOidcConfig(value: SagemakerWorkforceOidcConfig): void;
    resetOidcConfig(): void;
    get oidcConfigInput(): SagemakerWorkforceOidcConfig;
    private _sourceIpConfig;
    get sourceIpConfig(): SagemakerWorkforceSourceIpConfigOutputReference;
    putSourceIpConfig(value: SagemakerWorkforceSourceIpConfig): void;
    resetSourceIpConfig(): void;
    get sourceIpConfigInput(): SagemakerWorkforceSourceIpConfig;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-workforce.d.ts.map