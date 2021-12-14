import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudFormation
*/
export interface DataAwsCloudformationStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html#name DataAwsCloudformationStack#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html#tags DataAwsCloudformationStack#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html aws_cloudformation_stack}
*/
export declare class DataAwsCloudformationStack extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudformation_stack.html aws_cloudformation_stack} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudformationStackConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCloudformationStackConfig);
    get capabilities(): string[];
    get description(): string;
    get disableRollback(): any;
    get iamRoleArn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    get notificationArns(): string[];
    outputs(key: string): string;
    parameters(key: string): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get templateBody(): string;
    get timeoutInMinutes(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-cloudformation-stack.d.ts.map