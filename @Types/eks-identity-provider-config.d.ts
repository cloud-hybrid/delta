import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Kubernetes Service
*/
export interface EksIdentityProviderConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#cluster_name EksIdentityProviderConfig#cluster_name}
    */
    readonly clusterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#tags EksIdentityProviderConfig#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#tags_all EksIdentityProviderConfig#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * oidc block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#oidc EksIdentityProviderConfig#oidc}
    */
    readonly oidc: EksIdentityProviderConfigOidc;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#timeouts EksIdentityProviderConfig#timeouts}
    */
    readonly timeouts?: EksIdentityProviderConfigTimeouts;
}
export interface EksIdentityProviderConfigOidc {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#client_id EksIdentityProviderConfig#client_id}
    */
    readonly clientId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#groups_claim EksIdentityProviderConfig#groups_claim}
    */
    readonly groupsClaim?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#groups_prefix EksIdentityProviderConfig#groups_prefix}
    */
    readonly groupsPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#identity_provider_config_name EksIdentityProviderConfig#identity_provider_config_name}
    */
    readonly identityProviderConfigName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#issuer_url EksIdentityProviderConfig#issuer_url}
    */
    readonly issuerUrl: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#required_claims EksIdentityProviderConfig#required_claims}
    */
    readonly requiredClaims?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#username_claim EksIdentityProviderConfig#username_claim}
    */
    readonly usernameClaim?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#username_prefix EksIdentityProviderConfig#username_prefix}
    */
    readonly usernamePrefix?: string;
}
export declare function eksIdentityProviderConfigOidcToTerraform(struct?: EksIdentityProviderConfigOidcOutputReference | EksIdentityProviderConfigOidc): any;
export declare class EksIdentityProviderConfigOidcOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EksIdentityProviderConfigOidc | undefined;
    set internalValue(value: EksIdentityProviderConfigOidc | undefined);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    get clientIdInput(): string;
    private _groupsClaim?;
    get groupsClaim(): string;
    set groupsClaim(value: string);
    resetGroupsClaim(): void;
    get groupsClaimInput(): string;
    private _groupsPrefix?;
    get groupsPrefix(): string;
    set groupsPrefix(value: string);
    resetGroupsPrefix(): void;
    get groupsPrefixInput(): string;
    private _identityProviderConfigName?;
    get identityProviderConfigName(): string;
    set identityProviderConfigName(value: string);
    get identityProviderConfigNameInput(): string;
    private _issuerUrl?;
    get issuerUrl(): string;
    set issuerUrl(value: string);
    get issuerUrlInput(): string;
    private _requiredClaims?;
    get requiredClaims(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set requiredClaims(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetRequiredClaims(): void;
    get requiredClaimsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _usernameClaim?;
    get usernameClaim(): string;
    set usernameClaim(value: string);
    resetUsernameClaim(): void;
    get usernameClaimInput(): string;
    private _usernamePrefix?;
    get usernamePrefix(): string;
    set usernamePrefix(value: string);
    resetUsernamePrefix(): void;
    get usernamePrefixInput(): string;
}
export interface EksIdentityProviderConfigTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#create EksIdentityProviderConfig#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html#delete EksIdentityProviderConfig#delete}
    */
    readonly delete?: string;
}
export declare function eksIdentityProviderConfigTimeoutsToTerraform(struct?: EksIdentityProviderConfigTimeoutsOutputReference | EksIdentityProviderConfigTimeouts): any;
export declare class EksIdentityProviderConfigTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): EksIdentityProviderConfigTimeouts | undefined;
    set internalValue(value: EksIdentityProviderConfigTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html aws_eks_identity_provider_config}
*/
export declare class EksIdentityProviderConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/eks_identity_provider_config.html aws_eks_identity_provider_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EksIdentityProviderConfigConfig
    */
    constructor(scope: Construct, id: string, config: EksIdentityProviderConfigConfig);
    get arn(): string;
    private _clusterName?;
    get clusterName(): string;
    set clusterName(value: string);
    get clusterNameInput(): string;
    get id(): string;
    get status(): string;
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
    private _oidc;
    get oidc(): EksIdentityProviderConfigOidcOutputReference;
    putOidc(value: EksIdentityProviderConfigOidc): void;
    get oidcInput(): EksIdentityProviderConfigOidc;
    private _timeouts;
    get timeouts(): EksIdentityProviderConfigTimeoutsOutputReference;
    putTimeouts(value: EksIdentityProviderConfigTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): EksIdentityProviderConfigTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=eks-identity-provider-config.d.ts.map