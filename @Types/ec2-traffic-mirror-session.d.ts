import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2TrafficMirrorSessionConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#description Ec2TrafficMirrorSession#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#network_interface_id Ec2TrafficMirrorSession#network_interface_id}
    */
    readonly networkInterfaceId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#packet_length Ec2TrafficMirrorSession#packet_length}
    */
    readonly packetLength?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#session_number Ec2TrafficMirrorSession#session_number}
    */
    readonly sessionNumber: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#tags Ec2TrafficMirrorSession#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#tags_all Ec2TrafficMirrorSession#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#traffic_mirror_filter_id Ec2TrafficMirrorSession#traffic_mirror_filter_id}
    */
    readonly trafficMirrorFilterId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#traffic_mirror_target_id Ec2TrafficMirrorSession#traffic_mirror_target_id}
    */
    readonly trafficMirrorTargetId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html#virtual_network_id Ec2TrafficMirrorSession#virtual_network_id}
    */
    readonly virtualNetworkId?: number;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html aws_ec2_traffic_mirror_session}
*/
export declare class Ec2TrafficMirrorSession extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_traffic_mirror_session.html aws_ec2_traffic_mirror_session} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2TrafficMirrorSessionConfig
    */
    constructor(scope: Construct, id: string, config: Ec2TrafficMirrorSessionConfig);
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
    get networkInterfaceIdInput(): string;
    get ownerId(): string;
    private _packetLength?;
    get packetLength(): number;
    set packetLength(value: number);
    resetPacketLength(): void;
    get packetLengthInput(): number;
    private _sessionNumber?;
    get sessionNumber(): number;
    set sessionNumber(value: number);
    get sessionNumberInput(): number;
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
    private _trafficMirrorFilterId?;
    get trafficMirrorFilterId(): string;
    set trafficMirrorFilterId(value: string);
    get trafficMirrorFilterIdInput(): string;
    private _trafficMirrorTargetId?;
    get trafficMirrorTargetId(): string;
    set trafficMirrorTargetId(value: string);
    get trafficMirrorTargetIdInput(): string;
    private _virtualNetworkId?;
    get virtualNetworkId(): number;
    set virtualNetworkId(value: number);
    resetVirtualNetworkId(): void;
    get virtualNetworkIdInput(): number;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ec2-traffic-mirror-session.d.ts.map