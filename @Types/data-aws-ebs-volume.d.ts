import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsEbsVolumeConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html#most_recent DataAwsEbsVolume#most_recent}
    */
    readonly mostRecent?: boolean | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html#tags DataAwsEbsVolume#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html#filter DataAwsEbsVolume#filter}
    */
    readonly filter?: DataAwsEbsVolumeFilter[];
}
export interface DataAwsEbsVolumeFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html#name DataAwsEbsVolume#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html#values DataAwsEbsVolume#values}
    */
    readonly values: string[];
}
export declare function dataAwsEbsVolumeFilterToTerraform(struct?: DataAwsEbsVolumeFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html aws_ebs_volume}
*/
export declare class DataAwsEbsVolume extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_volume.html aws_ebs_volume} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsVolumeConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEbsVolumeConfig);
    get arn(): string;
    get availabilityZone(): string;
    get encrypted(): any;
    get id(): string;
    get iops(): number;
    get kmsKeyId(): string;
    private _mostRecent?;
    get mostRecent(): boolean | cdktf.IResolvable;
    set mostRecent(value: boolean | cdktf.IResolvable);
    resetMostRecent(): void;
    get mostRecentInput(): boolean | cdktf.IResolvable;
    get multiAttachEnabled(): any;
    get outpostArn(): string;
    get size(): number;
    get snapshotId(): string;
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
    get throughput(): number;
    get volumeId(): string;
    get volumeType(): string;
    private _filter?;
    get filter(): DataAwsEbsVolumeFilter[];
    set filter(value: DataAwsEbsVolumeFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEbsVolumeFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ebs-volume.d.ts.map