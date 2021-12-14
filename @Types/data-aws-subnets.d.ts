import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS VPC
*/
export interface DataAwsSubnetsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnets.html#tags DataAwsSubnets#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnets.html#filter DataAwsSubnets#filter}
    */
    readonly filter?: DataAwsSubnetsFilter[];
}
export interface DataAwsSubnetsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnets.html#name DataAwsSubnets#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/subnets.html#values DataAwsSubnets#values}
    */
    readonly values: string[];
}
export declare function dataAwsSubnetsFilterToTerraform(struct?: DataAwsSubnetsFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/subnets.html aws_subnets}
*/
export declare class DataAwsSubnets extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/subnets.html aws_subnets} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsSubnetsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsSubnetsConfig);
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
    get filter(): DataAwsSubnetsFilter[];
    set filter(value: DataAwsSubnetsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsSubnetsFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-subnets.d.ts.map