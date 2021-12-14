import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CodeBuild
*/
export interface CodebuildWebhookConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#branch_filter CodebuildWebhook#branch_filter}
    */
    readonly branchFilter?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#build_type CodebuildWebhook#build_type}
    */
    readonly buildType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#project_name CodebuildWebhook#project_name}
    */
    readonly projectName: string;
    /**
    * filter_group block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#filter_group CodebuildWebhook#filter_group}
    */
    readonly filterGroup?: CodebuildWebhookFilterGroup[];
}
export interface CodebuildWebhookFilterGroupFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#exclude_matched_pattern CodebuildWebhook#exclude_matched_pattern}
    */
    readonly excludeMatchedPattern?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#pattern CodebuildWebhook#pattern}
    */
    readonly pattern: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#type CodebuildWebhook#type}
    */
    readonly type: string;
}
export declare function codebuildWebhookFilterGroupFilterToTerraform(struct?: CodebuildWebhookFilterGroupFilter): any;
export interface CodebuildWebhookFilterGroup {
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html#filter CodebuildWebhook#filter}
    */
    readonly filter?: CodebuildWebhookFilterGroupFilter[];
}
export declare function codebuildWebhookFilterGroupToTerraform(struct?: CodebuildWebhookFilterGroup): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook}
*/
export declare class CodebuildWebhook extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codebuild_webhook.html aws_codebuild_webhook} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CodebuildWebhookConfig
    */
    constructor(scope: Construct, id: string, config: CodebuildWebhookConfig);
    private _branchFilter?;
    get branchFilter(): string;
    set branchFilter(value: string);
    resetBranchFilter(): void;
    get branchFilterInput(): string;
    private _buildType?;
    get buildType(): string;
    set buildType(value: string);
    resetBuildType(): void;
    get buildTypeInput(): string;
    get id(): string;
    get payloadUrl(): string;
    private _projectName?;
    get projectName(): string;
    set projectName(value: string);
    get projectNameInput(): string;
    get secret(): string;
    get url(): string;
    private _filterGroup?;
    get filterGroup(): CodebuildWebhookFilterGroup[];
    set filterGroup(value: CodebuildWebhookFilterGroup[]);
    resetFilterGroup(): void;
    get filterGroupInput(): CodebuildWebhookFilterGroup[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=codebuild-webhook.d.ts.map