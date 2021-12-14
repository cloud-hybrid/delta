import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Kinesis
*/
export interface KinesisStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#encryption_type KinesisStream#encryption_type}
    */
    readonly encryptionType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#enforce_consumer_deletion KinesisStream#enforce_consumer_deletion}
    */
    readonly enforceConsumerDeletion?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#kms_key_id KinesisStream#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#name KinesisStream#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#retention_period KinesisStream#retention_period}
    */
    readonly retentionPeriod?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#shard_count KinesisStream#shard_count}
    */
    readonly shardCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#shard_level_metrics KinesisStream#shard_level_metrics}
    */
    readonly shardLevelMetrics?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#tags KinesisStream#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#tags_all KinesisStream#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * stream_mode_details block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#stream_mode_details KinesisStream#stream_mode_details}
    */
    readonly streamModeDetails?: KinesisStreamStreamModeDetails;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#timeouts KinesisStream#timeouts}
    */
    readonly timeouts?: KinesisStreamTimeouts;
}
export interface KinesisStreamStreamModeDetails {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#stream_mode KinesisStream#stream_mode}
    */
    readonly streamMode: string;
}
export declare function kinesisStreamStreamModeDetailsToTerraform(struct?: KinesisStreamStreamModeDetailsOutputReference | KinesisStreamStreamModeDetails): any;
export declare class KinesisStreamStreamModeDetailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisStreamStreamModeDetails | undefined;
    set internalValue(value: KinesisStreamStreamModeDetails | undefined);
    private _streamMode?;
    get streamMode(): string;
    set streamMode(value: string);
    get streamModeInput(): string;
}
export interface KinesisStreamTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#create KinesisStream#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#delete KinesisStream#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html#update KinesisStream#update}
    */
    readonly update?: string;
}
export declare function kinesisStreamTimeoutsToTerraform(struct?: KinesisStreamTimeoutsOutputReference | KinesisStreamTimeouts): any;
export declare class KinesisStreamTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisStreamTimeouts | undefined;
    set internalValue(value: KinesisStreamTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html aws_kinesis_stream}
*/
export declare class KinesisStream extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_stream.html aws_kinesis_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisStreamConfig
    */
    constructor(scope: Construct, id: string, config: KinesisStreamConfig);
    get arn(): string;
    private _encryptionType?;
    get encryptionType(): string;
    set encryptionType(value: string);
    resetEncryptionType(): void;
    get encryptionTypeInput(): string;
    private _enforceConsumerDeletion?;
    get enforceConsumerDeletion(): boolean | cdktf.IResolvable;
    set enforceConsumerDeletion(value: boolean | cdktf.IResolvable);
    resetEnforceConsumerDeletion(): void;
    get enforceConsumerDeletionInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _retentionPeriod?;
    get retentionPeriod(): number;
    set retentionPeriod(value: number);
    resetRetentionPeriod(): void;
    get retentionPeriodInput(): number;
    private _shardCount?;
    get shardCount(): number;
    set shardCount(value: number);
    resetShardCount(): void;
    get shardCountInput(): number;
    private _shardLevelMetrics?;
    get shardLevelMetrics(): string[];
    set shardLevelMetrics(value: string[]);
    resetShardLevelMetrics(): void;
    get shardLevelMetricsInput(): string[];
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
    private _streamModeDetails;
    get streamModeDetails(): KinesisStreamStreamModeDetailsOutputReference;
    putStreamModeDetails(value: KinesisStreamStreamModeDetails): void;
    resetStreamModeDetails(): void;
    get streamModeDetailsInput(): KinesisStreamStreamModeDetails;
    private _timeouts;
    get timeouts(): KinesisStreamTimeoutsOutputReference;
    putTimeouts(value: KinesisStreamTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): KinesisStreamTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=kinesis-stream.d.ts.map