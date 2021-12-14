import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudWatch Event Bridge
*/
export interface CloudwatchEventBusPolicyConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus_policy.html#event_bus_name CloudwatchEventBusPolicy#event_bus_name}
    */
    readonly eventBusName?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus_policy.html#policy CloudwatchEventBusPolicy#policy}
    */
    readonly policy: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus_policy.html aws_cloudwatch_event_bus_policy}
*/
export declare class CloudwatchEventBusPolicy extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_bus_policy.html aws_cloudwatch_event_bus_policy} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventBusPolicyConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchEventBusPolicyConfig);
    private _eventBusName?;
    get eventBusName(): string;
    set eventBusName(value: string);
    resetEventBusName(): void;
    get eventBusNameInput(): string;
    get id(): string;
    private _policy?;
    get policy(): string;
    set policy(value: string);
    get policyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudwatch-event-bus-policy.d.ts.map