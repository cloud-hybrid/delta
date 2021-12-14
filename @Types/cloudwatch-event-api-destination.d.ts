import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS CloudWatch Event Bridge
*/
export interface CloudwatchEventApiDestinationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#connection_arn CloudwatchEventApiDestination#connection_arn}
    */
    readonly connectionArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#description CloudwatchEventApiDestination#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#http_method CloudwatchEventApiDestination#http_method}
    */
    readonly httpMethod: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#invocation_endpoint CloudwatchEventApiDestination#invocation_endpoint}
    */
    readonly invocationEndpoint: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#invocation_rate_limit_per_second CloudwatchEventApiDestination#invocation_rate_limit_per_second}
    */
    readonly invocationRateLimitPerSecond?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html#name CloudwatchEventApiDestination#name}
    */
    readonly name: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html aws_cloudwatch_event_api_destination}
*/
export declare class CloudwatchEventApiDestination extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloudwatch_event_api_destination.html aws_cloudwatch_event_api_destination} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options CloudwatchEventApiDestinationConfig
    */
    constructor(scope: Construct, id: string, config: CloudwatchEventApiDestinationConfig);
    get arn(): string;
    private _connectionArn?;
    get connectionArn(): string;
    set connectionArn(value: string);
    get connectionArnInput(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    private _httpMethod?;
    get httpMethod(): string;
    set httpMethod(value: string);
    get httpMethodInput(): string;
    get id(): string;
    private _invocationEndpoint?;
    get invocationEndpoint(): string;
    set invocationEndpoint(value: string);
    get invocationEndpointInput(): string;
    private _invocationRateLimitPerSecond?;
    get invocationRateLimitPerSecond(): number;
    set invocationRateLimitPerSecond(value: number);
    resetInvocationRateLimitPerSecond(): void;
    get invocationRateLimitPerSecondInput(): number;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloudwatch-event-api-destination.d.ts.map