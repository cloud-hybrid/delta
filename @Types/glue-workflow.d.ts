import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Glue
*/
export interface GlueWorkflowConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html#default_run_properties GlueWorkflow#default_run_properties}
    */
    readonly defaultRunProperties?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html#description GlueWorkflow#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html#max_concurrent_runs GlueWorkflow#max_concurrent_runs}
    */
    readonly maxConcurrentRuns?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html#name GlueWorkflow#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html#tags GlueWorkflow#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html#tags_all GlueWorkflow#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html aws_glue_workflow}
*/
export declare class GlueWorkflow extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/glue_workflow.html aws_glue_workflow} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options GlueWorkflowConfig = {}
    */
    constructor(scope: Construct, id: string, config?: GlueWorkflowConfig);
    get arn(): string;
    private _defaultRunProperties?;
    get defaultRunProperties(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set defaultRunProperties(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetDefaultRunProperties(): void;
    get defaultRunPropertiesInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _maxConcurrentRuns?;
    get maxConcurrentRuns(): number;
    set maxConcurrentRuns(value: number);
    resetMaxConcurrentRuns(): void;
    get maxConcurrentRunsInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=glue-workflow.d.ts.map