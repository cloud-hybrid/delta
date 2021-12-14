import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsEc2CoipPoolsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html#tags DataAwsEc2CoipPools#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html#filter DataAwsEc2CoipPools#filter}
    */
    readonly filter?: DataAwsEc2CoipPoolsFilter[];
}
export interface DataAwsEc2CoipPoolsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html#name DataAwsEc2CoipPools#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html#values DataAwsEc2CoipPools#values}
    */
    readonly values: string[];
}
export declare function dataAwsEc2CoipPoolsFilterToTerraform(struct?: DataAwsEc2CoipPoolsFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html aws_ec2_coip_pools}
*/
export declare class DataAwsEc2CoipPools extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ec2_coip_pools.html aws_ec2_coip_pools} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEc2CoipPoolsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEc2CoipPoolsConfig);
    get id(): string;
    get poolIds(): string[];
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
    private _filter?;
    get filter(): DataAwsEc2CoipPoolsFilter[];
    set filter(value: DataAwsEc2CoipPoolsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEc2CoipPoolsFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ec2-coip-pools.d.ts.map