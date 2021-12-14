import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Queue Service
*/
export interface SqsQueuePolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_policy.html#policy SqsQueuePolicy#policy}
    */
    readonly policy: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_policy.html#queue_url SqsQueuePolicy#queue_url}
    */
    readonly queueUrl: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_policy.html aws_sqs_queue_policy}
*/
export declare class SqsQueuePolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/sqs_queue_policy.html aws_sqs_queue_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SqsQueuePolicyConfig
    */
    constructor(scope: Construct, id: string, config: SqsQueuePolicyConfig);
    get id(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    private _queueUrl?;
    get queueUrl(): string;
    set queueUrl(value: string);
    get queueUrlInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=sqs-queue-policy.d.ts.map