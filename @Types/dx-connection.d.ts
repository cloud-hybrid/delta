import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Direct Connect
*/
export interface DxConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#bandwidth DxConnection#bandwidth}
    */
    readonly bandwidth: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#location DxConnection#location}
    */
    readonly location: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#name DxConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#provider_name DxConnection#provider_name}
    */
    readonly providerName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#tags DxConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html#tags_all DxConnection#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html aws_dx_connection}
*/
export declare class DxConnection extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_connection.html aws_dx_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxConnectionConfig
    */
    constructor(scope: Construct, id: string, config: DxConnectionConfig);
    get arn(): string;
    get awsDevice(): string;
    private _bandwidth?;
    get bandwidth(): string;
    set bandwidth(value: string);
    get bandwidthInput(): string;
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
//# sourceMappingURL=dx-connection.d.ts.map