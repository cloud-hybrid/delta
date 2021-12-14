import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudWatch Event Bridge
*/
export interface DataAwsCloudwatchEventSourceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_source.html#name_prefix DataAwsCloudwatchEventSource#name_prefix}
    */
    readonly namePrefix?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_source.html aws_cloudwatch_event_source}
*/
export declare class DataAwsCloudwatchEventSource extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_event_source.html aws_cloudwatch_event_source} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchEventSourceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsCloudwatchEventSourceConfig);
    get arn(): string;
    get createdBy(): string;
    get id(): string;
    get name(): string;
    private _namePrefix?;
    get namePrefix(): string;
    set namePrefix(value: string);
    resetNamePrefix(): void;
    get namePrefixInput(): string;
    get state(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-cloudwatch-event-source.d.ts.map