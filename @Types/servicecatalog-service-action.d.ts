import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Service Catalog
*/
export interface ServicecatalogServiceActionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#accept_language ServicecatalogServiceAction#accept_language}
    */
    readonly acceptLanguage?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#description ServicecatalogServiceAction#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#name ServicecatalogServiceAction#name}
    */
    readonly name: string;
    /**
    * definition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#definition ServicecatalogServiceAction#definition}
    */
    readonly definition: ServicecatalogServiceActionDefinition;
}
export interface ServicecatalogServiceActionDefinition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#assume_role ServicecatalogServiceAction#assume_role}
    */
    readonly assumeRole?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#name ServicecatalogServiceAction#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#parameters ServicecatalogServiceAction#parameters}
    */
    readonly parameters?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#type ServicecatalogServiceAction#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html#version ServicecatalogServiceAction#version}
    */
    readonly version: string;
}
export declare function servicecatalogServiceActionDefinitionToTerraform(struct?: ServicecatalogServiceActionDefinitionOutputReference | ServicecatalogServiceActionDefinition): any;
export declare class ServicecatalogServiceActionDefinitionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ServicecatalogServiceActionDefinition | undefined;
    set internalValue(value: ServicecatalogServiceActionDefinition | undefined);
    private _assumeRole?;
    get assumeRole(): string;
    set assumeRole(value: string);
    resetAssumeRole(): void;
    get assumeRoleInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _parameters?;
    get parameters(): string;
    set parameters(value: string);
    resetParameters(): void;
    get parametersInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    private _version?;
    get version(): string;
    set version(value: string);
    get versionInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html aws_servicecatalog_service_action}
*/
export declare class ServicecatalogServiceAction extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_service_action.html aws_servicecatalog_service_action} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ServicecatalogServiceActionConfig
    */
    constructor(scope: Construct, id: string, config: ServicecatalogServiceActionConfig);
    private _acceptLanguage?;
    get acceptLanguage(): string;
    set acceptLanguage(value: string);
    resetAcceptLanguage(): void;
    get acceptLanguageInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _definition;
    get definition(): ServicecatalogServiceActionDefinitionOutputReference;
    putDefinition(value: ServicecatalogServiceActionDefinition): void;
    get definitionInput(): ServicecatalogServiceActionDefinition;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=servicecatalog-service-action.d.ts.map