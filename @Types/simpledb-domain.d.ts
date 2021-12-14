import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SimpleDB
*/
export interface SimpledbDomainConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/simpledb_domain.html#name SimpledbDomain#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/simpledb_domain.html aws_simpledb_domain}
*/
export declare class SimpledbDomain extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/simpledb_domain.html aws_simpledb_domain} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options SimpledbDomainConfig
    */
    constructor(scope: Construct, id: string, config: SimpledbDomainConfig);
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=simpledb-domain.d.ts.map