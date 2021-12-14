import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Transcoder
*/
export interface ElastictranscoderPresetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#container ElastictranscoderPreset#container}
    */
    readonly container: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#description ElastictranscoderPreset#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#name ElastictranscoderPreset#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#type ElastictranscoderPreset#type}
    */
    readonly type?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#video_codec_options ElastictranscoderPreset#video_codec_options}
    */
    readonly videoCodecOptions?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * audio block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#audio ElastictranscoderPreset#audio}
    */
    readonly audio?: ElastictranscoderPresetAudio;
    /**
    * audio_codec_options block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#audio_codec_options ElastictranscoderPreset#audio_codec_options}
    */
    readonly audioCodecOptions?: ElastictranscoderPresetAudioCodecOptions;
    /**
    * thumbnails block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#thumbnails ElastictranscoderPreset#thumbnails}
    */
    readonly thumbnails?: ElastictranscoderPresetThumbnails;
    /**
    * video block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#video ElastictranscoderPreset#video}
    */
    readonly video?: ElastictranscoderPresetVideo;
    /**
    * video_watermarks block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#video_watermarks ElastictranscoderPreset#video_watermarks}
    */
    readonly videoWatermarks?: ElastictranscoderPresetVideoWatermarks[];
}
export interface ElastictranscoderPresetAudio {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#audio_packing_mode ElastictranscoderPreset#audio_packing_mode}
    */
    readonly audioPackingMode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_rate ElastictranscoderPreset#bit_rate}
    */
    readonly bitRate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#channels ElastictranscoderPreset#channels}
    */
    readonly channels?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#codec ElastictranscoderPreset#codec}
    */
    readonly codec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sample_rate ElastictranscoderPreset#sample_rate}
    */
    readonly sampleRate?: string;
}
export declare function elastictranscoderPresetAudioToTerraform(struct?: ElastictranscoderPresetAudioOutputReference | ElastictranscoderPresetAudio): any;
export declare class ElastictranscoderPresetAudioOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElastictranscoderPresetAudio | undefined;
    set internalValue(value: ElastictranscoderPresetAudio | undefined);
    private _audioPackingMode?;
    get audioPackingMode(): string;
    set audioPackingMode(value: string);
    resetAudioPackingMode(): void;
    get audioPackingModeInput(): string;
    private _bitRate?;
    get bitRate(): string;
    set bitRate(value: string);
    resetBitRate(): void;
    get bitRateInput(): string;
    private _channels?;
    get channels(): string;
    set channels(value: string);
    resetChannels(): void;
    get channelsInput(): string;
    private _codec?;
    get codec(): string;
    set codec(value: string);
    resetCodec(): void;
    get codecInput(): string;
    private _sampleRate?;
    get sampleRate(): string;
    set sampleRate(value: string);
    resetSampleRate(): void;
    get sampleRateInput(): string;
}
export interface ElastictranscoderPresetAudioCodecOptions {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_depth ElastictranscoderPreset#bit_depth}
    */
    readonly bitDepth?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_order ElastictranscoderPreset#bit_order}
    */
    readonly bitOrder?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#profile ElastictranscoderPreset#profile}
    */
    readonly profile?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#signed ElastictranscoderPreset#signed}
    */
    readonly signed?: string;
}
export declare function elastictranscoderPresetAudioCodecOptionsToTerraform(struct?: ElastictranscoderPresetAudioCodecOptionsOutputReference | ElastictranscoderPresetAudioCodecOptions): any;
export declare class ElastictranscoderPresetAudioCodecOptionsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElastictranscoderPresetAudioCodecOptions | undefined;
    set internalValue(value: ElastictranscoderPresetAudioCodecOptions | undefined);
    private _bitDepth?;
    get bitDepth(): string;
    set bitDepth(value: string);
    resetBitDepth(): void;
    get bitDepthInput(): string;
    private _bitOrder?;
    get bitOrder(): string;
    set bitOrder(value: string);
    resetBitOrder(): void;
    get bitOrderInput(): string;
    private _profile?;
    get profile(): string;
    set profile(value: string);
    resetProfile(): void;
    get profileInput(): string;
    private _signed?;
    get signed(): string;
    set signed(value: string);
    resetSigned(): void;
    get signedInput(): string;
}
export interface ElastictranscoderPresetThumbnails {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#aspect_ratio ElastictranscoderPreset#aspect_ratio}
    */
    readonly aspectRatio?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#format ElastictranscoderPreset#format}
    */
    readonly format?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#interval ElastictranscoderPreset#interval}
    */
    readonly interval?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_height ElastictranscoderPreset#max_height}
    */
    readonly maxHeight?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_width ElastictranscoderPreset#max_width}
    */
    readonly maxWidth?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#padding_policy ElastictranscoderPreset#padding_policy}
    */
    readonly paddingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#resolution ElastictranscoderPreset#resolution}
    */
    readonly resolution?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sizing_policy ElastictranscoderPreset#sizing_policy}
    */
    readonly sizingPolicy?: string;
}
export declare function elastictranscoderPresetThumbnailsToTerraform(struct?: ElastictranscoderPresetThumbnailsOutputReference | ElastictranscoderPresetThumbnails): any;
export declare class ElastictranscoderPresetThumbnailsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElastictranscoderPresetThumbnails | undefined;
    set internalValue(value: ElastictranscoderPresetThumbnails | undefined);
    private _aspectRatio?;
    get aspectRatio(): string;
    set aspectRatio(value: string);
    resetAspectRatio(): void;
    get aspectRatioInput(): string;
    private _format?;
    get format(): string;
    set format(value: string);
    resetFormat(): void;
    get formatInput(): string;
    private _interval?;
    get interval(): string;
    set interval(value: string);
    resetInterval(): void;
    get intervalInput(): string;
    private _maxHeight?;
    get maxHeight(): string;
    set maxHeight(value: string);
    resetMaxHeight(): void;
    get maxHeightInput(): string;
    private _maxWidth?;
    get maxWidth(): string;
    set maxWidth(value: string);
    resetMaxWidth(): void;
    get maxWidthInput(): string;
    private _paddingPolicy?;
    get paddingPolicy(): string;
    set paddingPolicy(value: string);
    resetPaddingPolicy(): void;
    get paddingPolicyInput(): string;
    private _resolution?;
    get resolution(): string;
    set resolution(value: string);
    resetResolution(): void;
    get resolutionInput(): string;
    private _sizingPolicy?;
    get sizingPolicy(): string;
    set sizingPolicy(value: string);
    resetSizingPolicy(): void;
    get sizingPolicyInput(): string;
}
export interface ElastictranscoderPresetVideo {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#aspect_ratio ElastictranscoderPreset#aspect_ratio}
    */
    readonly aspectRatio?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#bit_rate ElastictranscoderPreset#bit_rate}
    */
    readonly bitRate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#codec ElastictranscoderPreset#codec}
    */
    readonly codec?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#display_aspect_ratio ElastictranscoderPreset#display_aspect_ratio}
    */
    readonly displayAspectRatio?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#fixed_gop ElastictranscoderPreset#fixed_gop}
    */
    readonly fixedGop?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#frame_rate ElastictranscoderPreset#frame_rate}
    */
    readonly frameRate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#keyframes_max_dist ElastictranscoderPreset#keyframes_max_dist}
    */
    readonly keyframesMaxDist?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_frame_rate ElastictranscoderPreset#max_frame_rate}
    */
    readonly maxFrameRate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_height ElastictranscoderPreset#max_height}
    */
    readonly maxHeight?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_width ElastictranscoderPreset#max_width}
    */
    readonly maxWidth?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#padding_policy ElastictranscoderPreset#padding_policy}
    */
    readonly paddingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#resolution ElastictranscoderPreset#resolution}
    */
    readonly resolution?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sizing_policy ElastictranscoderPreset#sizing_policy}
    */
    readonly sizingPolicy?: string;
}
export declare function elastictranscoderPresetVideoToTerraform(struct?: ElastictranscoderPresetVideoOutputReference | ElastictranscoderPresetVideo): any;
export declare class ElastictranscoderPresetVideoOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): ElastictranscoderPresetVideo | undefined;
    set internalValue(value: ElastictranscoderPresetVideo | undefined);
    private _aspectRatio?;
    get aspectRatio(): string;
    set aspectRatio(value: string);
    resetAspectRatio(): void;
    get aspectRatioInput(): string;
    private _bitRate?;
    get bitRate(): string;
    set bitRate(value: string);
    resetBitRate(): void;
    get bitRateInput(): string;
    private _codec?;
    get codec(): string;
    set codec(value: string);
    resetCodec(): void;
    get codecInput(): string;
    private _displayAspectRatio?;
    get displayAspectRatio(): string;
    set displayAspectRatio(value: string);
    resetDisplayAspectRatio(): void;
    get displayAspectRatioInput(): string;
    private _fixedGop?;
    get fixedGop(): string;
    set fixedGop(value: string);
    resetFixedGop(): void;
    get fixedGopInput(): string;
    private _frameRate?;
    get frameRate(): string;
    set frameRate(value: string);
    resetFrameRate(): void;
    get frameRateInput(): string;
    private _keyframesMaxDist?;
    get keyframesMaxDist(): string;
    set keyframesMaxDist(value: string);
    resetKeyframesMaxDist(): void;
    get keyframesMaxDistInput(): string;
    private _maxFrameRate?;
    get maxFrameRate(): string;
    set maxFrameRate(value: string);
    resetMaxFrameRate(): void;
    get maxFrameRateInput(): string;
    private _maxHeight?;
    get maxHeight(): string;
    set maxHeight(value: string);
    resetMaxHeight(): void;
    get maxHeightInput(): string;
    private _maxWidth?;
    get maxWidth(): string;
    set maxWidth(value: string);
    resetMaxWidth(): void;
    get maxWidthInput(): string;
    private _paddingPolicy?;
    get paddingPolicy(): string;
    set paddingPolicy(value: string);
    resetPaddingPolicy(): void;
    get paddingPolicyInput(): string;
    private _resolution?;
    get resolution(): string;
    set resolution(value: string);
    resetResolution(): void;
    get resolutionInput(): string;
    private _sizingPolicy?;
    get sizingPolicy(): string;
    set sizingPolicy(value: string);
    resetSizingPolicy(): void;
    get sizingPolicyInput(): string;
}
export interface ElastictranscoderPresetVideoWatermarks {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#horizontal_align ElastictranscoderPreset#horizontal_align}
    */
    readonly horizontalAlign?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#horizontal_offset ElastictranscoderPreset#horizontal_offset}
    */
    readonly horizontalOffset?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#id ElastictranscoderPreset#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_height ElastictranscoderPreset#max_height}
    */
    readonly maxHeight?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#max_width ElastictranscoderPreset#max_width}
    */
    readonly maxWidth?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#opacity ElastictranscoderPreset#opacity}
    */
    readonly opacity?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#sizing_policy ElastictranscoderPreset#sizing_policy}
    */
    readonly sizingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#target ElastictranscoderPreset#target}
    */
    readonly target?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#vertical_align ElastictranscoderPreset#vertical_align}
    */
    readonly verticalAlign?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html#vertical_offset ElastictranscoderPreset#vertical_offset}
    */
    readonly verticalOffset?: string;
}
export declare function elastictranscoderPresetVideoWatermarksToTerraform(struct?: ElastictranscoderPresetVideoWatermarks): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html aws_elastictranscoder_preset}
*/
export declare class ElastictranscoderPreset extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/elastictranscoder_preset.html aws_elastictranscoder_preset} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options ElastictranscoderPresetConfig
    */
    constructor(scope: Construct, id: string, config: ElastictranscoderPresetConfig);
    get arn(): string;
    private _container?;
    get container(): string;
    set container(value: string);
    get containerInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    resetType(): void;
    get typeInput(): string;
    private _videoCodecOptions?;
    get videoCodecOptions(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set videoCodecOptions(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetVideoCodecOptions(): void;
    get videoCodecOptionsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    private _audio;
    get audio(): ElastictranscoderPresetAudioOutputReference;
    putAudio(value: ElastictranscoderPresetAudio): void;
    resetAudio(): void;
    get audioInput(): ElastictranscoderPresetAudio;
    private _audioCodecOptions;
    get audioCodecOptions(): ElastictranscoderPresetAudioCodecOptionsOutputReference;
    putAudioCodecOptions(value: ElastictranscoderPresetAudioCodecOptions): void;
    resetAudioCodecOptions(): void;
    get audioCodecOptionsInput(): ElastictranscoderPresetAudioCodecOptions;
    private _thumbnails;
    get thumbnails(): ElastictranscoderPresetThumbnailsOutputReference;
    putThumbnails(value: ElastictranscoderPresetThumbnails): void;
    resetThumbnails(): void;
    get thumbnailsInput(): ElastictranscoderPresetThumbnails;
    private _video;
    get video(): ElastictranscoderPresetVideoOutputReference;
    putVideo(value: ElastictranscoderPresetVideo): void;
    resetVideo(): void;
    get videoInput(): ElastictranscoderPresetVideo;
    private _videoWatermarks?;
    get videoWatermarks(): ElastictranscoderPresetVideoWatermarks[];
    set videoWatermarks(value: ElastictranscoderPresetVideoWatermarks[]);
    resetVideoWatermarks(): void;
    get videoWatermarksInput(): ElastictranscoderPresetVideoWatermarks[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=elastictranscoder-preset.d.ts.map