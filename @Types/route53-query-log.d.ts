import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Route 53
*/
export interface Route53QueryLogConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_query_log.html#cloudwatch_log_group_arn Route53QueryLog#cloudwatch_log_group_arn}
    */
    readonly cloudwatchLogGroupArn: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/route53_query_log.html#zone_id Route53QueryLog#zone_id}
    */
    readonly zoneId: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/route53_query_log.html aws_route53_query_log}
*/
export declare class Route53QueryLog extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/route53_query_log.html aws_route53_query_log} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Route53QueryLogConfig
    */
    constructor(scope: Construct, id: string, config: Route53QueryLogConfig);
    get arn(): string;
    private _cloudwatchLogGroupArn?;
    get cloudwatchLogGroupArn(): string;
    set cloudwatchLogGroupArn(value: string);
    get cloudwatchLogGroupArnInput(): string;
    get id(): string;
    private _zoneId?;
    get zoneId(): string;
    set zoneId(value: string);
    get zoneIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=route53-query-log.d.ts.map