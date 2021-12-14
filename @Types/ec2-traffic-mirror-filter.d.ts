import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2TrafficMirrorFilterConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html#description Ec2TrafficMirrorFilter#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html#network_services Ec2TrafficMirrorFilter#network_services}
    */
    readonly networkServices?: string[];
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html#tags Ec2TrafficMirrorFilter#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html#tags_all Ec2TrafficMirrorFilter#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html aws_ec2_traffic_mirror_filter}
*/
export declare class Ec2TrafficMirrorFilter extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_filter.html aws_ec2_traffic_mirror_filter} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TrafficMirrorFilterConfig = {}
    */
    constructor(scope: Construct, id: string, config?: Ec2TrafficMirrorFilterConfig);
    get arn(): string;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _networkServices?;
    get networkServices(): string[];
    set networkServices(value: string[]);
    resetNetworkServices(): void;
    get networkServicesInput(): string[];
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
//# sourceMappingURL=ec2-traffic-mirror-filter.d.ts.map