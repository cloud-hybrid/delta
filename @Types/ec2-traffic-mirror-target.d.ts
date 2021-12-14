import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2TrafficMirrorTargetConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html#description Ec2TrafficMirrorTarget#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html#network_interface_id Ec2TrafficMirrorTarget#network_interface_id}
    */
    readonly networkInterfaceId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html#network_load_balancer_arn Ec2TrafficMirrorTarget#network_load_balancer_arn}
    */
    readonly networkLoadBalancerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html#tags Ec2TrafficMirrorTarget#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html#tags_all Ec2TrafficMirrorTarget#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html aws_ec2_traffic_mirror_target}
*/
export declare class Ec2TrafficMirrorTarget extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_target.html aws_ec2_traffic_mirror_target} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TrafficMirrorTargetConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Ec2TrafficMirrorTargetConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _networkInterfaceId?;
    get networkInterfaceId(): string;
    set networkInterfaceId(value: string);
    resetNetworkInterfaceId(): void;
    get networkInterfaceIdInput(): string;
    private _networkLoadBalancerArn?;
    get networkLoadBalancerArn(): string;
    set networkLoadBalancerArn(value: string);
    resetNetworkLoadBalancerArn(): void;
    get networkLoadBalancerArnInput(): string;
    get ownerId(): string;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set tagsAll(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetTagsAll(): void;
    get tagsAllInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ec2-traffic-mirror-target.d.ts.map