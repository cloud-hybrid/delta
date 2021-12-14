import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Beanstalk
*/
export interface DataAwsElasticBeanstalkSolutionStackConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html#most_recent DataAwsElasticBeanstalkSolutionStack#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html#name_regex DataAwsElasticBeanstalkSolutionStack#name_regex}
    */
    readonly nameRegex: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html aws_elastic_beanstalk_solution_stack}
*/
export declare class DataAwsElasticBeanstalkSolutionStack extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/elastic_beanstalk_solution_stack.html aws_elastic_beanstalk_solution_stack} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsElasticBeanstalkSolutionStackConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsElasticBeanstalkSolutionStackConfig);
    get id(): string;
    private _mostRecent?;
    get mostRecent(): boolean | cdktf.IResolvable;
    set mostRecent(value: boolean | cdktf.IResolvable);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | cdktf.IResolvable;
    get name(): string;
    private _nameRegex?;
    get nameRegex(): string;
    set nameRegex(value: string);
    get nameRegexInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-elastic-beanstalk-solution-stack.d.ts.map