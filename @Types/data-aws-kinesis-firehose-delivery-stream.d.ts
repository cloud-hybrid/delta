import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Kinesis
*/
export interface DataAwsKinesisFirehoseDeliveryStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kinesis_firehose_delivery_stream.html#name DataAwsKinesisFirehoseDeliveryStream#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream}
*/
export declare class DataAwsKinesisFirehoseDeliveryStream extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kinesis_firehose_delivery_stream.html aws_kinesis_firehose_delivery_stream} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsKinesisFirehoseDeliveryStreamConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsKinesisFirehoseDeliveryStreamConfig);
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
//# sourceMappingURL=data-aws-kinesis-firehose-delivery-stream.d.ts.map