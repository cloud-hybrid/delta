import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Batch
*/
export interface BatchJobQueueConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html#compute_environments BatchJobQueue#compute_environments}
    */
    readonly computeEnvironments: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html#name BatchJobQueue#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html#priority BatchJobQueue#priority}
    */
    readonly priority: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html#state BatchJobQueue#state}
    */
    readonly state: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html#tags BatchJobQueue#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html#tags_all BatchJobQueue#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html aws_batch_job_queue}
*/
export declare class BatchJobQueue extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/batch_job_queue.html aws_batch_job_queue} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options BatchJobQueueConfig
    */
    constructor(scope: Construct, id: string, config: BatchJobQueueConfig);
    get arn(): string;
    private _computeEnvironments?;
    get computeEnvironments(): string[];
    set computeEnvironments(value: string[]);
    get computeEnvironmentsInput(): string[];
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    get priorityInput(): number;
    private _state?;
    get state(): string;
    set state(value: string);
    get stateInput(): string;
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
//# sourceMappingURL=batch-job-queue.d.ts.map