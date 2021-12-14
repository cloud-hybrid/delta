import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodePipeline
*/
export interface CodepipelineWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#authentication CodepipelineWebhook#authentication}
    */
    readonly authentication: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#name CodepipelineWebhook#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#tags CodepipelineWebhook#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#tags_all CodepipelineWebhook#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#target_action CodepipelineWebhook#target_action}
    */
    readonly targetAction: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#target_pipeline CodepipelineWebhook#target_pipeline}
    */
    readonly targetPipeline: string;
    /**
    * authentication_configuration block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#authentication_configuration CodepipelineWebhook#authentication_configuration}
    */
    readonly authenticationConfiguration?: CodepipelineWebhookAuthenticationConfiguration;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#filter CodepipelineWebhook#filter}
    */
    readonly filter: CodepipelineWebhookFilter[];
}
export interface CodepipelineWebhookAuthenticationConfiguration {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#allowed_ip_range CodepipelineWebhook#allowed_ip_range}
    */
    readonly allowedIpRange?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#secret_token CodepipelineWebhook#secret_token}
    */
    readonly secretToken?: string;
}
export declare function codepipelineWebhookAuthenticationConfigurationToTerraform(struct?: CodepipelineWebhookAuthenticationConfigurationOutputReference | CodepipelineWebhookAuthenticationConfiguration): any;
export declare class CodepipelineWebhookAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CodepipelineWebhookAuthenticationConfiguration | undefined;
    set internalValue(value: CodepipelineWebhookAuthenticationConfiguration | undefined);
    private _allowedIpRange?;
    get allowedIpRange(): string;
    set allowedIpRange(value: string);
    resetAllowedIpRange(): void;
    get allowedIpRangeInput(): string;
    private _secretToken?;
    get secretToken(): string;
    set secretToken(value: string);
    resetSecretToken(): void;
    get secretTokenInput(): string;
}
export interface CodepipelineWebhookFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#json_path CodepipelineWebhook#json_path}
    */
    readonly jsonPath: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html#match_equals CodepipelineWebhook#match_equals}
    */
    readonly matchEquals: string;
}
export declare function codepipelineWebhookFilterToTerraform(struct?: CodepipelineWebhookFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html aws_codepipeline_webhook}
*/
export declare class CodepipelineWebhook extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codepipeline_webhook.html aws_codepipeline_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodepipelineWebhookConfig
    */
    constructor(scope: Construct, id: string, config: CodepipelineWebhookConfig);
    private _authentication?;
    get authentication(): string;
    set authentication(value: string);
    get authenticationInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    private _targetAction?;
    get targetAction(): string;
    set targetAction(value: string);
    get targetActionInput(): string;
    private _targetPipeline?;
    get targetPipeline(): string;
    set targetPipeline(value: string);
    get targetPipelineInput(): string;
    get url(): string;
    private _authenticationConfiguration;
    get authenticationConfiguration(): CodepipelineWebhookAuthenticationConfigurationOutputReference;
    putAuthenticationConfiguration(value: CodepipelineWebhookAuthenticationConfiguration): void;
    resetAuthenticationConfiguration(): void;
    get authenticationConfigurationInput(): CodepipelineWebhookAuthenticationConfiguration;
    private _filter?;
    get filter(): CodepipelineWebhookFilter[];
    set filter(value: CodepipelineWebhookFilter[]);
    get filterInput(): CodepipelineWebhookFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=codepipeline-webhook.d.ts.map