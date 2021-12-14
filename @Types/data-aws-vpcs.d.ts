import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsVpcsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html#tags DataAwsVpcs#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html#filter DataAwsVpcs#filter}
    */
    readonly filter?: DataAwsVpcsFilter[];
}
export interface DataAwsVpcsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html#name DataAwsVpcs#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html#values DataAwsVpcs#values}
    */
    readonly values: string[];
}
export declare function dataAwsVpcsFilterToTerraform(struct?: DataAwsVpcsFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html aws_vpcs}
*/
export declare class DataAwsVpcs extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/vpcs.html aws_vpcs} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsVpcsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsVpcsConfig);
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
    private _filter?;
    get filter(): DataAwsVpcsFilter[];
    set filter(value: DataAwsVpcsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsVpcsFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-vpcs.d.ts.map