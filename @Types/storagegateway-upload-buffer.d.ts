import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Storage Gateway
*/
export interface StoragegatewayUploadBufferConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html#disk_id StoragegatewayUploadBuffer#disk_id}
    */
    readonly diskId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html#disk_path StoragegatewayUploadBuffer#disk_path}
    */
    readonly diskPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html#gateway_arn StoragegatewayUploadBuffer#gateway_arn}
    */
    readonly gatewayArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html aws_storagegateway_upload_buffer}
*/
export declare class StoragegatewayUploadBuffer extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_upload_buffer.html aws_storagegateway_upload_buffer} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayUploadBufferConfig
    */
    constructor(scope: Construct, id: string, config: StoragegatewayUploadBufferConfig);
    private _diskId?;
    get diskId(): string;
    set diskId(value: string);
    resetDiskId(): void;
    get diskIdInput(): string;
    private _diskPath?;
    get diskPath(): string;
    set diskPath(value: string);
    resetDiskPath(): void;
    get diskPathInput(): string;
    private _gatewayArn?;
    get gatewayArn(): string;
    set gatewayArn(value: string);
    get gatewayArnInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=storagegateway-upload-buffer.d.ts.map