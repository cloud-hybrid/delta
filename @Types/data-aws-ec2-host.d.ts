import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsEc2HostConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html#host_id DataAwsEc2Host#host_id}
    */
    readonly hostId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html#tags DataAwsEc2Host#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html#filter DataAwsEc2Host#filter}
    */
    readonly filter?: DataAwsEc2HostFilter[];
}
export interface DataAwsEc2HostFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html#name DataAwsEc2Host#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html#values DataAwsEc2Host#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2HostFilterToTerraform(struct?: DataAwsEc2HostFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html aws_ec2_host}
*/
export declare class DataAwsEc2Host extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_host.html aws_ec2_host} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2HostConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2HostConfig);
    get arn(): string;
    get autoPlacement(): string;
    get availabilityZone(): string;
    get cores(): number;
    private _hostId?;
    get hostId(): string;
    set hostId(value: string);
    resetHostId(): void;
    get hostIdInput(): string;
    get hostRecovery(): string;
    get id(): string;
    get instanceFamily(): string;
    get instanceType(): string;
    get ownerId(): string;
    get sockets(): number;
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
    get totalVcpus(): number;
    private _filter?;
    get filter(): DataAwsEc2HostFilter[];
    set filter(value: DataAwsEc2HostFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2HostFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ec2-host.d.ts.map