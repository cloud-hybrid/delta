import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Amplify
*/
export interface AmplifyWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_webhook.html#app_id AmplifyWebhook#app_id}
    */
    readonly appId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_webhook.html#branch_name AmplifyWebhook#branch_name}
    */
    readonly branchName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/amplify_webhook.html#description AmplifyWebhook#description}
    */
    readonly description?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/amplify_webhook.html aws_amplify_webhook}
*/
export declare class AmplifyWebhook extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/amplify_webhook.html aws_amplify_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AmplifyWebhookConfig
    */
    constructor(scope: Construct, id: string, config: AmplifyWebhookConfig);
    private _appId?;
    get appId(): string;
    set appId(value: string);
    get appIdInput(): string;
    get arn(): string;
    private _branchName?;
    get branchName(): string;
    set branchName(value: string);
    get branchNameInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    get url(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=amplify-webhook.d.ts.map