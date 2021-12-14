import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Elastic MapReduce
*/
export interface EmrInstanceGroupConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#autoscaling_policy EmrInstanceGroup#autoscaling_policy}
    */
    readonly autoscalingPolicy?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#bid_price EmrInstanceGroup#bid_price}
    */
    readonly bidPrice?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#cluster_id EmrInstanceGroup#cluster_id}
    */
    readonly clusterId: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#configurations_json EmrInstanceGroup#configurations_json}
    */
    readonly configurationsJson?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#ebs_optimized EmrInstanceGroup#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#instance_count EmrInstanceGroup#instance_count}
    */
    readonly instanceCount?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#instance_type EmrInstanceGroup#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#name EmrInstanceGroup#name}
    */
    readonly name?: string;
    /**
    * ebs_config block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#ebs_config EmrInstanceGroup#ebs_config}
    */
    readonly ebsConfig?: EmrInstanceGroupEbsConfig[];
}
export interface EmrInstanceGroupEbsConfig {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#iops EmrInstanceGroup#iops}
    */
    readonly iops?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#size EmrInstanceGroup#size}
    */
    readonly size: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#type EmrInstanceGroup#type}
    */
    readonly type: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html#volumes_per_instance EmrInstanceGroup#volumes_per_instance}
    */
    readonly volumesPerInstance?: number;
}
export declare function emrInstanceGroupEbsConfigToTerraform(struct?: EmrInstanceGroupEbsConfig): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html aws_emr_instance_group}
*/
export declare class EmrInstanceGroup extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/emr_instance_group.html aws_emr_instance_group} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options EmrInstanceGroupConfig
    */
    constructor(scope: Construct, id: string, config: EmrInstanceGroupConfig);
    private _autoscalingPolicy?;
    get autoscalingPolicy(): string;
    set autoscalingPolicy(value: string);
    resetAutoscalingPolicy(): void;
    get autoscalingPolicyInput(): string;
    private _bidPrice?;
    get bidPrice(): string;
    set bidPrice(value: string);
    resetBidPrice(): void;
    get bidPriceInput(): string;
    private _clusterId?;
    get clusterId(): string;
    set clusterId(value: string);
    get clusterIdInput(): string;
    private _configurationsJson?;
    get configurationsJson(): string;
    set configurationsJson(value: string);
    resetConfigurationsJson(): void;
    get configurationsJsonInput(): string;
    private _ebsOptimized?;
    get ebsOptimized(): boolean | cdktf.IResolvable;
    set ebsOptimized(value: boolean | cdktf.IResolvable);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _instanceCount?;
    get instanceCount(): number;
    set instanceCount(value: number);
    resetInstanceCount(): void;
    get instanceCountInput(): number;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    resetName(): void;
    get nameInput(): string;
    get runningInstanceCount(): number;
    get status(): string;
    private _ebsConfig?;
    get ebsConfig(): EmrInstanceGroupEbsConfig[];
    set ebsConfig(value: EmrInstanceGroupEbsConfig[]);
    resetEbsConfig(): void;
    get ebsConfigInput(): EmrInstanceGroupEbsConfig[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=emr-instance-group.d.ts.map