import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS Data Sources
*/
export interface DataAwsRegionsConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#all_regions DataAwsRegions#all_regions}
    */
    readonly allRegions?: boolean | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#filter DataAwsRegions#filter}
    */
    readonly filter?: DataAwsRegionsFilter[];
}
export interface DataAwsRegionsFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#name DataAwsRegions#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/regions.html#values DataAwsRegions#values}
    */
    readonly values: string[];
}
export declare function dataAwsRegionsFilterToTerraform(struct?: DataAwsRegionsFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/regions.html aws_regions}
*/
export declare class DataAwsRegions extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/regions.html aws_regions} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsRegionsConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsRegionsConfig);
    private _allRegions?;
    get allRegions(): boolean | cdktf.IResolvable;
    set allRegions(value: boolean | cdktf.IResolvable);
    resetAllRegions(): void;
    get allRegionsInput(): boolean | cdktf.IResolvable;
    get id(): string;
    get names(): string[];
    private _filter?;
    get filter(): DataAwsRegionsFilter[];
    set filter(value: DataAwsRegionsFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsRegionsFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-regions.d.ts.map