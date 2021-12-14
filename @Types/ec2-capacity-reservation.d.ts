import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface Ec2CapacityReservationConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#availability_zone Ec2CapacityReservation#availability_zone}
    */
    readonly availabilityZone: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#ebs_optimized Ec2CapacityReservation#ebs_optimized}
    */
    readonly ebsOptimized?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#end_date Ec2CapacityReservation#end_date}
    */
    readonly endDate?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#end_date_type Ec2CapacityReservation#end_date_type}
    */
    readonly endDateType?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#ephemeral_storage Ec2CapacityReservation#ephemeral_storage}
    */
    readonly ephemeralStorage?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#instance_count Ec2CapacityReservation#instance_count}
    */
    readonly instanceCount: number;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#instance_match_criteria Ec2CapacityReservation#instance_match_criteria}
    */
    readonly instanceMatchCriteria?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#instance_platform Ec2CapacityReservation#instance_platform}
    */
    readonly instancePlatform: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#instance_type Ec2CapacityReservation#instance_type}
    */
    readonly instanceType: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#outpost_arn Ec2CapacityReservation#outpost_arn}
    */
    readonly outpostArn?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#tags Ec2CapacityReservation#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#tags_all Ec2CapacityReservation#tags_all}
    */
    readonly tagsAll?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html#tenancy Ec2CapacityReservation#tenancy}
    */
    readonly tenancy?: string;
}
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html aws_ec2_capacity_reservation}
*/
export declare class Ec2CapacityReservation extends cdktf.TerraformResource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/ec2_capacity_reservation.html aws_ec2_capacity_reservation} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options Ec2CapacityReservationConfig
    */
    constructor(scope: Construct, id: string, config: Ec2CapacityReservationConfig);
    get arn(): string;
    private _availabilityZone?;
    get availabilityZone(): string;
    set availabilityZone(value: string);
    get availabilityZoneInput(): string;
    private _ebsOptimized?;
    get ebsOptimized(): boolean | cdktf.IResolvable;
    set ebsOptimized(value: boolean | cdktf.IResolvable);
    resetEbsOptimized(): void;
    get ebsOptimizedInput(): boolean | cdktf.IResolvable;
    private _endDate?;
    get endDate(): string;
    set endDate(value: string);
    resetEndDate(): void;
    get endDateInput(): string;
    private _endDateType?;
    get endDateType(): string;
    set endDateType(value: string);
    resetEndDateType(): void;
    get endDateTypeInput(): string;
    private _ephemeralStorage?;
    get ephemeralStorage(): boolean | cdktf.IResolvable;
    set ephemeralStorage(value: boolean | cdktf.IResolvable);
    resetEphemeralStorage(): void;
    get ephemeralStorageInput(): boolean | cdktf.IResolvable;
    get id(): string;
    private _instanceCount?;
    get instanceCount(): number;
    set instanceCount(value: number);
    get instanceCountInput(): number;
    private _instanceMatchCriteria?;
    get instanceMatchCriteria(): string;
    set instanceMatchCriteria(value: string);
    resetInstanceMatchCriteria(): void;
    get instanceMatchCriteriaInput(): string;
    private _instancePlatform?;
    get instancePlatform(): string;
    set instancePlatform(value: string);
    get instancePlatformInput(): string;
    private _instanceType?;
    get instanceType(): string;
    set instanceType(value: string);
    get instanceTypeInput(): string;
    private _outpostArn?;
    get outpostArn(): string;
    set outpostArn(value: string);
    resetOutpostArn(): void;
    get outpostArnInput(): string;
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
    private _tenancy?;
    get tenancy(): string;
    set tenancy(value: string);
    resetTenancy(): void;
    get tenancyInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=ec2-capacity-reservation.d.ts.map