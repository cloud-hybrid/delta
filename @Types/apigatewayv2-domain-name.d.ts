import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon API Gateway Websocket and HTTP APIs
*/
export interface Apigatewayv2DomainNameConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#domain_name Apigatewayv2DomainName#domain_name}
    */
    readonly domainName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#tags Apigatewayv2DomainName#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#tags_all Apigatewayv2DomainName#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * domain_name_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#domain_name_configuration Apigatewayv2DomainName#domain_name_configuration}
    */
    readonly domainNameConfiguration: Apigatewayv2DomainNameDomainNameConfiguration;
    /**
    * mutual_tls_authentication block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#mutual_tls_authentication Apigatewayv2DomainName#mutual_tls_authentication}
    */
    readonly mutualTlsAuthentication?: Apigatewayv2DomainNameMutualTlsAuthentication;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#timeouts Apigatewayv2DomainName#timeouts}
    */
    readonly timeouts?: Apigatewayv2DomainNameTimeouts;
}
export interface Apigatewayv2DomainNameDomainNameConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#certificate_arn Apigatewayv2DomainName#certificate_arn}
    */
    readonly certificateArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#endpoint_type Apigatewayv2DomainName#endpoint_type}
    */
    readonly endpointType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#security_policy Apigatewayv2DomainName#security_policy}
    */
    readonly securityPolicy: string;
}
export declare function apigatewayv2DomainNameDomainNameConfigurationToTerraform(struct?: Apigatewayv2DomainNameDomainNameConfigurationOutputReference | Apigatewayv2DomainNameDomainNameConfiguration): any;
export declare class Apigatewayv2DomainNameDomainNameConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Apigatewayv2DomainNameDomainNameConfiguration | undefined;
    set internalValue(value: Apigatewayv2DomainNameDomainNameConfiguration | undefined);
    private _certificateArn?;
    get certificateArn(): string;
    set certificateArn(value: string);
    get certificateArnInput(): string;
    private _endpointType?;
    get endpointType(): string;
    set endpointType(value: string);
    get endpointTypeInput(): string;
    private _securityPolicy?;
    get securityPolicy(): string;
    set securityPolicy(value: string);
    get securityPolicyInput(): string;
}
export interface Apigatewayv2DomainNameMutualTlsAuthentication {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#truststore_uri Apigatewayv2DomainName#truststore_uri}
    */
    readonly truststoreUri: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#truststore_version Apigatewayv2DomainName#truststore_version}
    */
    readonly truststoreVersion?: string;
}
export declare function apigatewayv2DomainNameMutualTlsAuthenticationToTerraform(struct?: Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference | Apigatewayv2DomainNameMutualTlsAuthentication): any;
export declare class Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Apigatewayv2DomainNameMutualTlsAuthentication | undefined;
    set internalValue(value: Apigatewayv2DomainNameMutualTlsAuthentication | undefined);
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
export interface Apigatewayv2DomainNameTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#create Apigatewayv2DomainName#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html#update Apigatewayv2DomainName#update}
    */
    readonly update?: string;
}
export declare function apigatewayv2DomainNameTimeoutsToTerraform(struct?: Apigatewayv2DomainNameTimeoutsOutputReference | Apigatewayv2DomainNameTimeouts): any;
export declare class Apigatewayv2DomainNameTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): Apigatewayv2DomainNameTimeouts | undefined;
    set internalValue(value: Apigatewayv2DomainNameTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html aws_apigatewayv2_domain_name}
*/
export declare class Apigatewayv2DomainName extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/apigatewayv2_domain_name.html aws_apigatewayv2_domain_name} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Apigatewayv2DomainNameConfig
    */
    constructor(scope: Construct, id: string, config: Apigatewayv2DomainNameConfig);
    get apiMappingSelectionExpression(): string;
    get arn(): string;
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get id(): string;
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
    private _domainNameConfiguration;
    get domainNameConfiguration(): Apigatewayv2DomainNameDomainNameConfigurationOutputReference;
    putDomainNameConfiguration(value: Apigatewayv2DomainNameDomainNameConfiguration): void;
    get domainNameConfigurationInput(): Apigatewayv2DomainNameDomainNameConfiguration;
    private _mutualTlsAuthentication;
    get mutualTlsAuthentication(): Apigatewayv2DomainNameMutualTlsAuthenticationOutputReference;
    putMutualTlsAuthentication(value: Apigatewayv2DomainNameMutualTlsAuthentication): void;
    resetMutualTlsAuthentication(): void;
    get mutualTlsAuthenticationInput(): Apigatewayv2DomainNameMutualTlsAuthentication;
    private _timeouts;
    get timeouts(): Apigatewayv2DomainNameTimeoutsOutputReference;
    putTimeouts(value: Apigatewayv2DomainNameTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): Apigatewayv2DomainNameTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=apigatewayv2-domain-name.d.ts.map