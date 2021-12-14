import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Simple Notification Service
*/
export interface DataAwsSnsTopicConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sns_topic.html#name DataAwsSnsTopic#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/sns_topic.html aws_sns_topic}
*/
export declare class DataAwsSnsTopic extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/sns_topic.html aws_sns_topic} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSnsTopicConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSnsTopicConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-sns-topic.d.ts.map