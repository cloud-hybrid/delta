import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS DynamoDB
*/
export interface DynamodbGlobalTableConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#name DynamodbGlobalTable#name}
    */
    readonly name: string;
    /**
    * replica block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#replica DynamodbGlobalTable#replica}
    */
    readonly replica: DynamodbGlobalTableReplica[];
    /**
    * timeouts block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#timeouts DynamodbGlobalTable#timeouts}
    */
    readonly timeouts?: DynamodbGlobalTableTimeouts;
}
export interface DynamodbGlobalTableReplica {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#region_name DynamodbGlobalTable#region_name}
    */
    readonly regionName: string;
}
export declare function dynamodbGlobalTableReplicaToTerraform(struct?: DynamodbGlobalTableReplica): any;
export interface DynamodbGlobalTableTimeouts {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#create DynamodbGlobalTable#create}
    */
    readonly create?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#delete DynamodbGlobalTable#delete}
    */
    readonly delete?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html#update DynamodbGlobalTable#update}
    */
    readonly update?: string;
}
export declare function dynamodbGlobalTableTimeoutsToTerraform(struct?: DynamodbGlobalTableTimeoutsOutputReference | DynamodbGlobalTableTimeouts): any;
export declare class DynamodbGlobalTableTimeoutsOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): DynamodbGlobalTableTimeouts | undefined;
    set internalValue(value: DynamodbGlobalTableTimeouts | undefined);
    private _create?;
    get create(): string;
    set create(value: string);
    resetCreate(): void;
    get createInput(): string;
    private _delete?;
    get delete(): string;
    set delete(value: string);
    resetDelete(): void;
    get deleteInput(): string;
    private _update?;
    get update(): string;
    set update(value: string);
    resetUpdate(): void;
    get updateInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html aws_dynamodb_global_table}
*/
export declare class DynamodbGlobalTable extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/dynamodb_global_table.html aws_dynamodb_global_table} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DynamodbGlobalTableConfig
    */
    constructor(scope: Construct, id: string, config: DynamodbGlobalTableConfig);
    get arn(): string;
    get id(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _replica?;
    get replica(): DynamodbGlobalTableReplica[];
    set replica(value: DynamodbGlobalTableReplica[]);
    get replicaInput(): DynamodbGlobalTableReplica[];
    private _timeouts;
    get timeouts(): DynamodbGlobalTableTimeoutsOutputReference;
    putTimeouts(value: DynamodbGlobalTableTimeouts): void;
    resetTimeouts(): void;
    get timeoutsInput(): DynamodbGlobalTableTimeouts;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=dynamodb-global-table.d.ts.map