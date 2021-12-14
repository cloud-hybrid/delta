import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
/**
* AWS EC2
*/
export interface DataAwsEbsVolumesConfig extends cdktf.TerraformMetaArguments {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html#tags DataAwsEbsVolumes#tags}
    */
    readonly tags?: {
        [key: string]: string;
    } | cdktf.IResolvable;
    /**
    * filter block
    *
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html#filter DataAwsEbsVolumes#filter}
    */
    readonly filter?: DataAwsEbsVolumesFilter[];
}
export interface DataAwsEbsVolumesFilter {
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html#name DataAwsEbsVolumes#name}
    */
    readonly name: string;
    /**
    * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html#values DataAwsEbsVolumes#values}
    */
    readonly values: string[];
}
export declare function dataAwsEbsVolumesFilterToTerraform(struct?: DataAwsEbsVolumesFilter): any;
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html aws_ebs_volumes}
*/
export declare class DataAwsEbsVolumes extends cdktf.TerraformDataSource {
    static readonly tfResourceType: string;
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ebs_volumes.html aws_ebs_volumes} Data Source
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options DataAwsEbsVolumesConfig = {}
    */
    constructor(scope: Construct, id: string, config?: DataAwsEbsVolumesConfig);
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
    get filter(): DataAwsEbsVolumesFilter[];
    set filter(value: DataAwsEbsVolumesFilter[]);
    resetFilter(): void;
    get filterInput(): DataAwsEbsVolumesFilter[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
//# sourceMappingURL=data-aws-ebs-volumes.d.ts.map