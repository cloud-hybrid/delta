import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Cloud9
*/
export interface Cloud9EnvironmentEc2Config extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#automatic_stop_time_minutes Cloud9EnvironmentEc2#automatic_stop_time_minutes}
    */
    readonly automaticStopTimeMinutes?: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#description Cloud9EnvironmentEc2#description}
    */
    readonly description?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#instance_type Cloud9EnvironmentEc2#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#name Cloud9EnvironmentEc2#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#owner_arn Cloud9EnvironmentEc2#owner_arn}
    */
    readonly ownerArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#subnet_id Cloud9EnvironmentEc2#subnet_id}
    */
    readonly subnetId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#tags Cloud9EnvironmentEc2#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html#tags_all Cloud9EnvironmentEc2#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html aws_cloud9_environment_ec2}
*/
export declare class Cloud9EnvironmentEc2 extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cloud9_environment_ec2.html aws_cloud9_environment_ec2} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Cloud9EnvironmentEc2Config
    */
    constructor(scope: Construct, id: string, config: Cloud9EnvironmentEc2Config);
    get arn(): string;
    private _automaticStopTimeMinutes?;
    get automaticStopTimeMinutes(): number;
    set automaticStopTimeMinutes(value: number);
    resetAutomaticStopTimeMinutes(): void;
    get automaticStopTimeMinutesInput(): number;
    private _description?;
    get description(): string;
    set description(value: string);
    resetDescription(): void;
    get descriptionInput(): string;
    get id(): string;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string;
    private _name?;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _ownerArn?;
    get ownerArn(): string;
    set ownerArn(value: string);
    resetOwnerArn(): void;
    get ownerArnInput(): string;
    private _subnetId?;
    get subnetId(): string;
    set subnetId(value: string);
    resetSubnetId(): void;
    get subnetIdInput(): string;
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
    get type(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=cloud9-environment-ec2.d.ts.map