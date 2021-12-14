import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS ElasticSearch Service
*/
export interface ElasticsearchDomainSamlOptionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#domain_name ElasticsearchDomainSamlOptions#domain_name}
    */
    readonly domainName: string;
    /**
    * saml_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#saml_options ElasticsearchDomainSamlOptions#saml_options}
    */
    readonly samlOptions?: ElasticsearchDomainSamlOptionsSamlOptions;
}
export interface ElasticsearchDomainSamlOptionsSamlOptionsIdp {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#entity_id ElasticsearchDomainSamlOptions#entity_id}
    */
    readonly entityId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#metadata_content ElasticsearchDomainSamlOptions#metadata_content}
    */
    readonly metadataContent: string;
}
export declare function elasticsearchDomainSamlOptionsSamlOptionsIdpToTerraform(struct?: ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference | ElasticsearchDomainSamlOptionsSamlOptionsIdp): any;
export declare class ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainSamlOptionsSamlOptionsIdp | undefined;
    set internalValue(value: ElasticsearchDomainSamlOptionsSamlOptionsIdp | undefined);
    private _entityId?;
    get entityId(): string;
    set entityId(value: string);
    get entityIdInput(): string;
    private _metadataContent?;
    get metadataContent(): string;
    set metadataContent(value: string);
    get metadataContentInput(): string;
}
export interface ElasticsearchDomainSamlOptionsSamlOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#enabled ElasticsearchDomainSamlOptions#enabled}
    */
    readonly enabled?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#master_backend_role ElasticsearchDomainSamlOptions#master_backend_role}
    */
    readonly masterBackendRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#master_user_name ElasticsearchDomainSamlOptions#master_user_name}
    */
    readonly masterUserName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#roles_key ElasticsearchDomainSamlOptions#roles_key}
    */
    readonly rolesKey?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#session_timeout_minutes ElasticsearchDomainSamlOptions#session_timeout_minutes}
    */
    readonly sessionTimeoutMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#subject_key ElasticsearchDomainSamlOptions#subject_key}
    */
    readonly subjectKey?: string;
    /**
    * idp block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html#idp ElasticsearchDomainSamlOptions#idp}
    */
    readonly idp?: ElasticsearchDomainSamlOptionsSamlOptionsIdp;
}
export declare function elasticsearchDomainSamlOptionsSamlOptionsToTerraform(struct?: ElasticsearchDomainSamlOptionsSamlOptionsOutputReference | ElasticsearchDomainSamlOptionsSamlOptions): any;
export declare class ElasticsearchDomainSamlOptionsSamlOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElasticsearchDomainSamlOptionsSamlOptions | undefined;
    set internalValue(value: ElasticsearchDomainSamlOptionsSamlOptions | undefined);
    private _enabled?;
    get enabled(): boolean | cdktf.IResolvable;
    set enabled(value: boolean | cdktf.IResolvable);
    resetEnabled(): void;
    get enabledInput(): boolean | cdktf.IResolvable;
    private _masterBackendRole?;
    get masterBackendRole(): string;
    set masterBackendRole(value: string);
    resetMasterBackendRole(): void;
    get masterBackendRoleInput(): string;
    private _masterUserName?;
    get masterUserName(): string;
    set masterUserName(value: string);
    resetMasterUserName(): void;
    get masterUserNameInput(): string;
    private _rolesKey?;
    get rolesKey(): string;
    set rolesKey(value: string);
    resetRolesKey(): void;
    get rolesKeyInput(): string;
    private _sessionTimeoutMinutes?;
    get sessionTimeoutMinutes(): number;
    set sessionTimeoutMinutes(value: number);
    resetSessionTimeoutMinutes(): void;
    get sessionTimeoutMinutesInput(): number;
    private _subjectKey?;
    get subjectKey(): string;
    set subjectKey(value: string);
    resetSubjectKey(): void;
    get subjectKeyInput(): string;
    private _idp;
    get idp(): ElasticsearchDomainSamlOptionsSamlOptionsIdpOutputReference;
    putIdp(value: ElasticsearchDomainSamlOptionsSamlOptionsIdp): void;
    resetIdp(): void;
    get idpInput(): ElasticsearchDomainSamlOptionsSamlOptionsIdp;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html aws_elasticsearch_domain_saml_options}
*/
export declare class ElasticsearchDomainSamlOptions extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elasticsearch_domain_saml_options.html aws_elasticsearch_domain_saml_options} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElasticsearchDomainSamlOptionsConfig
    */
    constructor(scope: Construct, id: string, config: ElasticsearchDomainSamlOptionsConfig);
    private _domainName?;
    get domainName(): string;
    set domainName(value: string);
    get domainNameInput(): string;
    get id(): string;
    private _samlOptions;
    get samlOptions(): ElasticsearchDomainSamlOptionsSamlOptionsOutputReference;
    putSamlOptions(value: ElasticsearchDomainSamlOptionsSamlOptions): void;
    resetSamlOptions(): void;
    get samlOptionsInput(): ElasticsearchDomainSamlOptionsSamlOptions;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=elasticsearch-domain-saml-options.d.ts.map