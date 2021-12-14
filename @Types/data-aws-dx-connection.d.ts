import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Direct Connect
*/
export interface DataAwsDxConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_connection.html#name DataAwsDxConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/dx_connection.html#tags DataAwsDxConnection#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/dx_connection.html aws_dx_connection}
*/
export declare class DataAwsDxConnection extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/dx_connection.html aws_dx_connection} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDxConnectionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDxConnectionConfig);
    get arn(): string;
    get awsDevice(): string;
    get bandwidth(): string;
    get id(): string;
    get location(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get ownerAccountId(): string;
    get providerName(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-dx-connection.d.ts.map