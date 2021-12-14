import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Step Functions
*/
export interface DataAwsSfnActivityConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/sfn_activity.html#name DataAwsSfnActivity#name}
    */
    readonly name?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/sfn_activity.html aws_sfn_activity}
*/
export declare class DataAwsSfnActivity extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/sfn_activity.html aws_sfn_activity} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSfnActivityConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsSfnActivityConfig);
    get arn(): string;
    get creationDate(): string;
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
//# sourceMappingURL=data-aws-sfn-activity.d.ts.map