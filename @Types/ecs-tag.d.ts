import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2 Container Service
*/
export interface EcsTagConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_tag.html#key EcsTag#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_tag.html#resource_arn EcsTag#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ecs_tag.html#value EcsTag#value}
    */
    readonly value: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ecs_tag.html aws_ecs_tag}
*/
export declare class EcsTag extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ecs_tag.html aws_ecs_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EcsTagConfig
    */
    constructor(scope: Construct, id: string, config: EcsTagConfig);
    get id(): string;
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _resourceArn?;
    get resourceArn(): string;
    set resourceArn(value: string);
    get resourceArnInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ecs-tag.d.ts.map