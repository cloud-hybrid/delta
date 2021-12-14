import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudWatch Event Bridge
*/
export interface CloudwatchEventPermissionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#action CloudwatchEventPermission#action}
    */
    readonly action?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#event_bus_name CloudwatchEventPermission#event_bus_name}
    */
    readonly eventBusName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#principal CloudwatchEventPermission#principal}
    */
    readonly principal: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#statement_id CloudwatchEventPermission#statement_id}
    */
    readonly statementId: string;
    /**
    * condition block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#condition CloudwatchEventPermission#condition}
    */
    readonly condition?: CloudwatchEventPermissionCondition;
}
export interface CloudwatchEventPermissionCondition {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#key CloudwatchEventPermission#key}
    */
    readonly key: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#type CloudwatchEventPermission#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html#value CloudwatchEventPermission#value}
    */
    readonly value: string;
}
export declare function cloudwatchEventPermissionConditionToTerraform(struct?: CloudwatchEventPermissionConditionOutputReference | CloudwatchEventPermissionCondition): any;
export declare class CloudwatchEventPermissionConditionOutputReference extends cdktf.ComplexObject {
    private isEmptyObject;
    /**
    * @param terraformResource The parent resource
    * @param terraformAttribute The attribute on the parent resource this class is referencing
    * @param isSingleItem True if this is a block, false if it's a list
    */
    constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean);
    get internalValue(): CloudwatchEventPermissionCondition | undefined;
    set internalValue(value: CloudwatchEventPermissionCondition | undefined);
    private _key?;
    get key(): string;
    set key(value: string);
    get keyInput(): string;
    private _type?;
    get type(): string;
    set type(value: string);
    get typeInput(): string;
    private _value?;
    get value(): string;
    set value(value: string);
    get valueInput(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html aws_cloudwatch_event_permission}
*/
export declare class CloudwatchEventPermission extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_permission.html aws_cloudwatch_event_permission} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventPermissionConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchEventPermissionConfig);
    private _action?;
    get action(): string;
    set action(value: string);
    resetAction(): void;
    get actionInput(): string;
    private _eventBusName?;
    get eventBusName(): string;
    set eventBusName(value: string);
    resetEventBusName(): void;
    get eventBusNameInput(): string;
    get id(): string;
    private _principal?;
    get principal(): string;
    set principal(value: string);
    get principalInput(): string;
    private _statementId?;
    get statementId(): string;
    set statementId(value: string);
    get statementIdInput(): string;
    private _condition;
    get condition(): CloudwatchEventPermissionConditionOutputReference;
    putCondition(value: CloudwatchEventPermissionCondition): void;
    resetCondition(): void;
    get conditionInput(): CloudwatchEventPermissionCondition;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudwatch-event-permission.d.ts.map