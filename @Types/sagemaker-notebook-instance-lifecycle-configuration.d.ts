import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SageMaker
*/
export interface SagemakerNotebookInstanceLifecycleConfigurationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration.html#name SagemakerNotebookInstanceLifecycleConfiguration#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration.html#on_create SagemakerNotebookInstanceLifecycleConfiguration#on_create}
    */
    readonly onCreate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration.html#on_start SagemakerNotebookInstanceLifecycleConfiguration#on_start}
    */
    readonly onStart?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration.html aws_sagemaker_notebook_instance_lifecycle_configuration}
*/
export declare class SagemakerNotebookInstanceLifecycleConfiguration extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sagemaker_notebook_instance_lifecycle_configuration.html aws_sagemaker_notebook_instance_lifecycle_configuration} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SagemakerNotebookInstanceLifecycleConfigurationConfig = {}
    */
    constructor(scope: Construct, id: string, config?: SagemakerNotebookInstanceLifecycleConfigurationConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _onCreate?;
    get onCreate(): string;
    set onCreate(value: string);
    resetOnCreate(): void;
    get onCreateInput(): string;
    private _onStart?;
    get onStart(): string;
    set onStart(value: string);
    resetOnStart(): void;
    get onStartInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sagemaker-notebook-instance-lifecycle-configuration.d.ts.map