import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Direct Connect
*/
export interface DxHostedConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html#bandwidth DxHostedConnection#bandwidth}
    */
    readonly bandwidth: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html#connection_id DxHostedConnection#connection_id}
    */
    readonly connectionId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html#name DxHostedConnection#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html#owner_account_id DxHostedConnection#owner_account_id}
    */
    readonly ownerAccountId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html#vlan DxHostedConnection#vlan}
    */
    readonly vlan: number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html aws_dx_hosted_connection}
*/
export declare class DxHostedConnection extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dx_hosted_connection.html aws_dx_hosted_connection} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DxHostedConnectionConfig
    */
    constructor(scope: Construct, id: string, config: DxHostedConnectionConfig);
    get awsDevice(): string;
    private _bandwidth?;
    get bandwidth(): string;
    set bandwidth(value: string);
    get bandwidthInput(): string;
    private _connectionId?;
    get connectionId(): string;
    set connectionId(value: string);
    get connectionIdInput(): string;
    get hasLogicalRedundancy(): string;
    get id(): string;
    get jumboFrameCapable(): any;
    get lagId(): string;
    get loaIssueTime(): string;
    get location(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _ownerAccountId?;
    get ownerAccountId(): string;
    set ownerAccountId(value: string);
    get ownerAccountIdInput(): string;
    get partnerName(): string;
    get providerName(): string;
    get region(): string;
    get state(): string;
    private _vlan?;
    get vlan(): number;
    set vlan(value: number);
    get vlanInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dx-hosted-connection.d.ts.map