import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS SSO Admin
*/
export interface DataAwsSsoadminInstancesConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_instances.html aws_ssoadmin_instances}
*/
export declare class DataAwsSsoadminInstances extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ssoadmin_instances.html aws_ssoadmin_instances} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSsoadminInstancesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsSsoadminInstancesConfig);
    get arns(): string[];
    get id(): string;
    get identityStoreIds(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ssoadmin-instances.d.ts.map