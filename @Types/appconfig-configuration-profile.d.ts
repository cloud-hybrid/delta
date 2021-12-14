import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AppConfig
*/
export interface AppconfigConfigurationProfileConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#application_id AppconfigConfigurationProfile#application_id}
    */
    readonly applicationId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#description AppconfigConfigurationProfile#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#location_uri AppconfigConfigurationProfile#location_uri}
    */
    readonly locationUri: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#name AppconfigConfigurationProfile#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#retrieval_role_arn AppconfigConfigurationProfile#retrieval_role_arn}
    */
    readonly retrievalRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#tags AppconfigConfigurationProfile#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#tags_all AppconfigConfigurationProfile#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * validator block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#validator AppconfigConfigurationProfile#validator}
    */
    readonly validator?: AppconfigConfigurationProfileValidator[];
}
export interface AppconfigConfigurationProfileValidator {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#content AppconfigConfigurationProfile#content}
    */
    readonly content?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html#type AppconfigConfigurationProfile#type}
    */
    readonly type: string;
}
export declare function appconfigConfigurationProfileValidatorToTerraform(struct?: AppconfigConfigurationProfileValidator): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html aws_appconfig_configuration_profile}
*/
export declare class AppconfigConfigurationProfile extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/appconfig_configuration_profile.html aws_appconfig_configuration_profile} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AppconfigConfigurationProfileConfig
    */
    constructor(scope: Construct, id: string, config: AppconfigConfigurationProfileConfig);
    private _applicationId?;
    get applicationId(): string;
    set applicationId(value: string);
    get applicationIdInput(): string;
    get arn(): string;
    get configurationProfileId(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _locationUri?;
    get locationUri(): string;
    set locationUri(value: string);
    get locationUriInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _retrievalRoleArn?;
    get retrievalRoleArn(): string;
    set retrievalRoleArn(value: string);
    resetRetrievalRoleArn(): void;
    get retrievalRoleArnInput(): string;
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
    private _validator?;
    get validator(): AppconfigConfigurationProfileValidator[];
    set validator(value: AppconfigConfigurationProfileValidator[]);
    resetValidator(): void;
    get validatorInput(): AppconfigConfigurationProfileValidator[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=appconfig-configuration-profile.d.ts.map