import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Outposts
*/
export interface DataAwsOutpostsSiteConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/outposts_site.html#name DataAwsOutpostsSite#name}
    */
    readonly name?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_site.html aws_outposts_site}
*/
export declare class DataAwsOutpostsSite extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_site.html aws_outposts_site} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsSiteConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsOutpostsSiteConfig);
    get accountId(): string;
    get description(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-outposts-site.d.ts.map