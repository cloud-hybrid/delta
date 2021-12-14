import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Transfer
*/
export interface DataAwsTransferServerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/transfer_server.html#server_id DataAwsTransferServer#server_id}
    */
    readonly serverId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/transfer_server.html aws_transfer_server}
*/
export declare class DataAwsTransferServer extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/transfer_server.html aws_transfer_server} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsTransferServerConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsTransferServerConfig);
    get arn(): string;
    get certificate(): string;
    get domain(): string;
    get endpoint(): string;
    get endpointType(): string;
    get id(): string;
    get identityProviderType(): string;
    get invocationRole(): string;
    get loggingRole(): string;
    get protocols(): string[];
    get securityPolicyName(): string;
    private _serverId?;
    get serverId(): string;
    set serverId(value: string);
    get serverIdInput(): string;
    get url(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-transfer-server.d.ts.map