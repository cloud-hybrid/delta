import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Config
*/
export interface ConfigOrganizationConformancePackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#delivery_s3_bucket ConfigOrganizationConformancePack#delivery_s3_bucket}
    */
    readonly deliveryS3Bucket?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#delivery_s3_key_prefix ConfigOrganizationConformancePack#delivery_s3_key_prefix}
    */
    readonly deliveryS3KeyPrefix?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#excluded_accounts ConfigOrganizationConformancePack#excluded_accounts}
    */
    readonly excludedAccounts?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#name ConfigOrganizationConformancePack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#template_body ConfigOrganizationConformancePack#template_body}
    */
    readonly templateBody?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#template_s3_uri ConfigOrganizationConformancePack#template_s3_uri}
    */
    readonly templateS3Uri?: string;
    /**
    * input_parameter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#input_parameter ConfigOrganizationConformancePack#input_parameter}
    */
    readonly inputParameter?: ConfigOrganizationConformancePackInputParameter[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#timeouts ConfigOrganizationConformancePack#timeouts}
    */
    readonly timeouts?: ConfigOrganizationConformancePackTimeouts;
}
export interface ConfigOrganizationConformancePackInputParameter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#parameter_name ConfigOrganizationConformancePack#parameter_name}
    */
    readonly parameterName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#parameter_value ConfigOrganizationConformancePack#parameter_value}
    */
    readonly parameterValue: string;
}
export declare function configOrganizationConformancePackInputParameterToTerraform(struct?: ConfigOrganizationConformancePackInputParameter): any;
export interface ConfigOrganizationConformancePackTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#create ConfigOrganizationConformancePack#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#delete ConfigOrganizationConformancePack#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html#update ConfigOrganizationConformancePack#update}
    */
    readonly update?: string;
}
export declare function configOrganizationConformancePackTimeoutsToTerraform(struct?: ConfigOrganizationConformancePackTimeoutsOutputReference | ConfigOrganizationConformancePackTimeouts): any;
export declare class ConfigOrganizationConformancePackTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ConfigOrganizationConformancePackTimeouts | undefined;
    set internalValue(value: ConfigOrganizationConformancePackTimeouts | undefined);
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
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html aws_config_organization_conformance_pack}
*/
export declare class ConfigOrganizationConformancePack extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/config_organization_conformance_pack.html aws_config_organization_conformance_pack} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ConfigOrganizationConformancePackConfig
    */
    constructor(scope: Construct, id: string, config: ConfigOrganizationConformancePackConfig);
    get arn(): string;
    private _deliveryS3Bucket?;
    get deliveryS3Bucket(): string;
    set deliveryS3Bucket(value: string);
    resetDeliveryS3Bucket(): void;
    get deliveryS3BucketInput(): string;
    private _deliveryS3KeyPrefix?;
    get deliveryS3KeyPrefix(): string;
    set deliveryS3KeyPrefix(value: string);
    resetDeliveryS3KeyPrefix(): void;
    get deliveryS3KeyPrefixInput(): string;
    private _excludedAccounts?;
    get excludedAccounts(): string[];
    set excludedAccounts(value: string[]);
    resetExcludedAccounts(): void;
    get excludedAccountsInput(): string[];
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _templateBody?;
    get templateBody(): string;
    set templateBody(value: string);
    resetTemplateBody(): void;
    get templateBodyInput(): string;
    private _templateS3Uri?;
    get templateS3Uri(): string;
    set templateS3Uri(value: string);
    resetTemplateS3Uri(): void;
    get templateS3UriInput(): string;
    private _inputParameter?;
    get inputParameter(): ConfigOrganizationConformancePackInputParameter[];
    set inputParameter(value: ConfigOrganizationConformancePackInputParameter[]);
    resetInputParameter(): void;
    get inputParameterInput(): ConfigOrganizationConformancePackInputParameter[];
    private _timeouts;
    get timeouts(): ConfigOrganizationConformancePackTimeoutsOutputReference;
    putTimeouts(value: ConfigOrganizationConformancePackTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): ConfigOrganizationConformancePackTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=config-organization-conformance-pack.d.ts.map