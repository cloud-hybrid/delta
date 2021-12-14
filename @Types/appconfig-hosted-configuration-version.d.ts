import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AppConfig
*/
export interface AppconfigHostedConfigurationVersionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html#application_id AppconfigHostedConfigurationVersion#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html#configuration_profile_id AppconfigHostedConfigurationVersion#configuration_profile_id}
    */
    readonly configurationProfileId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html#content AppconfigHostedConfigurationVersion#content}
    */
    readonly content: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html#content_type AppconfigHostedConfigurationVersion#content_type}
    */
    readonly contentType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html#description AppconfigHostedConfigurationVersion#description}
    */
    readonly description?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html aws_appconfig_hosted_configuration_version}
*/
export declare class AppconfigHostedConfigurationVersion extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_hosted_configuration_version.html aws_appconfig_hosted_configuration_version} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigHostedConfigurationVersionConfig
    */
    constructor(scope: Construct, id: string, config: AppconfigHostedConfigurationVersionConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string;
    get arn(): string;
    private _configurationProfileId?;
    get configurationProfileId(): string;
    set configurationProfileId(value: string);
    get configurationProfileIdInput(): string;
    private _content?;
    get content(): string;
    set content(value: string);
    get contentInput(): string;
    private _contentType?;
    get contentType(): string;
    set contentType(value: string);
    get contentTypeInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    get versionNumber(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appconfig-hosted-configuration-version.d.ts.map