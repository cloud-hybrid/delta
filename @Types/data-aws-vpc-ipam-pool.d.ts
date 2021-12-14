import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsVpcIpamPoolConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool.html#allocation_resource_tags DataAwsVpcIpamPool#allocation_resource_tags}
    */
    readonly allocationResourceTags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool.html#id DataAwsVpcIpamPool#id}
    */
    readonly id?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool.html#ipam_pool_id DataAwsVpcIpamPool#ipam_pool_id}
    */
    readonly ipamPoolId?: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool.html#tags DataAwsVpcIpamPool#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool.html#filter DataAwsVpcIpamPool#filter}
    */
    readonly filter?: DataAwsVpcIpamPoolFilter[];
}
export interface DataAwsVpcIpamPoolFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool.html#name DataAwsVpcIpamPool#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool.html#values DataAwsVpcIpamPool#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcIpamPoolFilterToTerraform(struct?: DataAwsVpcIpamPoolFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool.html aws_vpc_ipam_pool}
*/
export declare class DataAwsVpcIpamPool extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpc_ipam_pool.html aws_vpc_ipam_pool} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcIpamPoolConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcIpamPoolConfig);
    get addressFamily(): string;
    get allocationDefaultNetmaskLength(): number;
    get allocationMaxNetmaskLength(): number;
    get allocationMinNetmaskLength(): number;
    private _allocationResourceTags?;
    get allocationResourceTags(): {
        [key: string]: string;
    } | cdktf.IResolvable;
    set allocationResourceTags(value: {
        [key: string]: string;
    } | cdktf.IResolvable);
    resetAllocationResourceTags(): void;
    get allocationResourceTagsInput(): cdktf.IResolvable | {
        [key: string]: string;
    };
    get arn(): string;
    get autoImport(): any;
    get awsService(): string;
    get description(): string;
    private _id?;
    get id(): string;
    set id(value: string);
    resetId(): void;
    get idInput(): string;
    private _ipamPoolId?;
    get ipamPoolId(): string;
    set ipamPoolId(value: string);
    resetIpamPoolId(): void;
    get ipamPoolIdInput(): string;
    get ipamScopeId(): string;
    get ipamScopeType(): string;
    get locale(): string;
    get poolDepth(): number;
    get publiclyAdvertisable(): any;
    get sourceIpamPoolId(): string;
    get state(): string;
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
    get filter(): DataAwsVpcIpamPoolFilter[];
    set filter(value: DataAwsVpcIpamPoolFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsVpcIpamPoolFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-vpc-ipam-pool.d.ts.map