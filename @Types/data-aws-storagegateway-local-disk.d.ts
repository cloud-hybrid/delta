import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Storage Gateway
*/
export interface DataAwsStoragegatewayLocalDiskConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk.html#disk_node DataAwsStoragegatewayLocalDisk#disk_node}
    */
    readonly diskNode?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk.html#disk_path DataAwsStoragegatewayLocalDisk#disk_path}
    */
    readonly diskPath?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk.html#gateway_arn DataAwsStoragegatewayLocalDisk#gateway_arn}
    */
    readonly gatewayArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk.html aws_storagegateway_local_disk}
*/
export declare class DataAwsStoragegatewayLocalDisk extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/storagegateway_local_disk.html aws_storagegateway_local_disk} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsStoragegatewayLocalDiskConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsStoragegatewayLocalDiskConfig);
    get diskId(): string;
    private _diskNode?;
    get diskNode(): string;
    set diskNode(value: string);
    resetDiskNode(): void;
    get diskNodeInput(): string;
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
//# sourceMappingURL=data-aws-storagegateway-local-disk.d.ts.map