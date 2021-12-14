import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface VolumeAttachmentConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#device_name VolumeAttachment#device_name}
    */
    readonly deviceName: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#force_detach VolumeAttachment#force_detach}
    */
    readonly forceDetach?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#instance_id VolumeAttachment#instance_id}
    */
    readonly instanceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#skip_destroy VolumeAttachment#skip_destroy}
    */
    readonly skipDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#stop_instance_before_detaching VolumeAttachment#stop_instance_before_detaching}
    */
    readonly stopInstanceBeforeDetaching?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html#volume_id VolumeAttachment#volume_id}
    */
    readonly volumeId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html aws_volume_attachment}
*/
export declare class VolumeAttachment extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/volume_attachment.html aws_volume_attachment} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options VolumeAttachmentConfig
    */
    constructor(scope: Construct, id: string, config: VolumeAttachmentConfig);
    private _deviceName?;
    get deviceName(): string;
    set deviceName(value: string);
    get deviceNameInput(): string;
    private _forceDetach?;
    get forceDetach(): boolean | cdktf.IResolvable;
    set forceDetach(value: boolean | cdktf.IResolvable);
    resetForceDetach(): void;
    get forceDetachInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    get instanceIdInput(): string;
    private _skipDestroy?;
    get skipDestroy(): boolean | cdktf.IResolvable;
    set skipDestroy(value: boolean | cdktf.IResolvable);
    resetSkipDestroy(): void;
    get skipDestroyInput(): boolean | cdktf.IResolvable;
    private _stopInstanceBeforeDetaching?;
    get stopInstanceBeforeDetaching(): boolean | cdktf.IResolvable;
    set stopInstanceBeforeDetaching(value: boolean | cdktf.IResolvable);
    resetStopInstanceBeforeDetaching(): void;
    get stopInstanceBeforeDetachingInput(): boolean | cdktf.IResolvable;
    private _volumeId?;
    get volumeId(): string;
    set volumeId(value: string);
    get volumeIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=volume-attachment.d.ts.map