import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Outposts
*/
export interface DataAwsOutpostsSitesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/outposts_sites.html aws_outposts_sites}
*/
export declare class DataAwsOutpostsSites extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/outposts_sites.html aws_outposts_sites} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsOutpostsSitesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsOutpostsSitesConfig);
    get id(): string;
    get ids(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-outposts-sites.d.ts.map