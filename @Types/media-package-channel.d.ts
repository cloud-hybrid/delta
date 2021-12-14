import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Media Package
*/
export interface MediaPackageChannelConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel.html#channel_id MediaPackageChannel#channel_id}
    */
    readonly channelId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel.html#description MediaPackageChannel#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel.html#tags MediaPackageChannel#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel.html#tags_all MediaPackageChannel#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class MediaPackageChannelHlsIngestIngestEndpoints extends cdktf.ComplexComputedList {
    get password(): string;
    get url(): string;
    get username(): string;
}
export declare class MediaPackageChannelHlsIngest extends cdktf.ComplexComputedList {
    get ingestEndpoints(): any;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel.html aws_media_package_channel}
*/
export declare class MediaPackageChannel extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/media_package_channel.html aws_media_package_channel} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MediaPackageChannelConfig
    */
    constructor(scope: Construct, id: string, config: MediaPackageChannelConfig);
    get arn(): string;
    private _channelId?;
    get channelId(): string;
    set channelId(value: string);
    get channelIdInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    hlsIngest(index: string): MediaPackageChannelHlsIngest;
    get id(): string;
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
//# sourceMappingURL=media-package-channel.d.ts.map