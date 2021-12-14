import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2HostConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html#auto_placement Ec2Host#auto_placement}
    */
    readonly autoPlacement?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html#availability_zone Ec2Host#availability_zone}
    */
    readonly availabilityZone: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html#host_recovery Ec2Host#host_recovery}
    */
    readonly hostRecovery?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html#instance_family Ec2Host#instance_family}
    */
    readonly instanceFamily?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html#instance_type Ec2Host#instance_type}
    */
    readonly instanceType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html#tags Ec2Host#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html#tags_all Ec2Host#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html aws_ec2_host}
*/
export declare class Ec2Host extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_host.html aws_ec2_host} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2HostConfig
    */
    constructor(scope: Construct, id: string, config: Ec2HostConfig);
    get arn(): string;
    private _autoPlacement?;
    get autoPlacement(): string;
    set autoPlacement(value: string);
    resetAutoPlacement(): void;
    get autoPlacementInput(): string;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    get availabilityZoneInput(): string;
    private _hostRecovery?;
    get hostRecovery(): string;
    set hostRecovery(value: string);
    resetHostRecovery(): void;
    get hostRecoveryInput(): string;
    get id(): string;
    private _instanceFamily?;
    get instanceFamily(): string;
    set instanceFamily(value: string);
    resetInstanceFamily(): void;
    get instanceFamilyInput(): string;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    resetInstanceType(): void;
    get instanceTypeInput(): string;
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
//# sourceMappingURL=ec2-host.d.ts.map