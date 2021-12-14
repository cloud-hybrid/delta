import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Kinesis
*/
export interface KinesisVideoStreamConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#data_retention_in_hours KinesisVideoStream#data_retention_in_hours}
    */
    readonly dataRetentionInHours?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#device_name KinesisVideoStream#device_name}
    */
    readonly deviceName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#kms_key_id KinesisVideoStream#kms_key_id}
    */
    readonly kmsKeyId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#media_type KinesisVideoStream#media_type}
    */
    readonly mediaType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#name KinesisVideoStream#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#tags KinesisVideoStream#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#tags_all KinesisVideoStream#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#timeouts KinesisVideoStream#timeouts}
    */
    readonly timeouts?: KinesisVideoStreamTimeouts;
}
export interface KinesisVideoStreamTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#create KinesisVideoStream#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#delete KinesisVideoStream#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html#update KinesisVideoStream#update}
    */
    readonly update?: string;
}
export declare function kinesisVideoStreamTimeoutsToTerraform(struct?: KinesisVideoStreamTimeoutsOutputReference | KinesisVideoStreamTimeouts): any;
export declare class KinesisVideoStreamTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): KinesisVideoStreamTimeouts | undefined;
    set internalValue(value: KinesisVideoStreamTimeouts | undefined);
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
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html aws_kinesis_video_stream}
*/
export declare class KinesisVideoStream extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/kinesis_video_stream.html aws_kinesis_video_stream} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options KinesisVideoStreamConfig
    */
    constructor(scope: Construct, id: string, config: KinesisVideoStreamConfig);
    get arn(): string;
    get creationTime(): string;
    private _dataRetentionInHours?;
    get dataRetentionInHours(): number;
    set dataRetentionInHours(value: number);
    resetDataRetentionInHours(): void;
    get dataRetentionInHoursInput(): number;
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    resetDeviceName(): void;
    get deviceNameInput(): string;
    get id(): string;
    private _kmsKeyId?;
    get kmsKeyId(): string;
    set kmsKeyId(value: string);
    resetKmsKeyId(): void;
    get kmsKeyIdInput(): string;
    private _mediaType?;
    get mediaType(): string;
    set mediaType(value: string);
    resetMediaType(): void;
    get mediaTypeInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
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
    get version(): string;
    private _timeouts;
    get timeouts(): KinesisVideoStreamTimeoutsOutputReference;
    putTimeouts(value: KinesisVideoStreamTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): KinesisVideoStreamTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=kinesis-video-stream.d.ts.map