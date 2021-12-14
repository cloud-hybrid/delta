import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudWatch
*/
export interface DataAwsCloudwatchLogGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_group.html#name DataAwsCloudwatchLogGroup#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_group.html#tags DataAwsCloudwatchLogGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_group.html aws_cloudwatch_log_group}
*/
export declare class DataAwsCloudwatchLogGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_group.html aws_cloudwatch_log_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchLogGroupConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCloudwatchLogGroupConfig);
    get arn(): string;
    get creationTime(): number;
    get id(): string;
    get kmsKeyId(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get retentionInDays(): number;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-cloudwatch-log-group.d.ts.map