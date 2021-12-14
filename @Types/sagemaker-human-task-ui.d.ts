import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerHumanTaskUiConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html#human_task_ui_name SagemakerHumanTaskUi#human_task_ui_name}
    */
    readonly humanTaskUiName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html#tags SagemakerHumanTaskUi#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html#tags_all SagemakerHumanTaskUi#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * ui_template block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html#ui_template SagemakerHumanTaskUi#ui_template}
    */
    readonly uiTemplate: SagemakerHumanTaskUiUiTemplate;
}
export interface SagemakerHumanTaskUiUiTemplate {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html#content SagemakerHumanTaskUi#content}
    */
    readonly content?: string;
}
export declare function sagemakerHumanTaskUiUiTemplateToTerraform(struct?: SagemakerHumanTaskUiUiTemplateOutputReference | SagemakerHumanTaskUiUiTemplate): any;
export declare class SagemakerHumanTaskUiUiTemplateOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): SagemakerHumanTaskUiUiTemplate | undefined;
    set internalValue(value: SagemakerHumanTaskUiUiTemplate | undefined);
    private _content?;
    get content(): string;
    set content(value: string);
    resetContent(): void;
    get contentInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html aws_sagemaker_human_task_ui}
*/
export declare class SagemakerHumanTaskUi extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_human_task_ui.html aws_sagemaker_human_task_ui} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerHumanTaskUiConfig
    */
    constructor(scope: Construct, id: string, config: SagemakerHumanTaskUiConfig);
    get arn(): string;
    private _humanTaskUiName?;
    get humanTaskUiName(): string;
    set humanTaskUiName(value: string);
    get humanTaskUiNameInput(): string;
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
    private _uiTemplate;
    get uiTemplate(): SagemakerHumanTaskUiUiTemplateOutputReference;
    putUiTemplate(value: SagemakerHumanTaskUiUiTemplate): void;
    get uiTemplateInput(): SagemakerHumanTaskUiUiTemplate;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-human-task-ui.d.ts.map