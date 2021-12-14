import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Direct Connect
*/
export interface DxLagConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#connection_id DxLag#connection_id}
    */
    readonly connectionId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#connections_bandwidth DxLag#connections_bandwidth}
    */
    readonly connectionsBandwidth: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#force_destroy DxLag#force_destroy}
    */
    readonly forceDestroy?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#location DxLag#location}
    */
    readonly location: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#name DxLag#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#provider_name DxLag#provider_name}
    */
    readonly providerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#tags DxLag#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html#tags_all DxLag#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html aws_dx_lag}
*/
export declare class DxLag extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_lag.html aws_dx_lag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxLagConfig
    */
    constructor(scope: Construct, id: string, config: DxLagConfig);
    get arn(): string;
    private _connectionId?;
    get connectionId(): string;
    set connectionId(value: string);
    resetConnectionId(): void;
    get connectionIdInput(): string;
    private _connectionsBandwidth?;
    get connectionsBandwidth(): string;
    set connectionsBandwidth(value: string);
    get connectionsBandwidthInput(): string;
    private _forceDestroy?;
    get forceDestroy(): boolean | cdktf.IResolvable;
    set forceDestroy(value: boolean | cdktf.IResolvable);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | cdktf.IResolvable;
    get hasLogicalRedundancy(): string;
    get id(): string;
    get jumboFrameCapable(): any;
    private _location?;
    get location(): string;
    set location(value: string);
    get locationInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get ownerAccountId(): string;
    private _providerName?;
    get providerName(): string;
    set providerName(value: string);
    resetProviderName(): void;
    get providerNameInput(): string;
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
//# sourceMappingURL=dx-lag.d.ts.map