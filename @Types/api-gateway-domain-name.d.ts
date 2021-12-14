import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* API Gateway
*/
export interface ApiGatewayDomainNameConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_arn ApiGatewayDomainName#certificate_arn}
    */
    readonly certificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_body ApiGatewayDomainName#certificate_body}
    */
    readonly certificateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_chain ApiGatewayDomainName#certificate_chain}
    */
    readonly certificateChain?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_name ApiGatewayDomainName#certificate_name}
    */
    readonly certificateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#certificate_private_key ApiGatewayDomainName#certificate_private_key}
    */
    readonly certificatePrivateKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#domain_name ApiGatewayDomainName#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#regional_certificate_arn ApiGatewayDomainName#regional_certificate_arn}
    */
    readonly regionalCertificateArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#regional_certificate_name ApiGatewayDomainName#regional_certificate_name}
    */
    readonly regionalCertificateName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#security_policy ApiGatewayDomainName#security_policy}
    */
    readonly securityPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#tags ApiGatewayDomainName#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#tags_all ApiGatewayDomainName#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * endpoint_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#endpoint_configuration ApiGatewayDomainName#endpoint_configuration}
    */
    readonly endpointConfiguration?: ApiGatewayDomainNameEndpointConfiguration;
    /**
    * mutual_tls_authentication block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#mutual_tls_authentication ApiGatewayDomainName#mutual_tls_authentication}
    */
    readonly mutualTlsAuthentication?: ApiGatewayDomainNameMutualTlsAuthentication;
}
export interface ApiGatewayDomainNameEndpointConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#types ApiGatewayDomainName#types}
    */
    readonly types: string[];
}
export declare function apiGatewayDomainNameEndpointConfigurationToTerraform(struct?: ApiGatewayDomainNameEndpointConfigurationOutputReference | ApiGatewayDomainNameEndpointConfiguration): any;
export declare class ApiGatewayDomainNameEndpointConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApiGatewayDomainNameEndpointConfiguration | undefined;
    set internalValue(value: ApiGatewayDomainNameEndpointConfiguration | undefined);
    private _types?;
    get types(): string[];
    set types(value: string[]);
    get typesInput(): string[];
}
export interface ApiGatewayDomainNameMutualTlsAuthentication {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#truststore_uri ApiGatewayDomainName#truststore_uri}
    */
    readonly truststoreUri: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html#truststore_version ApiGatewayDomainName#truststore_version}
    */
    readonly truststoreVersion?: string;
}
export declare function apiGatewayDomainNameMutualTlsAuthenticationToTerraform(struct?: ApiGatewayDomainNameMutualTlsAuthenticationOutputReference | ApiGatewayDomainNameMutualTlsAuthentication): any;
export declare class ApiGatewayDomainNameMutualTlsAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ApiGatewayDomainNameMutualTlsAuthentication | undefined;
    set internalValue(value: ApiGatewayDomainNameMutualTlsAuthentication | undefined);
    private _truststoreUri?;
    get truststoreUri(): string;
    set truststoreUri(value: string);
    get truststoreUriInput(): string;
    private _truststoreVersion?;
    get truststoreVersion(): string;
    set truststoreVersion(value: string);
    resetTruststoreVersion(): void;
    get truststoreVersionInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html aws_api_gateway_domain_name}
*/
export declare class ApiGatewayDomainName extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/api_gateway_domain_name.html aws_api_gateway_domain_name} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ApiGatewayDomainNameConfig
    */
    constructor(scope: Construct, id: string, config: ApiGatewayDomainNameConfig);
    get arn(): string;
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    resetCertificateArn(): void;
    get certificateArnInput(): string;
    private _certificateBody?;
    get certificateBody(): string;
    set certificateBody(value: string);
    resetCertificateBody(): void;
    get certificateBodyInput(): string;
    private _certificateChain?;
    get certificateChain(): string;
    set certificateChain(value: string);
    resetCertificateChain(): void;
    get certificateChainInput(): string;
    private _certificateName?;
    get certificateName(): string;
    set certificateName(value: string);
    resetCertificateName(): void;
    get certificateNameInput(): string;
    private _certificatePrivateKey?;
    get certificatePrivateKey(): string;
    set certificatePrivateKey(value: string);
    resetCertificatePrivateKey(): void;
    get certificatePrivateKeyInput(): string;
    get certificateUploadDate(): string;
    get cloudfrontDomainName(): string;
    get cloudfrontZoneId(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get id(): string;
    private _regionalCertificateArn?;
    get regionalCertificateArn(): string;
    set regionalCertificateArn(value: string);
    resetRegionalCertificateArn(): void;
    get regionalCertificateArnInput(): string;
    private _regionalCertificateName?;
    get regionalCertificateName(): string;
    set regionalCertificateName(value: string);
    resetRegionalCertificateName(): void;
    get regionalCertificateNameInput(): string;
    get regionalDomainName(): string;
    get regionalZoneId(): string;
    private _securityPolicy?;
    get securityPolicy(): string;
    set securityPolicy(value: string);
    resetSecurityPolicy(): void;
    get securityPolicyInput(): string;
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
    private _endpointConfiguration;
    get endpointConfiguration(): ApiGatewayDomainNameEndpointConfigurationOutputReference;
    putEndpointConfiguration(value: ApiGatewayDomainNameEndpointConfiguration): void;
    resetEndpointConfiguration(): void;
    get endpointConfigurationInput(): ApiGatewayDomainNameEndpointConfiguration;
    private _mutualTlsAuthentication;
    get mutualTlsAuthentication(): ApiGatewayDomainNameMutualTlsAuthenticationOutputReference;
    putMutualTlsAuthentication(value: ApiGatewayDomainNameMutualTlsAuthentication): void;
    resetMutualTlsAuthentication(): void;
    get mutualTlsAuthenticationInput(): ApiGatewayDomainNameMutualTlsAuthentication;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=api-gateway-domain-name.d.ts.map