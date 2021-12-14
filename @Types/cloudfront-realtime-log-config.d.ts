import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFront
*/
export interface CloudfrontRealtimeLogConfigConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#fields CloudfrontRealtimeLogConfig#fields}
    */
    readonly fields: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#name CloudfrontRealtimeLogConfig#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#sampling_rate CloudfrontRealtimeLogConfig#sampling_rate}
    */
    readonly samplingRate: number;
    /**
    * endpoint block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#endpoint CloudfrontRealtimeLogConfig#endpoint}
    */
    readonly endpoint: CloudfrontRealtimeLogConfigEndpoint;
}
export interface CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#role_arn CloudfrontRealtimeLogConfig#role_arn}
    */
    readonly roleArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#stream_arn CloudfrontRealtimeLogConfig#stream_arn}
    */
    readonly streamArn: string;
}
export declare function cloudfrontRealtimeLogConfigEndpointKinesisStreamConfigToTerraform(struct?: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference | CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig): any;
export declare class CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig | undefined;
    set internalValue(value: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig | undefined);
    private _roleArn?;
    get roleArn(): string;
    set roleArn(value: string);
    get roleArnInput(): string;
    private _streamArn?;
    get streamArn(): string;
    set streamArn(value: string);
    get streamArnInput(): string;
}
export interface CloudfrontRealtimeLogConfigEndpoint {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#stream_type CloudfrontRealtimeLogConfig#stream_type}
    */
    readonly streamType: string;
    /**
    * kinesis_stream_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html#kinesis_stream_config CloudfrontRealtimeLogConfig#kinesis_stream_config}
    */
    readonly kinesisStreamConfig: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig;
}
export declare function cloudfrontRealtimeLogConfigEndpointToTerraform(struct?: CloudfrontRealtimeLogConfigEndpointOutputReference | CloudfrontRealtimeLogConfigEndpoint): any;
export declare class CloudfrontRealtimeLogConfigEndpointOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudfrontRealtimeLogConfigEndpoint | undefined;
    set internalValue(value: CloudfrontRealtimeLogConfigEndpoint | undefined);
    private _streamType?;
    get streamType(): string;
    set streamType(value: string);
    get streamTypeInput(): string;
    private _kinesisStreamConfig;
    get kinesisStreamConfig(): CloudfrontRealtimeLogConfigEndpointKinesisStreamConfigOutputReference;
    putKinesisStreamConfig(value: CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig): void;
    get kinesisStreamConfigInput(): CloudfrontRealtimeLogConfigEndpointKinesisStreamConfig;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html aws_cloudfront_realtime_log_config}
*/
export declare class CloudfrontRealtimeLogConfig extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudfront_realtime_log_config.html aws_cloudfront_realtime_log_config} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudfrontRealtimeLogConfigConfig
    */
    constructor(scope: Construct, id: string, config: CloudfrontRealtimeLogConfigConfig);
    get arn(): string;
    private _fields?;
    get fields(): string[];
    set fields(value: string[]);
    get fieldsInput(): string[];
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _samplingRate?;
    get samplingRate(): number;
    set samplingRate(value: number);
    get samplingRateInput(): number;
    private _endpoint;
    get endpoint(): CloudfrontRealtimeLogConfigEndpointOutputReference;
    putEndpoint(value: CloudfrontRealtimeLogConfigEndpoint): void;
    get endpointInput(): CloudfrontRealtimeLogConfigEndpoint;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudfront-realtime-log-config.d.ts.map