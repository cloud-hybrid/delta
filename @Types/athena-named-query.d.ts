import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* Amazon Athena
*/
export interface AthenaNamedQueryConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html#database AthenaNamedQuery#database}
    */
    readonly database: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html#description AthenaNamedQuery#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html#name AthenaNamedQuery#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html#query AthenaNamedQuery#query}
    */
    readonly query: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html#workgroup AthenaNamedQuery#workgroup}
    */
    readonly workgroup?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html aws_athena_named_query}
*/
export declare class AthenaNamedQuery extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/athena_named_query.html aws_athena_named_query} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options AthenaNamedQueryConfig
    */
    constructor(scope: Construct, id: string, config: AthenaNamedQueryConfig);
    private _database?;
    get database(): string;
    set database(value: string);
    get databaseInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _query?;
    get query(): string;
    set query(value: string);
    get queryInput(): string;
    private _workgroup?;
    get workgroup(): string;
    set workgroup(value: string);
    resetWorkgroup(): void;
    get workgroupInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=athena-named-query.d.ts.map