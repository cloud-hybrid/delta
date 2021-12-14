import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Data Sources
*/
export interface DataAwsArnConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/arn.html#arn DataAwsArn#arn}
    */
    readonly arn: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/arn.html aws_arn}
*/
export declare class DataAwsArn extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/arn.html aws_arn} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsArnConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsArnConfig);
    get account(): string;
    private _arn?;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get id(): string;
    get partition(): string;
    get region(): string;
    get resource(): string;
    get service(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-arn.d.ts.map