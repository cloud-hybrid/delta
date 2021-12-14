import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudWatch
*/
export interface DataAwsCloudwatchLogGroupsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_groups.html#log_group_name_prefix DataAwsCloudwatchLogGroups#log_group_name_prefix}
    */
    readonly logGroupNamePrefix: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_groups.html aws_cloudwatch_log_groups}
*/
export declare class DataAwsCloudwatchLogGroups extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/cloudwatch_log_groups.html aws_cloudwatch_log_groups} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsCloudwatchLogGroupsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsCloudwatchLogGroupsConfig);
    get arns(): string[];
    get id(): string;
    private _logGroupNamePrefix?;
    get logGroupNamePrefix(): string;
    set logGroupNamePrefix(value: string);
    get logGroupNamePrefixInput(): string;
    get logGroupNames(): string[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-cloudwatch-log-groups.d.ts.map