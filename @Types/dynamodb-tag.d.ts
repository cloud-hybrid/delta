import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS DynamoDB
*/
export interface DynamodbTagConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_tag.html#key DynamodbTag#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_tag.html#resource_arn DynamodbTag#resource_arn}
    */
    readonly resourceArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_tag.html#value DynamodbTag#value}
    */
    readonly value: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_tag.html aws_dynamodb_tag}
*/
export declare class DynamodbTag extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_tag.html aws_dynamodb_tag} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbTagConfig
    */
    constructor(scope: Construct, id: string, config: DynamodbTagConfig);
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
//# sourceMappingURL=dynamodb-tag.d.ts.map