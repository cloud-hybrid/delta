import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2 Container Service
*/
export interface DataAwsEcsTaskDefinitionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecs_task_definition.html#task_definition DataAwsEcsTaskDefinition#task_definition}
    */
    readonly taskDefinition: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecs_task_definition.html aws_ecs_task_definition}
*/
export declare class DataAwsEcsTaskDefinition extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecs_task_definition.html aws_ecs_task_definition} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEcsTaskDefinitionConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsEcsTaskDefinitionConfig);
    get family(): string;
    get id(): string;
    get networkMode(): string;
    get revision(): number;
    get status(): string;
    private _taskDefinition?;
    get taskDefinition(): string;
    set taskDefinition(value: string);
    get taskDefinitionInput(): string;
    get taskRoleArn(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ecs-task-definition.d.ts.map