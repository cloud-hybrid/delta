import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Relational Database Service
*/
export interface DataAwsDbProxyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/db_proxy.html#name DataAwsDbProxy#name}
    */
    readonly name: string;
}
export declare class DataAwsDbProxyAuth extends cdktf.ComplexComputedList {
    get authScheme(): string;
    get description(): string;
    get iamAuth(): string;
    get secretArn(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/db_proxy.html aws_db_proxy}
*/
export declare class DataAwsDbProxy extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/db_proxy.html aws_db_proxy} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsDbProxyConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsDbProxyConfig);
    get arn(): string;
    auth(index: string): DataAwsDbProxyAuth;
    get debugLogging(): any;
    get endpoint(): string;
    get engineFamily(): string;
    get id(): string;
    get idleClientTimeout(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get requireTls(): any;
    get roleArn(): string;
    get vpcId(): string;
    get vpcSecurityGroupIds(): string[];
    get vpcSubnetIds(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-db-proxy.d.ts.map