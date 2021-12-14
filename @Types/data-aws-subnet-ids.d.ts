import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsSubnetIdsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html#tags DataAwsSubnetIds#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html#vpc_id DataAwsSubnetIds#vpc_id}
    */
    readonly vpcId: string;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html#filter DataAwsSubnetIds#filter}
    */
    readonly filter?: DataAwsSubnetIdsFilter[];
}
export interface DataAwsSubnetIdsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html#name DataAwsSubnetIds#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html#values DataAwsSubnetIds#values}
    */
    readonly values: string[];
}
export declare function dataAwsSubnetIdsFilterToTerraform(struct?: DataAwsSubnetIdsFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html aws_subnet_ids}
*/
export declare class DataAwsSubnetIds extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/subnet_ids.html aws_subnet_ids} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSubnetIdsConfig
    */
    constructor(scope: Construct, id: string, config: DataAwsSubnetIdsConfig);
    get id(): string;
    get ids(): string[];
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
    private _vpcId?;
    get vpcId(): string;
    set vpcId(value: string);
    get vpcIdInput(): string;
    private _filter?;
    get filter(): DataAwsSubnetIdsFilter[];
    set filter(value: DataAwsSubnetIdsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsSubnetIdsFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-subnet-ids.d.ts.map