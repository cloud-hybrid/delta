import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Quantum Ledger Database
*/
export interface DataAwsQldbLedgerConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/qldb_ledger.html#name DataAwsQldbLedger#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/qldb_ledger.html aws_qldb_ledger}
*/
export declare class DataAwsQldbLedger extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/qldb_ledger.html aws_qldb_ledger} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsQldbLedgerConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsQldbLedgerConfig);
    get arn(): string;
    get deletionProtection(): any;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get permissionsMode(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-qldb-ledger.d.ts.map