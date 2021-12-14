import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Load Balancer
*/
export interface DataAwsLbTargetGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html#name DataAwsLbTargetGroup#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html#tags DataAwsLbTargetGroup#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsLbTargetGroupHealthCheck extends cdktf.ComplexComputedList {
    get enabled(): any;
    get healthyThreshold(): number;
    get interval(): number;
    get matcher(): string;
    get path(): string;
    get port(): string;
    get protocol(): string;
    get timeout(): number;
    get unhealthyThreshold(): number;
}
export declare class DataAwsLbTargetGroupStickiness extends cdktf.ComplexComputedList {
    get cookieDuration(): number;
    get cookieName(): string;
    get enabled(): any;
    get type(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html aws_lb_target_group}
*/
export declare class DataAwsLbTargetGroup extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lb_target_group.html aws_lb_target_group} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsLbTargetGroupConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsLbTargetGroupConfig);
    get arn(): string;
    get arnSuffix(): string;
    get connectionTermination(): any;
    get deregistrationDelay(): number;
    healthCheck(index: string): DataAwsLbTargetGroupHealthCheck;
    get id(): string;
    get lambdaMultiValueHeadersEnabled(): any;
    get loadBalancingAlgorithmType(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get port(): number;
    get preserveClientIp(): string;
    get protocol(): string;
    get protocolVersion(): string;
    get proxyProtocolV2(): any;
    get slowStart(): number;
    stickiness(index: string): DataAwsLbTargetGroupStickiness;
    private _tags?;
    get tags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTags(): void;
    get tagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get targetType(): string;
    get vpcId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-lb-target-group.d.ts.map