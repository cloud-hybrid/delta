import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Direct Connect
*/
export interface DxConnectionConfirmationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_confirmation.html#connection_id DxConnectionConfirmation#connection_id}
    */
    readonly connectionId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_confirmation.html aws_dx_connection_confirmation}
*/
export declare class DxConnectionConfirmation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_connection_confirmation.html aws_dx_connection_confirmation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxConnectionConfirmationConfig
    */
    constructor(scope: Construct, id: string, config: DxConnectionConfirmationConfig);
    private _connectionId?;
    get connectionId(): string;
    set connectionId(value: string);
    get connectionIdInput(): string;
    get id(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dx-connection-confirmation.d.ts.map