import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic Load Balancer
*/
export interface DataAwsAlbConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb.html#name DataAwsAlb#name}
    */
    readonly name?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb.html#tags DataAwsAlb#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
export declare class DataAwsAlbAccessLogs extends cdktf.ComplexComputedList {
    get bucket(): string;
    get enabled(): any;
    get prefix(): string;
}
export declare class DataAwsAlbSubnetMapping extends cdktf.ComplexComputedList {
    get allocationId(): string;
    get ipv6Address(): string;
    get outpostId(): string;
    get privateIpv4Address(): string;
    get subnetId(): string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb.html aws_alb}
*/
export declare class DataAwsAlb extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/alb.html aws_alb} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsAlbConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsAlbConfig);
    accessLogs(index: string): DataAwsAlbAccessLogs;
    get arn(): string;
    get arnSuffix(): string;
    get customerOwnedIpv4Pool(): string;
    get desyncMitigationMode(): string;
    get dnsName(): string;
    get dropInvalidHeaderFields(): any;
    get enableDeletionProtection(): any;
    get enableHttp2(): any;
    get enableWafFailOpen(): any;
    get id(): string;
    get idleTimeout(): number;
    get internal(): any;
    get ipAddressType(): string;
    get loadBalancerType(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get securityGroups(): string[];
    subnetMapping(index: string): DataAwsAlbSubnetMapping;
    get subnets(): string[];
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
    get vpcId(): string;
    get zoneId(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-alb.d.ts.map