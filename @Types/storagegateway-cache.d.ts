import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Storage Gateway
*/
export interface StoragegatewayCacheConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cache.html#disk_id StoragegatewayCache#disk_id}
    */
    readonly diskId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cache.html#gateway_arn StoragegatewayCache#gateway_arn}
    */
    readonly gatewayArn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cache.html aws_storagegateway_cache}
*/
export declare class StoragegatewayCache extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/storagegateway_cache.html aws_storagegateway_cache} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options StoragegatewayCacheConfig
    */
    constructor(scope: Construct, id: string, config: StoragegatewayCacheConfig);
    private _diskId?;
    get diskId(): string;
    set diskId(value: string);
    get diskIdInput(): string;
    private _gatewayArn?;
    get gatewayArn(): string;
    set gatewayArn(value: string);
    get gatewayArnInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=storagegateway-cache.d.ts.map