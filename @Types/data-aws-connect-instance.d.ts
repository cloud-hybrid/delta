import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Connect
*/
export interface DataAwsConnectInstanceConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_instance.html#instance_alias DataAwsConnectInstance#instance_alias}
    */
    readonly instanceAlias?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/connect_instance.html#instance_id DataAwsConnectInstance#instance_id}
    */
    readonly instanceId?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/connect_instance.html aws_connect_instance}
*/
export declare class DataAwsConnectInstance extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/connect_instance.html aws_connect_instance} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsConnectInstanceConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsConnectInstanceConfig);
    get arn(): string;
    get autoResolveBestVoicesEnabled(): any;
    get contactFlowLogsEnabled(): any;
    get contactLensEnabled(): any;
    get createdTime(): string;
    get earlyMediaEnabled(): any;
    get id(): string;
    get identityManagementType(): string;
    get inboundCallsEnabled(): any;
    private _instanceAlias?;
    get instanceAlias(): string;
    set instanceAlias(value: string);
    resetInstanceAlias(): void;
    get instanceAliasInput(): string;
    private _instanceId?;
    get instanceId(): string;
    set instanceId(value: string);
    resetInstanceId(): void;
    get instanceIdInput(): string;
    get outboundCallsEnabled(): any;
    get serviceRole(): string;
    get status(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-connect-instance.d.ts.map