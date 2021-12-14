import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface FlowLogConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#eni_id FlowLog#eni_id}
    */
    readonly eniId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#iam_role_arn FlowLog#iam_role_arn}
    */
    readonly iamRoleArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_destination FlowLog#log_destination}
    */
    readonly logDestination?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_destination_type FlowLog#log_destination_type}
    */
    readonly logDestinationType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_format FlowLog#log_format}
    */
    readonly logFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#log_group_name FlowLog#log_group_name}
    */
    readonly logGroupName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#max_aggregation_interval FlowLog#max_aggregation_interval}
    */
    readonly maxAggregationInterval?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#subnet_id FlowLog#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#tags FlowLog#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#tags_all FlowLog#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#traffic_type FlowLog#traffic_type}
    */
    readonly trafficType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#vpc_id FlowLog#vpc_id}
    */
    readonly vpcId?: string;
    /**
    * destination_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#destination_options FlowLog#destination_options}
    */
    readonly destinationOptions?: FlowLogDestinationOptions;
}
export interface FlowLogDestinationOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#file_format FlowLog#file_format}
    */
    readonly fileFormat?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#hive_compatible_partitions FlowLog#hive_compatible_partitions}
    */
    readonly hiveCompatiblePartitions?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html#per_hour_partition FlowLog#per_hour_partition}
    */
    readonly perHourPartition?: boolean | cdktf.IResolvable;
}
export declare function flowLogDestinationOptionsToTerraform(struct?: FlowLogDestinationOptionsOutputReference | FlowLogDestinationOptions): any;
export declare class FlowLogDestinationOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): FlowLogDestinationOptions | undefined;
    set internalValue(value: FlowLogDestinationOptions | undefined);
    private _fileFormat?;
    get fileFormat(): string;
    set fileFormat(value: string);
    resetFileFormat(): void;
    get fileFormatInput(): string;
    private _hiveCompatiblePartitions?;
    get hiveCompatiblePartitions(): boolean | cdktf.IResolvable;
    set hiveCompatiblePartitions(value: boolean | cdktf.IResolvable);
    resetHiveCompatiblePartitions(): void;
    get hiveCompatiblePartitionsInput(): boolean | cdktf.IResolvable;
    private _perHourPartition?;
    get perHourPartition(): boolean | cdktf.IResolvable;
    set perHourPartition(value: boolean | cdktf.IResolvable);
    resetPerHourPartition(): void;
    get perHourPartitionInput(): boolean | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html aws_flow_log}
*/
export declare class FlowLog extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/flow_log.html aws_flow_log} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options FlowLogConfig
    */
    constructor(scope: Construct, id: string, config: FlowLogConfig);
    get arn(): string;
    private _eniId?;
    get eniId(): string;
    set eniId(value: string);
    resetEniId(): void;
    get eniIdInput(): string;
    private _iamRoleArn?;
    get iamRoleArn(): string;
    set iamRoleArn(value: string);
    resetIamRoleArn(): void;
    get iamRoleArnInput(): string;
    get id(): string;
    private _logDestination?;
    get logDestination(): string;
    set logDestination(value: string);
    resetLogDestination(): void;
    get logDestinationInput(): string;
    private _logDestinationType?;
    get logDestinationType(): string;
    set logDestinationType(value: string);
    resetLogDestinationType(): void;
    get logDestinationTypeInput(): string;
    private _logFormat?;
    get logFormat(): string;
    set logFormat(value: string);
    resetLogFormat(): void;
    get logFormatInput(): string;
    private _logGroupName?;
    get logGroupName(): string;
    set logGroupName(value: string);
    resetLogGroupName(): void;
    get logGroupNameInput(): string;
    private _maxAggregationInterval?;
    get maxAggregationInterval(): number;
    set maxAggregationInterval(value: number);
    resetMaxAggregationInterval(): void;
    get maxAggregationIntervalInput(): number;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string;
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
    private _trafficType?;
    get trafficType(): string;
    set trafficType(value: string);
    get trafficTypeInput(): string;
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    resetVpcId(): void;
    get vpcIdInput(): string;
    private _destinationOptions;
    get destinationOptions(): FlowLogDestinationOptionsOutputReference;
    putDestinationOptions(value: FlowLogDestinationOptions): void;
    resetDestinationOptions(): void;
    get destinationOptionsInput(): FlowLogDestinationOptions;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=flow-log.d.ts.map