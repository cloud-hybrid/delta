import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Data Sources
*/
export interface DataAwsCallerIdentityConfig extends cdktf.TerraformMetaArguments {
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/caller_identity.html aws_caller_identity}
*/
export declare class DataAwsCallerIdentity extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/caller_identity.html aws_caller_identity} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCallerIdentityConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsCallerIdentityConfig);
    get accountId(): string;
    get arn(): string;
    get id(): string;
    get userId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-caller-identity.d.ts.map